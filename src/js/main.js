var headerHeight = $("#header").height();

$('a[href="#about"]').on("click", function(e) {
    e.preventDefault();
  var target = $(this).attr("href");
  var scrollToPosition = $(target).offset().top - headerHeight;
  $('html,body').animate({ 'scrollTop': scrollToPosition }, 1000);
});

$('a[href="#resume"]').on("click", function(e) {
    e.preventDefault();
  var target = $(this).attr("href");
  var scrollToPosition = $(target).offset().top - headerHeight;
  $('html,body').animate({ 'scrollTop': scrollToPosition }, 1000);
});

$('a[href="#portfolio"]').on("click", function(e) {
    e.preventDefault();
  var target = $(this).attr("href");
  var scrollToPosition = $(target).offset().top - headerHeight;
  $('html,body').animate({ 'scrollTop': scrollToPosition }, 1000);
});

$('a[href="#contact"]').on("click", function(e) {
    e.preventDefault();
  var target = $(this).attr("href");
  var scrollToPosition = $(target).offset().top - headerHeight;
  $('html,body').animate({ 'scrollTop': scrollToPosition }, 1000);
});
