let btnChat = document.querySelector('.btn-chat');
let modalWindowChat = document.querySelector('.modal-window');
let btnModalClose =modalWindowChat.querySelector('.modal-close')

btnChat.addEventListener('click', function(e){
    e.preventDefault();
    modalWindowChat.classList.remove('modal-window-active');
    modalWindowChat.offsetWidth = modalWindowChat.offsetWidth;
    modalWindowChat.classList.add('modal-window-active');
});


btnModalClose.addEventListener('click', function(e){
    e.preventDefault();
    modalWindowChat.classList.remove('modal-window-active');
});