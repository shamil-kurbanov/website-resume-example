document.addEventListener("DOMContentLoaded", function () {
    var container = document.querySelector('.popup-container');
    var popupButtons = document.querySelectorAll('.open-popup');
    var submitButton = document.querySelector('.submit-button');
    var closeButton = document.querySelector('.close-button');

    for (let i = 0; i < popupButtons.length; i++){
        popupButtons[i].addEventListener('click', function () {
            container.style.display = 'flex';
        });
    }
    container.addEventListener('click', function (event) {
        if (event.target == container || event.target == submitButton || event.target == closeButton) {
            container.style.display = 'none';
        }
    });

});