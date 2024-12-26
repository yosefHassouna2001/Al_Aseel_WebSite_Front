// const { forEach } = require("lodash");

(function () {
    const navElement = document.querySelector('.navbar .collapse .navbar-nav '); // Replace '.nav-element' with the actual CSS selector for your navigation element

    // navElement.addEventListener('mouseenter', () => {
    //   navElement.classList.add('active');
    // });

    // navElement.addEventListener('mouseleave', () => {
    //   navElement.classList.remove('active');
    // });

    navElement.addEventListener('click', () => {
      navElement.classList.toggle('active');
    });
    //

document.getElementsByClassName

    function startcount(el) {
        let goal = el.dataset.goal;
        let count = setInterval(() => {
            el.textContent++;
            if (el.textContent == goal) {
                clearInterval(count);
            }
        }, 15);

    }
    let section = document.querySelector('.all');
    let purecounter = document.querySelectorAll('.purecounter ');
    let started = true;
    //


    window.onload = function () {
        window.setTimeout(fadeout, 500);
    }
    function fadeout() {
        document.querySelector('.preloader').style.opacity = '0';
        document.querySelector('.preloader').style.display = 'none';
    }
    onscroll = function () {
        var header_navbar = document.querySelector(".navbar-area");
        var sticky = header_navbar.offsetTop;


        if (window.pageYOffset > sticky) {
            header_navbar.classList.add("sticky");

        } else {
            header_navbar.classList.remove("sticky");
        }

        var backToTo = document.querySelector(".back-to-top");
        if (document.body.scrollY > 200 || document.documentElement.scrollTop > 200) {
            backToTo.style.opacity = "1";
            backToTo.style.visibility = "visible";

        } else {
            backToTo.style.opacity = "0";
            backToTo.style.visibility = "hidden";
        }
        const windowWidth = window.innerWidth;

        // إذا كان العرض أقل من 768 بكسل (شاشة صغيرة)
        if (windowWidth < 768) {
            if (document.documentElement.scrollTop > 150 ) {
                if (started) {
                    purecounter.forEach(num => {
                        startcount(num);
                    });
                }
                started = false;
            }
        // إذا كان العرض بين 768 و 1024 بكسل (تابلت)
        } else if (windowWidth >= 768 && windowWidth < 1024) {
            if (document.documentElement.scrollTop > 270 ) {
                if (started) {
                    purecounter.forEach(num => {
                        startcount(num);
                    });
                }
                started = false;
            }
        // إذا كان العرض أكبر من أو يساوي 1024 بكسل (شاشة كبيرة)
        } else {
            if (document.documentElement.scrollTop > 370 ) {
                if (started) {
                    purecounter.forEach(num => {
                        startcount(num);
                    });

                }
                started = false;
            }
        }

    };

    let navbarToggler = document.querySelector(".mobile-menu-btn");
    navbarToggler.addEventListener('click', function () {
        navbarToggler.classList.toggle("active");
    });

    new WOW().init();

})();


$(document).ready(function() {
    $('#datePicker')
        .datepicker({
            format: 'mm/dd/yyyy'
        })
        .on('changeDate', function(e) {
            // Revalidate the date field
            $('#eventForm').formValidation('revalidateField', 'date');
        });

    $('#eventForm').formValidation({
        framework: 'bootstrap',
        icon: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            name: {
                validators: {
                    notEmpty: {
                        message: 'The name is required'
                    }
                }
            },
            date: {
                validators: {
                    notEmpty: {
                        message: 'The date is required'
                    },
                    date: {
                        format: 'MM/DD/YYYY',
                        message: 'The date is not a valid'
                    }
                }
            }
        }
    });
})();

