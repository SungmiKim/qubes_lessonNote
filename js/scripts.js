function openModal(num) {
  $(".pop_bg").fadeIn();
  $(".pop_ct" + num).fadeIn();

  $(".close").click(function () {
    $(".pop_bg").fadeOut();
    $(".pop_ct" + num).fadeOut();
  });
}

$(".lessonNote .class_info .con_wrap").click(function () {
  $(".lessonNote .class_info .con_wrap").removeClass("on");
  $(this).addClass("on");
});
