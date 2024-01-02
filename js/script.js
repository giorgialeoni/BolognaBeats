document.addEventListener('DOMContentLoaded', function() {
    var tornaSuButton = document.querySelector('.backtotop');
    tornaSuButton.style.display = 'none';

    window.addEventListener('scroll', function() {
        var aboutSection = document.getElementById('aboutme');
        
        if (aboutSection) {
            var aboutSectionTop = aboutSection.offsetTop;
            var aboutSectionBottom = aboutSectionTop + aboutSection.offsetHeight;

            if (window.pageYOffset >= aboutSectionTop && window.pageYOffset <= aboutSectionBottom) {
                tornaSuButton.style.display = 'block';
            } else {
                tornaSuButton.style.display = 'none';
            }
        } else {
            tornaSuButton.style.display = 'none';
        }

        var windowHeight = window.innerHeight;
        var documentHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
        var scrollPosition = window.scrollY || window.pageYOffset || document.body.scrollTop + (document.documentElement && document.documentElement.scrollTop || 0);

        if (documentHeight - scrollPosition <= windowHeight) {
            tornaSuButton.style.display = 'block';
        }
    });

    tornaSuButton.addEventListener('click', function() {
        document.querySelector('#inizio-pagina').scrollIntoView({ behavior: 'smooth' });
    });
});
