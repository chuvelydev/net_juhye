$(document).ready(function () {
  $("#fullpage").fullpage();
});

$(function () {
  $(".here").mouseover(function () {
    $(".videoOverlay").css({ display: "block" });
    $(".bg").css({ display: "none" });
    $(".close").css({ display: "block" });
  });
  $(".close").click(function () {
    $(".videoOverlay").css({ display: "none" });
    $(".bg").css({ display: "block" });
    $(".close").css({ display: "none" });
  });
});
$(function () {
  $(".a3_a1 img").mouseover(function () {
    $(this).parent().next(".a3_a2").show();
    $(this).parent(".a3_a1").hide();
  });
  $(".a3_a2").mouseleave(function () {
    $(".a3_a2").hide();
    $(".a3_a1").show();
  });
  $(".accordion_btn").click(function () {
    const content = $(this).next(".accordion_content");
    content.slideToggle(300);
    $(this).toggleClass("active");
  });
});
