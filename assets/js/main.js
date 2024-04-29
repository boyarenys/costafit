$(function () {
    const select = (el, all = false) => {
        el = el.trim();
        return all ? [...document.querySelectorAll(el)] : document.querySelector(el);
    };

    const on = (type, el, listener, all = false) => {
        let selectEl = select(el, all);
        if (selectEl) {
            if (all) {
                selectEl.forEach(e => e.addEventListener(type, listener));
            } else {
                selectEl.addEventListener(type, listener);
            }
        }
    };

    const scrollto = el => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    on('click', '.mobile-nav-toggle', function () {
        select('#navbar').classList.toggle('navbar-mobile');
        this.classList.toggle('bi-list bi-x');
    });

    on('click', '#navbar .nav-link', function (e) {
        let section = select(this.hash);
        if (section) {
            e.preventDefault();
            let navbar = select('#navbar');
            let header = select('#header');
            let sections = select('section', true);
            let navlinks = select('#navbar .nav-link', true);
            navlinks.forEach(item => item.classList.remove('active'));
            this.classList.add('active');
            if (navbar.classList.contains('navbar-mobile')) {
                navbar.classList.remove('navbar-mobile');
                let navbarToggle = select('.mobile-nav-toggle');
                navbarToggle.classList.toggle('bi-list bi-x');
            }
            if (this.hash == '#header') {
                header.classList.remove('header-top');
                sections.forEach(item => item.classList.remove('section-show'));
                return;
            }
            if (!header.classList.contains('header-top')) {
                header.classList.add('header-top');
                setTimeout(() => {
                    sections.forEach(item => item.classList.remove('section-show'));
                    section.classList.add('section-show');
                }, 350);
            } else {
                sections.forEach(item => item.classList.remove('section-show'));
                section.classList.add('section-show');
            }
            scrollto(this.hash);
        }
    }, true);

    let skilsContent = select('.skills-content');
    if (skilsContent) {
        new Waypoint({
            element: skilsContent,
            offset: '80%',
            handler: direction => {
                let progress = select('.progress .progress-bar', true);
                progress.forEach(el => el.style.width = el.getAttribute('aria-valuenow') + '%');
            }
        });
    }

    let $videoSrc;
    $('.video-btn').click(function () {
        $videoSrc = $(this).data("src");
    });

    $('#myModal').on('shown.bs.modal', function () {
        $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
    });

    $('#myModal').on('hide.bs.modal', function () {
        $("#video").attr('src', $videoSrc);
    });
});
