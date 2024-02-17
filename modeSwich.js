document.addEventListener('DOMContentLoaded', function () {
    var changeColorsCheck = document.getElementById("modeSwichCheck");

    changeColorsCheck.addEventListener('change', function () {

        if (changeColorsCheck.checked) {
            changeColors();
        } else {
            changeColorsBack();
        }
    });

    function changeColorsBack() {
        document.documentElement.style.setProperty('--color-bg-default', '#2E2E2E');
        document.documentElement.style.setProperty('--color-text-default', '#FFFFFF');
        document.documentElement.style.setProperty('--color-header-default', '#1C1C1C');
        document.documentElement.style.setProperty('--color-btn-default', 'cornflowerblue');
        

    }

    function changeColors() {
        document.documentElement.style.setProperty('--color-bg-default', 'white');
        document.documentElement.style.setProperty('--color-text-default', '#000000');
        document.documentElement.style.setProperty('--color-header-default', 'rgb(0, 0, 139)');
        document.documentElement.style.setProperty('--color-btn-default', 'darkblue');
    }
});