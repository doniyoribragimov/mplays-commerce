$(function(){
    $('.feedback__slider').slick({
        slidesToShow: 5, 
        slidesToScroll: 1,
        autoplay: true,
        speed: 1500,
        autoplaySpeed: 3000,
        arrows: true,
        prevArrow: `<img class="feedback__arrow" src="images/arrow-left.svg" alt="arrow left">`,
        nextArrow: `<img class="feedback__arrow" src="images/arrow-right.svg" alt="arrow right">`,
        responsive: [
            {
              breakpoint: 1001,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
              }
            },
            {
            breakpoint: 769,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
            },
            {
            breakpoint: 481,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false
            }
            },
        ]
    })

    $('.header__profile').on('click', function(){
        $('.header__dropdown').toggleClass('active')
        $('.header__profile').toggleClass('active')
    })

    $('.header__btn').on('click', function(){
        $('.sidebar').addClass('active')
    })

    $('.sidebar__close').on('click', function(){
        $('.sidebar').removeClass('active')
    })
    let isSelected = false;

    $('.tariff__btn .tariff__pick').on('click', function(){
        isSelected = !isSelected;

        if(isSelected){
            $(this).text('Подтвердить выбор')
        } else{
            $(this).text('Выбрать период')
        }
        $(this).toggleClass('active')
        $(this).next('.tariff__amount').find('.tariff__date input').toggleClass('active')
    })


     $('.more').on('click', function(){
        $('.table__dropdown').removeClass('active')
        $(this).next('.table__dropdown').toggleClass('active')
    })  

    // TABS 

    $('#powerUpBtn').on('click', function(){
        $('#tablePowerUp').css('display', 'grid')
        $('#tableMain').css('display', 'none')
        $(this).removeClass('button_outline')
        $(this).addClass('button_violet')
        $('#converseBtn').addClass('button_outline')
        $('#converseBtn').removeClass('button_violet')

    })  

    $('#converseBtn').on('click', function(){
        $('#tableMain').css('display', 'grid')
        $('#tablePowerUp').css('display', 'none')
        $(this).removeClass('button_outline')
        $(this).addClass('button_violet')
        $('#powerUpBtn').removeClass('button_violet')
        $('#powerUpBtn').addClass('button_outline')
    })  


    $('.content__vids').slick({
        prevArrow: `<img class="content__arrow" src="images/arrow-left.svg" alt="arrow left">`,
        nextArrow: `<img class="content__arrow" src="images/arrow-right.svg" alt="arrow right">`,
        arrows: true,
        responsive: [
            {
              breakpoint: 500000,
              settings: 'unslick'
            },
                {
                breakpoint: 769,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
    })


    $('.stats-calendar').on('click', function(){
        $('.calendar-popup').toggleClass('active')
    }) 


});

let tableMore = document.querySelectorAll('.more')

window.addEventListener('click', function(e){
    for(let table of tableMore){
        if(e.target !== table){
            table.nextElementSibling.classList.remove('active')
        }
    }
})




// COPY LINK

let copyBtn = document.querySelector('#copyBtn')

window.onload = function(){
    if(copyBtn){
        let copyModal = document.querySelector('#copyModal')
        copyBtn.addEventListener('click', function(){
            let copyLink = document.querySelector('#copyLink').innerText;
            navigator.clipboard.writeText(copyLink);
            copyModal.classList.add('active')
            setInterval(function(){
                copyModal.classList.remove('active')
            }, 2000)
        })

    }
}