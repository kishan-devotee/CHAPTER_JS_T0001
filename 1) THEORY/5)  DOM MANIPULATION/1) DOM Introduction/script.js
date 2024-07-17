
    var intro = document.getElementById('intro');
    var introText = document.getElementById('intro-text');
    var introButton = document.getElementById('intro-button');




    introButton.addEventListener('click', function() {
        intro.classList.add('hide');
        introText.classList.add('hide');
        introButton.classList.add('hide');
    });