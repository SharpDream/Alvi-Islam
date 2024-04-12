document.getElementById('menu-button').addEventListener('click', function() {
    var menu = document.getElementById('menu');
    menu.classList.toggle('active');
});

// Add event listener to the back button to close the menu
document.getElementById('back-button').addEventListener('click', function() {
    var menu = document.getElementById('menu');
    menu.classList.remove('active');
});