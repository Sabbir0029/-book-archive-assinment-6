const button = () =>{
  const inputId = document.getElementById('inputId');
  const inputValue = inputId.value;
  const url =` http://openlibrary.org/search.json?q=${inputValue}`;
  console.log(url);
  fetch(url)
  .then(res => res.json())
  .then(data => dispaly(data.docs));
}

const dispaly = (books) =>{
  console.log(books);
  books.forEach(book => {
    const dispalyId = document.getElementById('dispalyId');
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML =`
    <div class="card">
        <img src="..." class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${book.title}</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">${book.first_publish_year}</li>
          <li class="list-group-item">A second item</li>
          <li class="list-group-item">A third item</li>
        </ul>
        <div class="card-body">
          <a href="#" class="card-link">Card link</a>
          <a href="#" class="card-link">Another link</a>
        </div>
      </div>
    `;
    dispalyId.appendChild(div);
  });
}