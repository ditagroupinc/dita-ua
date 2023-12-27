document.addEventListener('DOMContentLoaded', function () {
    let header = document.getElementById('header');
    let headerHeight = header.offsetHeight;
    let lastScrollTop = 0;

    window.addEventListener('scroll' , function () {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > headerHeight) {
            header.classList.add('scroll-header');
        } else if  (scrollTop < headerHeight) {
            header.classList.remove('scroll-header');
        }

        lastScrollTop = scrollTop;
    });
});
$( document ).ready(function() {
    if ($(window).width() <= 768) {
        $('a[href^="#"].menu-hide-link').on('click', function (e) {
            let link = $(this).attr('href'),
                el = $(document).find(link);
            if (el.length > 0) {
                el = el.eq(0).offset().top;
                $('html, body').animate({
                    scrollTop: el - 100 + 'px'
                }, 300, 'linear');
            }
            return false;
        });
        $('a[href^="#"].b-nav-tab').on('click', function (e) {
            let link = $(this).attr('href'),
                el = $(document).find(link);
            if (el.length > 0) {
                el = el.eq(0).offset().top;
                $('html, body').animate({
                    scrollTop: el - 100 + 'px'
                }, 300, 'linear');
            }
            return false;
        });
        $('a[href^="#"].links-item').on('click', function (e) {
            let link = $(this).attr('href'),
                el = $(document).find(link);
            if (el.length > 0) {
                el = el.eq(0).offset().top;
                $('html, body').animate({
                    scrollTop: el - 100 + 'px'
                }, 300, 'linear');
            }
            return false;
        });
    }else {
        $('a[href^="#"].menu-hide-link').on('click', function (e) {
            let link = $(this).attr('href'),
                el = $(document).find(link);
            if (el.length > 0) {
                el = el.eq(0).offset().top;
                $('html, body').animate({
                    scrollTop: el - 30 + 'px'
                }, 300, 'linear');
            }
            return false;
        });
        $('a[href^="#"].b-nav-tab').on('click', function (e) {
            let link = $(this).attr('href'),
                el = $(document).find(link);
            if (el.length > 0) {
                el = el.eq(0).offset().top;
                $('html, body').animate({
                    scrollTop: el - 110 + 'px'
                }, 300, 'linear');
            }
            return false;
        });
        $('a[href^="#"].links-item').on('click', function (e) {
            let link = $(this).attr('href'),
                el = $(document).find(link);
            if (el.length > 0) {
                el = el.eq(0).offset().top;
                $('html, body').animate({
                    scrollTop: el - 110 + 'px'
                }, 300, 'linear');
            }
            return false;
        });
    }
});
// scroll to top
$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 400) {
            $('#topcontrol').addClass('active');
        } else {
            $('#topcontrol').removeClass('active');
        }
    });
    $('#topcontrol').click(function () {
        $('html, body').animate({scrollTop: 0}, 400);
        return false;
    });
});

$( document ).ready(function() {
    $('.tab-section').each(function() {
        let ths = $(this);
        ths.find('.b-tab').not(':first').addClass('hidden');
        ths.find('.b-nav-tab').click(function() {
            ths.find('.b-nav-tab').removeClass('active').eq($(this).index()).addClass('active');
            ths.find('.b-tab').addClass('hidden').eq($(this).index()).removeClass('hidden')
        }).eq(0).addClass('active');
    });
});

// PopUp callback
$(document).ready(function() {
    if ($('.callback-swipe__wrap').length > 0) {
        setTimeout(function () {
            $('.callback-swipe__wrap').addClass('active');
        }, 5000);
        $('.hide-swipe__wrap').on('click', function () {
            setTimeout(function () {
                $('.callback-swipe__wrap').removeClass('active');
            }, 300);
        });
    }
});

$(document).ready(function() {
    if ($('.modal-callback').length > 0) {
        $('.gradient-btn').on('click', function () {
            $('.modal-callback').show();
        });
        $('.modal-callback__close').on('click', function () {
            $('.modal-callback').hide();
        });
        $(document).mouseup(function (e) {
            let modalBlockAll = $(".modal-callback__wrapper");
            let modalBlock = $(".modal-callback");
            if (modalBlockAll.has(e.target).length === 0){
                modalBlock.hide();
            }
        });
    }
});

