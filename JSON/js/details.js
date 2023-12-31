const id = new URLSearchParams(window.location.search).get('id');

const details = document.querySelector('.details');
const deletebtn = document.querySelector('.delete')
const renderdetails = async() => {

    const res = await fetch('http://localhost:3000/posts/' + id);
    const post = await res.json();

    const template =`
        <h1>${post.title}</h1>
        <p>${post.body}</p> 
        <p>${post.likes}</p>
    `
    details.innerHTML = template;
}

deletebtn.addEventListener('click',async(e) =>{
    if(confirm("do you wanna delete this post")){
        const res = await fetch('http://localhost:3000/posts/'+ id, {
    method : 'DELETE'
    })
    window.location.replace('index.html');
    }

})

window.addEventListener('DOMContentLoaded',() => renderdetails());  