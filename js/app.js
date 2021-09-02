const button = () =>{
  const searchResult = document.getElementById('searchResult');
  const inputId = document.getElementById('inputId');
  const inputValue = inputId.value;
  inputId.value = '';
  if(inputValue === ''){
    // Error message
    const error = document.getElementById('error');
    const div = document.createElement('div');
    div.innerHTML=`<p>No Results Found</p>`;
    error.append(div);
  }
  else{
    const url =` https://openlibrary.org/search.json?q=${inputValue}`;
    fetch(url)
    .then(res => res.json())
    .then(data => display(data.docs));
  }
}
const display = (books) =>{
  // Search Result length
  searchResult.innerHTML =`<h2>search Result ${books.length}</h2>`;
  books.forEach(book => {
    console.log(book);
    const dispalyId = document.getElementById('dispalyId');
    // Create Element
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML =`
    <div class="card">
        <img src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top">
        <div class="card-body">
          <h5 class="card-title">${book.title}</h5>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Author Name : ${book.author_name}</li>
          <li class="list-group-item">First Publish Year : ${book.first_publish_year}</li>
          <li class="list-group-item">publisher : ${book.publisher}</li>
        </ul>
      </div>
    `;
    // Append Child
    dispalyId.appendChild(div);
  });
}