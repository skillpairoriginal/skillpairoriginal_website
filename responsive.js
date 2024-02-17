
function checkScreenWidth() {
    // Holen Sie die aktuelle Bildschirmbreite
    var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    // Setzen Sie den Grenzwert für die Bildschirmbreite (z.B. 768 Pixel)
    var breakpoint = 768;

    // Überprüfen, ob die Bildschirmbreite unter dem Grenzwert liegt
    if (screenWidth > breakpoint) {
        // Ändern Sie das HTML-Dokument oder führen Sie andere Aktionen durch
        document.location.href = 'desktop-index.html'; // Hier mobile.html durch den gewünschten Dateinamen ersetzen
    }

    // Sie können hier Ihre eigenen Regeln für die Schriftgrößenanpassung definieren
    var fontSizeTitle = (50 * screenWidth / 768) * 1.4
    var ImageSizeLogo = (75 * screenWidth / 768) * 1.4
    var margin20px = (20 * screenWidth / 768)

    var targetElementLogo = document.getElementById('logoSkillPair')
    var targetElement = document.getElementById('headline');
    var marginHeader = document.getElementById('header')

    // Speichern des Werts in der CSS-Klasse
    targetElement.style.setProperty('--text-logo-size', fontSizeTitle + 'px')
    targetElementLogo.style.setProperty('--image-logo-size', ImageSizeLogo + 'px')
    marginHeader.style.setProperty('--margin-header', margin20px + 'px')
}

// Überprüfen Sie die Bildschirmbreite beim Laden der Seite und bei Änderungen
window.onload = checkScreenWidth;
window.onresize = checkScreenWidth;

document.addEventListener("DOMContentLoaded", function () {
    var navButtonMobile = document.getElementById("navButtonMobile");
    navButtonMobile.addEventListener('click', function () {
        navigateToPage();
    });

    var check = document.getElementById("modeSwichCheck")
    check.addEventListener('change', function(){
        console.log("checked")
    })

});

function navigateToPage() {
    document.location.href = 'signIn.html';
}
