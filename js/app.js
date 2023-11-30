function alzShowConteudo() {
    const overview = document.getElementById('alz-show-conteudo');
    overview.remove();
}

function submitForm() {
    showPopup();
}

function showPopup() {
    const popup = document.getElementById('popup');
    const popup_msg = document.getElementById('popup-msg');
    const email = document.getElementById('email');

    popup.style.display = 'block';

    if(email.value === '') {
        popup_msg.innerHTML = 'Preencha o e-mail por gentileza 😮';
    } else {
        popup_msg.innerHTML = 'E-mail cadastrado com sucesso! 😊';

        clearInput();
    }

    setTimeout(() => hiddenPopup(), 3000);
}

function hiddenPopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none';
}

function clearInput() {
    const email = document.getElementById('email');
    email.value = '';
}