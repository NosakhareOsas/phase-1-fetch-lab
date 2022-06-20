function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  return fetch('https://anapioficeandfire.com/api/books')
  .then(response => response.json())
  .then(GOTData => renderBooks(GOTData))
  
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    const div = document.createElement('div');
    const p = document.createElement('p');

    h2.innerHTML = book.name;
    div.innerHTML = `<p>Number of pages: ${book.numberOfPages}</p>`
    p.innerHTML = `You can get this book at: <a href="${book.url}">Read now</a>`
    main.appendChild(h2);
    main.appendChild(div);
    div.appendChild(p)
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
