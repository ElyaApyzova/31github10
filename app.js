const createPost = (el) => {
  let item = `
    <div class="card">
    <div class="card-container">
        <h5 class="card-title">${el.name}</h5>
        <p class="card-text">${el.username}</p>
        <p class="card-body">${el.email}</p>
        <p class="card-body">${el.phone}</p>
        <p class="card-body">${el.website}</p>
        </div>
    </div>`;

  return item;
};

let items = [];
let page = 1;

const nextButton = () => {
  fetch(`https://jsonplaceholder.typicode.com/users?_page=${page}`, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((array) => {
      array.forEach((post) => {
        items.push(createPost(post));
      });
      console.log(items);
    })
    .then(() => {
      let cards = items.join("");
      document.getElementById("posts").innerHTML = cards;
    })
    .catch((error) => {
      alert("No internet connection");
    });
};

nextButton();
