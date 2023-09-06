
// const modal = document.querySelector('.container-info-book');
// const popupBackdrop = document.querySelector('.popup-backdrop');
// const modalContent = document.querySelector('.content');
// const addToShoppingListButton = modal.querySelector('.add-btn');
// const closeButton = document.querySelector('.js-modal-close');
// const shoppingListMessage = modal.querySelector('#shoppingListMessage');
//  modal.classList.add('active');
//  document.body.classList.add('.scroll-lock');
// ==============================================================================================


document.addEventListener('DOMContentLoaded', function () {

  const addToShoppingListButton = modal.querySelector('.add-btn');
  const shoppingListMessage = modal.querySelector('#shoppingListMessage');
  let isBookInShoppingList = false;

  const shoppingList = JSON.parse(localStorage.getItem('shoppingList')) || [];

  function showBookDetails(book) {
    const bookImage = modal.querySelector('.bookim');
    const bookTitle = modal.querySelector('.book-title');
    const bookAuthor = modal.querySelector('.book-author');
    const bookDescription = modal.querySelector('.book-description');

    bookImage.src = book.image;
    bookTitle.textContent = book.title;
    bookAuthor.textContent = book.author;
    bookDescription.textContent = book.description;

    isBookInShoppingList = shoppingList.some(item => item.id === book.id);

    updateShoppingListButton();
  }

  function updateShoppingListButton() {
    if (isBookInShoppingList) {
      addToShoppingListButton.textContent = 'Remove from the shopping list';
      shoppingListMessage.textContent =
        "Congratulations! You have added the book to the shopping list. To delete, press the button 'Remove from the shopping list'.";
    } else {
      addToShoppingListButton.textContent = 'Add to shopping list';
      shoppingListMessage.textContent = '';
    }
  }

  addToShoppingListButton.addEventListener('click', function () {
    if (isBookInShoppingList) {

      shoppingList.splice(
        shoppingList.findIndex(item => item.id === currentBook.id),
        1
      );
      isBookInShoppingList = false;
    } else {

      shoppingList.push(currentBook);
      isBookInShoppingList = true;
      }

      localStorage.setItem('shoppingList', JSON.stringify(shoppingList));

      addToShoppingListButton.blur();

      updateShoppingListButton();
  });

//   =========================================================================================
  function closeModal() {
    // modal.style.display = 'none';
    document.body.style.overflow = 'auto';
  }
  modal.addEventListener('click', e => {
    if (e.target === modal) {
      closeModal();
    }
  });
  modal.querySelector('.close-btn').addEventListener('click', closeModal);
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && modal.style.display === 'block') {
      closeModal();
    }
  });
// ======================================================================================
//
  const currentBook = {
    id: '643282b1e85766588626a089',
    image:
      'https://storage.googleapis.com/du-prd/books/images/9781538753095.jpg',
    title: 'DEATH OF THE BLACK',
    author: 'James Patterson and J.D. Barker',
    description: 'Book description goes here...',
  };

  showBookDetails(currentBook);

  const openModalButtons = document.querySelectorAll('.link');
  openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
      // modal.style.display = 'block';
      document.body.style.overflow = 'hidden';
    });
  });
});


