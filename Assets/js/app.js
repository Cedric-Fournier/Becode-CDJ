$(".nav .nav-link").on("click", function(){
   $(".nav").find(".activ").removeClass("activ");
   $(this).addClass("activ");
});
