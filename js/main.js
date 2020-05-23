$(document).ready(function() {
    $('.header-nav__link').on('mouseenter', function() {
        $(this).removeClass('stylesOfOut').addClass('styles');
    })
    $('.header-nav__link').on('mouseleave', function() {
        $(this).removeClass('styles').addClass('stylesOfOut');
    })
    $('.hamburger').on('click', function() {
        $('.header-nav__info').addClass('styleOfNavbar').slideToggle();
    })
    window.addEventListener('resize', function() {
        if(window.innerWidth > 720){
            $('.header-nav__info').addClass('stylesOfOutNavbar');
        }
        else if(window.innerWidth < 720){
            $('.header-nav__info').removeClass('stylesOfOutNavbar');
        }
    })
    $(function () {
        $(window).scroll(function() {
            $('.help-block').each(function(){
                var imagePos = $(this).offset().top;
                var topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow+650) {
                    $(this).addClass("animate__fadeInUp");
                }
            });
        });
        $(window).scroll(function() {
            $('.help__title').each(function(){
                var imagePos = $(this).offset().top;
                var topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow+650) {
                    $(this).addClass("animate__fadeInDown");
                }
            });
        });
        $(window).scroll(function() {
            $('.use-info').each(function(){
                var imagePos = $(this).offset().top;
                var topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow+650) {
                    $(this).addClass("animate__fadeInLeft");
                }
            });
        });
        $(window).scroll(function() {
            $('.use-api').each(function(){
                var imagePos = $(this).offset().top;
                var topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow+650) {
                    $(this).addClass("animate__fadeInRight");
                }
            });
        });
        $(window).scroll(function() {
            $('.use__title').each(function(){
                var imagePos = $(this).offset().top;
                var topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow+650) {
                    $(this).addClass("animate__fadeInDown");
                }
            });
        });
        $(window).scroll(function() {
            $('.use__text').each(function(){
                var imagePos = $(this).offset().top;
                var topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow+650) {
                    $(this).addClass("animate__fadeInDown");
                }
            });
        });
        $(window).scroll(function() {
            $('.try__title').each(function(){
                var imagePos = $(this).offset().top;
                var topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow+650) {
                    $(this).addClass("animate__fadeInLeft");
                }
            });
        });
        $(window).scroll(function() {
            $('.try-block__info').each(function(){
                var imagePos = $(this).offset().top;
                var topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow+650) {
                    $(this).addClass("animate__fadeInLeft");
                }
            });
        });
        $(window).scroll(function() {
            $('.try-block__photo').each(function(){
                var imagePos = $(this).offset().top;
                var topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow+650) {
                    $(this).addClass("animate__fadeInRight");
                }
            });
        });
        $(window).scroll(function() {
            $('.companies__title').each(function(){
                var imagePos = $(this).offset().top;
                var topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow+650) {
                    $(this).addClass("animate__fadeInDown");
                }
            });
        });
        $(window).scroll(function() {
            $('.companies-based').each(function(){
                var imagePos = $(this).offset().top;
                var topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow+650) {
                    $(this).addClass("animate__fadeInLeft");
                }
            });
        });
        $(window).scroll(function() {
            $('.companies-verified').each(function(){
                var imagePos = $(this).offset().top;
                var topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow+650) {
                    $(this).addClass("animate__fadeInRight");
                }
            });
        });
        $(window).scroll(function() {
            $('.companies-list__title').each(function(){
                var imagePos = $(this).offset().top;
                var topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow+650) {
                    $(this).addClass("animate__fadeInDownBig");
                }
            });
        });
        $(window).scroll(function() {
            $('.companies-list__first').each(function(){
                var imagePos = $(this).offset().top;
                var topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow+650) {
                    $(this).addClass("animate__fadeInRight");
                }
            });
        });
        $(window).scroll(function() {
            $('.companies-list__second').each(function(){
                var imagePos = $(this).offset().top;
                var topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow+650) {
                    $(this).addClass("animate__fadeInLeft");
                }
            });
        });
        $(window).scroll(function() {
            $('.languages__title').each(function(){
                var imagePos = $(this).offset().top;
                var topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow+650) {
                    $(this).addClass("animate__fadeInDown");
                }
            });
        });
        $(window).scroll(function() {
            $('.languages__text').each(function(){
                var imagePos = $(this).offset().top;
                var topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow+650) {
                    $(this).addClass("animate__fadeInDown");
                }
            });
        });
        $(window).scroll(function() {
            $('.languages-block__first').each(function(){
                var imagePos = $(this).offset().top;
                var topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow+650) {
                    $(this).addClass("animate__fadeInLeft");
                }
            });
        });
        $(window).scroll(function() {
            $('.languages-block__second').each(function(){
                var imagePos = $(this).offset().top;
                var topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow+650) {
                    $(this).addClass("animate__fadeInRight");
                }
            });
        });
        $(window).scroll(function() {
            $('.languages-footer').each(function(){
                var imagePos = $(this).offset().top;
                var topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow+650) {
                    $(this).addClass("animate__fadeInUp");
                }
            });
        });
        $(window).scroll(function() {
            $('.share__body').each(function(){
                var imagePos = $(this).offset().top;
                var topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow+650) {
                    $(this).addClass("animate__fadeInUp");
                }
            });
        });
        $(window).scroll(function() {
            $('.footer-block').each(function(){
                var imagePos = $(this).offset().top;
                var topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow+650) {
                    $(this).addClass("animate__fadeInUp");
                }
            });
        });
        $(window).scroll(function() {
            $('.footer-last').each(function(){
                var imagePos = $(this).offset().top;
                var topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow+850) {
                    $(this).addClass("animate__fadeInUp");
                }
            });
        });
    })
});