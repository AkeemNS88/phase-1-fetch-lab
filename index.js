function fetchBooks() { 
// returns fetch to give test access
return fetch('https://anapioficeandfire.com/api/books')
// converts fetch to json for object readability
.then(response => response.json())
// invokes renderBooks function passing it as a JSON object
.then(books => renderBooks(books))
}

//arrow function way of writing fetch function
// let fetchBooks = () = fetch('https://anapioficeandfire.com/api/books')
//.then(response => response.json())
//.then(books => renderBooks(books))


function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
