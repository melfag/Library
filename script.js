let countBooks = 0;

const formSection = document.querySelector('.add-new-book');

const addBookButton = document.querySelector('[data-add-book]');
addBookButton.addEventListener('click', () => {
	document.querySelector('.add-new-book').classList.remove('toggle-form-section');
	addBookButton.classList.add('remove-first-button');
});

let myLibrary = [];

const addBook = (e) => {
	let book = {
		title: document.querySelector('.add-title').value,
		author: document.querySelector('.add-author').value,
		pages: document.querySelector('.add-page').value,
		ifRead: document.getElementById('read').value
	};
	myLibrary.push(book);
	document.forms[0].reset(); // to clear the form for the next entries

	//for display purposes only
	console.warn('added', { myLibrary });

	let bookShowcase = document.querySelector('.book-showcase');

	let newDiv = document.createElement('div');
	newDiv.classList.add('book-display');
	newDiv.classList.add('edit-delete-display');
	newDiv.classList.add('delete-book-btn');
	bookShowcase.appendChild(newDiv);

	let bookTitle = document.createElement('p');
	bookTitle.textContent = 'Title: ' + book.title;
	newDiv.appendChild(bookTitle);

	let bookAuthor = document.createElement('p');
	bookAuthor.textContent = 'Author: ' + book.author;
	newDiv.appendChild(bookAuthor);

	let bookPages = document.createElement('p');
	bookPages.textContent = 'Pages: ' + book.pages;
	newDiv.appendChild(bookPages);

	let ifRead = document.createElement('p');
	ifRead.textContent = 'if Read?: ' + book.ifRead;
	newDiv.appendChild(ifRead);

	countBooks = 0;
	for (let i = 0; i < myLibrary.length; i++) {
		countBooks++;
	}
	let spanParagraph = document.querySelector('.span');
	if (countBooks == 1)
		spanParagraph.textContent = 'You have ' + countBooks + ' book in your Library, click below to add more';
	else if (countBooks > 1)
		spanParagraph.textContent = 'You have ' + countBooks + ' books in your Library, click below to add more';
	console.log('number of books in the library: ' + countBooks);
};

const add_item = document.querySelector('.btn-add');
add_item.addEventListener('click', addBook);

add_item.addEventListener('click', () => {
	addBookButton.classList.remove('remove-first-button');
	formSection.classList.add('toggle-form-section');
});
