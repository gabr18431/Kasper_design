$(document).ready(function () {
    $("nav .menu").on('click' , function () {
        $("nav .menu-mobile").slideToggle();
    })

    $(".portfolio ul li").on('click' , function () {
        $(".portfolio ul li").removeClass("active")
        $(this).addClass("active")
        
        $(".portfolio .imags-container .box").fadeOut()
        let imgTarget = $(this).text();
        if (imgTarget == "All") {
            $(".box").fadeIn();
        } else {
            $("."+imgTarget).fadeIn(1000);
        }
    })
    

})