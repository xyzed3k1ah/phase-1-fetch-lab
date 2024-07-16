function fetchBooks() {
  // Replace 'https://example.com/api/books' with the actual API url
  const url = "https://anapioficeandfire.com/api/books";

  return fetch(url)
    .then(response => response.json()) // Parse the response as JSON
    .then(books => {
      renderBooks(books); // Call the renderBooks function with fetched books
    })
    .catch(error => console.error(error)); // Handle any errors during fetching
}

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
