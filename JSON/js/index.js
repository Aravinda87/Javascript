// globale variable
const container = document.querySelector('.blogs');
const searchForm = document.querySelector('.search');

const renderpost = async(term) => {
    let uri = 'http://localhost:3000/posts?_sort=likes&_order=desc';   //sorted descending order likes    
 
    if(term){
        uri += `&q=${term}`;
    }

    const res = await fetch(uri);       // fetch data from uri 'http://localhost:3000/posts';
    const posts = await res.json();


    let templete = '';

    posts.forEach(post => {
        templete += `
        <div class="post  rounded m-3 px-5 py-3 bg-white">
            <h2>${post.title}</h2>
            <p>${post.likes}</p>
            <p>${post.body.slice(0,200)}</p>
            <a href="details.html?id=${post.id}">read more.....</a>
            <br>
        </div>
        `
    })
    container.innerHTML = templete;
}

searchForm.addEventListener('submit',(e) => {
    e.preventDefault();
    renderpost(searchForm.term.value.trim());
})
window.addEventListener('DOMContentLoaded',() => renderpost());