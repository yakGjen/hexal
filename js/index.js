(function () {
  
  const contacts = document.querySelector('.get-contacts');
  const modal = document.querySelector('.modal');
  
  let showModal = false;
  
  contacts.addEventListener('click', event => {
    
    showModal === false ? openModal() : closeModal();
    
  });
  
  function openModal() {
    modal.textContent = event.target.textContent.trim();
    modal.classList.toggle('modal-show');
    showModal = true;
  }
  function closeModal() {
    modal.classList.toggle('modal-show');
    showModal = false;
  }
  
})();