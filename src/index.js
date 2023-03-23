const init = () => {
    const inputForm = document.querySelector('form');
    let post = document.getElementById('movieDetails') 

    inputForm.addEventListener('submit',(e)=>{
        e.preventDefault();

        //Clearing previous value
        let check = Array.from(post.children)
        if (check.length > 2){
            post.children[2].remove()
        }

        // Add new value
        let idTxt = document.querySelector('input#searchByID');;
        search(post, idTxt.value);
        inputForm.reset()
    })
}

function search(tag, value){
    //Fetching
    let result
    fetch('http://localhost:3000/movies')
    .then((response)=>response.json())
    .then((books)=> {
        let shelf = books.map((book)=>book)
        console.log(shelf)
        for(let row of shelf){
            if (row.id == value){
                let book = row;                
                result = book.title
                break;
            }
        }
        console.log('result: ', result)

        //Creation of tag and assigning values
        let text = result 
        console.log(text, 'check2');

        let summary = document.createElement('p')
        summary.textContent = text;        
        tag.appendChild(summary)      
        console.log(text) 

        

    })
    
}


document.addEventListener('DOMContentLoaded', init);