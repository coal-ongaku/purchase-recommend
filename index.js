$(function () {
  $(function () {
    $(".btn").on("click", function () {
      $(this).closest("div").css("display", "none");
      id = $(this).attr("href");
      $(id).addClass("fit").fadeIn("slow").show();
    });
  });

  var arr = [];
  //それぞれのデータを配列に入れるための変数box
  $(".btn").each(function () {
    $(this).on("click", function () {
      var value = $(this).data("value");
      arr.push(value);
    });
  });

  $(".end").on("click", function () {
    if (arr.includes("none")) {
      $("#studio-one-prime").css("display", "");
    } else if (arr.includes("with-lease")) {
      if (arr.includes("vocaloid")) {
        $("#vocaloid-bundle").css("display", "");
      } else if (arr.includes("able-to-play") || arr.includes("sing")) {
        $("#audio-interface").css("display", "");
      } else {
        $("#studio-one-artist").css("display", "");
      }
    } else if (arr.includes("authentic")) {
      if (arr.includes("vocaloid")) {
        $("#vocaloid-bundle").css("display", "");
      }
      if (arr.includes("cevio") || arr.includes("synth-v")) {
        $("#wants-vocalo").css("display", "");
      }
      if (arr.includes("able-to-play") || arr.includes("sing")) {
        $("#audio-interface").css("display", "");
      }
    }
    $(".return-btn").css("display", "");
  });
});