$(document).ready(function() {
    if ($('.advantages').length > 0) {
        function toggleClassOnScroll() {
            let scrollPosition = $(document).scrollTop();
            let advantagesPosition = $('.advantages').offset().top - 200

            if (scrollPosition >= advantagesPosition && !$('.advantages').hasClass('visible')) {
                $('.advantages').addClass('visible');
            }
            // else if (scrollPosition < advantagesPosition && $('.advantages').hasClass('visible')) {
            //     $('.advantages').removeClass('visible');
            // }
        }

        $(document).scroll(function () {
            toggleClassOnScroll();
        });

        toggleClassOnScroll();
    }
});
$(document).ready(function() {
    if ($('.social-list').length > 0) {
        function shareOnInsta() {
            var articleUrl = encodeURIComponent(window.location.href);
            var shareUrl = `https://twitter.com/intent/tweet?url=${articleUrl}&text=Заголовок статьи`;
            window.open(shareUrl, '_blank');
        }
        function shareOnFacebook() {
            var articleUrl = encodeURIComponent(window.location.href);
            var shareUrl = `https://twitter.com/intent/tweet?url=${articleUrl}&text=Заголовок статьи`;
            window.open(shareUrl, '_blank');
        }
        function shareOnTwitter() {
            var articleUrl = encodeURIComponent(window.location.href);
            var shareUrl = `https://twitter.com/intent/tweet?url=${articleUrl}&text=Заголовок статьи`;
            window.open(shareUrl, '_blank');
        }

    }
});


$('.mob-menu-btn').on('click', function () {
    $(this).toggleClass('active');
    $('header').toggleClass('active');
    $('body').toggleClass('hidden');
    $('.navbar').slideToggle(100);
})

$( document ).ready(function() {
    if ($(window).width() <= 991) {
        $('.menu-hide-link').on('click', function () {
            $('.mob-menu-btn').removeClass('active');
            $('header').removeClass('active');
            $('body').removeClass('hidden');
            $('.navbar').slideUp(100);
        })
    }
});


$('.mob-show-text').on('click', function () {
    $(this).parent('div.speakers-card-cont').toggleClass('active');
    var show = $(this).data("first");
    var hide = $(this).data("second");
    if ($(".speakers-card-cont").hasClass("active")) {
        $(this).children(".mob-show-text span").html(hide);
    } else {
        $(this).children(".mob-show-text span").html(show);
    }
});

$(document).ready(function () {
    if ($(window).width() <= 768) {
        $('.table-row-item').each(function () {
            if ($(this).text().trim() === '') {
                $(this).remove();
            }
        });
    }
});


jQuery(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 1000) {
            $('#scroll-to-top').fadeIn();
        } else {
            $('#scroll-to-top').fadeOut();
        }
    });
    $('#scroll-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 800);
        return false;
    });
});

$(document).ready(function() {
    if ($(window).width() > 480) {
        var imgContainer = $('.img-container');

        $(window).scroll(function() {
            var scrollHeight = 600;

            if ($(this).scrollTop() > scrollHeight) {
                imgContainer.removeClass('hidden-img');
                imgContainer.animate({
                    left: '80px'
                }, 900);
            }
        });
    }
});


//TAB FOR SLIDER BLOCK
$('.tab-section').each(function() {
    let ths = $(this);
    ths.find('.b-tab').not(':first').addClass('hidden');
    ths.find('.b-nav-tab').click(function() {
        ths.find('.b-nav-tab').removeClass('active').eq($(this).index()).addClass('active');
        ths.find('.b-tab').addClass('hidden').eq($(this).index()).removeClass('hidden')
    }).eq(0).addClass('active');
});

//LABEL FOR INPUT

$('.form-js-label').find('input').on('input', function (e) {
    $(e.currentTarget).attr('data-empty', !e.currentTarget.value);
});

