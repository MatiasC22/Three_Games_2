const postContainer = document.getElementById("container")

let url = 'https://jsonplaceholder.typicode.com/posts'

fetch(url)
    .then((response) => response.json())
    .then((data) => mostrarData(data))
    .catch((err) => console.log(err));

function mostrarData(data){
    for (let i = 0; i < data.length; i++) {
        const newTitle = document.createElement('div');
        newTitle.classList.add("title");

        const newComment = document.createElement("div");
        newComment.classList.add("comment");

        const peqContainer = document.createElement("div");
        peqContainer.classList.add("peqContainer");

        const newContainer = document.createElement("div");
        newContainer.classList.add("container");


        newTitle.innerHTML = data[i].title;
        newComment.innerHTML = data[i].body;


        //apendeo los hijos nuevos al container nuevo
        peqContainer.appendChild(newTitle);
        peqContainer.appendChild(newComment);
        newContainer.appendChild(peqContainer);
        
        //apendeo el container nuevo al container viejo
        postContainer.appendChild(newContainer);
    }
}