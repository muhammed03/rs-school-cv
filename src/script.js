function scrollTo(element) {
    window.scroll({
        behavior: 'smooth',
        left: 0,
        top: element.offsetTop
    });
    }
    
    document.getElementById("main-link").addEventListener('click', () => {
    scrollTo(document.getElementById("main"));
    });
    

    document.getElementById("projects-link").addEventListener('click', () => {
        scrollTo(document.getElementById("projects"));
        });

        document.getElementById("code-link").addEventListener('click', () => {
            scrollTo(document.getElementById("codes"));
            });

        document.getElementById("footer-link").addEventListener('click', () => {
            scrollTo(document.getElementById("footer"));
            });
        