//FORM VALIDATION
function validateForm() {
    let nameInput = document.getElementById('firstName');
    let emailInput = document.getElementById('email');
    let messageInput = document.getElementById('nameCompany');
    let otherTextInput = document.getElementById('textRow');

    let nameError = document.getElementById('nameError');
    let emailError = document.getElementById('emailError');
    let messageError = document.getElementById('nameCompanyError');
    let otherTextError = document.getElementById('textRowError');

    if (!isValidName(nameInput.value)) {
        nameError.classList.add('error');
    } else {
        nameError.classList.remove('error');
    }

    if (!isValidEmail(emailInput.value)) {
        emailError.classList.add('error');
    } else {
        emailError.classList.remove('error');
    }

    if (!isValidText(messageInput.value)) {
        messageError.classList.add('error');
    } else {
        messageError.classList.remove('error');
    }

    if (!isValidText(otherTextInput.value)) {
        otherTextError.classList.add('error');
    } else {
        otherTextError.classList.remove('error');
    }
}
function validateForm() {
    let nameInput = document.getElementById('firstName2');
    let emailInput = document.getElementById('email2');
    let messageInput = document.getElementById('nameCompany2');
    let otherTextInput = document.getElementById('textRow2');

    let nameError2 = document.getElementById('nameError2');
    let emailError2 = document.getElementById('emailError2');
    let messageError2 = document.getElementById('nameCompanyError2');
    let otherTextError2 = document.getElementById('textRowError2');

    if (!isValidName(nameInput.value)) {
        nameError2.classList.add('error');
    } else {
        nameError2.classList.remove('error');
    }

    if (!isValidEmail(emailInput.value)) {
        emailError2.classList.add('error');
    } else {
        emailError2.classList.remove('error');
    }

    if (!isValidText(messageInput.value)) {
        messageError2.classList.add('error');
    } else {
        messageError2.classList.remove('error');
    }

    if (!isValidText(otherTextInput.value)) {
        otherTextError2.classList.add('error');
    } else {
        otherTextError2.classList.remove('error');
    }
}

function isValidName(name) {
    var nameRegex = /^[a-zA-Z\s]+$/;
    return nameRegex.test(name);
}

function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidText(text) {
    return text.trim() !== '';
}

$(document).ready(function()
    {if ($('.blog-list_img').length > 0) {
        var blockHeight = $('.blog-list_img').height();
        $('.blog-list_img').height(blockHeight);
    }
});

$(document).ready(function() {
    if ($('#partner-slider').length > 0) {
        new Splide('#partner-slider', {
            perPage: 3,
            type: 'loop',
            perMove: 1,
            pagination: false,
            gap: 20,
            classes: {
                prev: 'splide__arrow--prev new-class-prev',
                next: 'splide__arrow--next new-class-next',
            },
            breakpoints: {
                991: {
                    perPage: 2,
                },
                680: {
                    perPage: 1,
                    pagination: true,
                },
            },
        }).mount();
    }
});
$(document).ready(function() {
    if ($('.advantages-slider').length > 0) {
        new Splide('.advantages-slider', {
            perPage: 2,
            type: 'loop',
            perMove: 1,
            gap: 20,
            arrows: false,
            pagination: true,
            breakpoints: {
                768: {
                    perPage: 2,
                    perMove: 1,
                },
                480: {
                    perPage: 1,
                    perMove: 1,
                },
            },
        }).mount();
        $(document).ready(function () {
            if ($(window).width() <= 991) {
                new Splide('.clients-slider', {
                    perPage: 1,
                    perMove: 1,
                    arrows: false,
                    gap: 20,
                    pagination: true,
                    breakpoints: {},
                }).mount();
            }
        });
    }
});
$(document).ready(function() {
    if ($('.slider-logo').length > 0) {
        const splide = new Splide('.slider-logo', {
            type: 'loop',
            drag: 'free',
            focus: 'center',
            perPage: 8,
            pagination: false,
            autoScroll: {
                speed: 0.3,
            },
            breakpoints: {
                1199: {
                    perPage: 5,
                },
                768: {
                    perPage: 3,
                },
                480: {
                    perPage: 2,
                },
            },
        });

        splide.mount(window.splide.Extensions);
    }
});

$(document).ready(function() {
    if ($('.portfolio-wrap__content').length > 0) {
        $(document).ready(function () {
                let splide = new Splide('.portfolio-wrap__content', {
                    perPage: 1,
                    perMove: 1,
                    arrows: false,
                    gap: 20,
                    pagination: false,
                    breakpoints: {
                        991: {
                            perPage: 1,
                            pagination: true,
                        },
                    },
                }).mount();
                splide.on('moved', function(e) {
                    let index = splide.index;
                    $('.b-nav-tab').removeClass('active');
                    $('.b-nav-tab').eq(index).addClass('active');
                });
                $('.b-nav-tab').on('click', function() {
                    var index = $(this).index();
                    splide.go(index);
                });

        });

    }
});


