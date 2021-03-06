const username = document.getElementById('username'),
    greeting = document.getElementById('greeting');

function loadName() {
    const currentUser = localStorage.getItem('username');
    if (currentUser !== null) {
        greeting.innerText = `Hello! ${currentUser}!`;
        username.style.display = 'none';
        greeting.style.display = 'block';
    }
}

username.addEventListener('keyup', function (event) {
    if (event.keyCode === 13) {
        localStorage.setItem('username', this.value);
        loadName();
    }
})

function init() {
    loadName();
}

init();