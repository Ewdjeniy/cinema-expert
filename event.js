$(document).ready(function() {
   $("#picture1").click (function() {
      $("#bigPicture").attr("src", "pictures/bigPicture1.png");
   });
   $("#picture2").click (function() {
      $("#bigPicture").attr("src", "pictures/bigPicture2.png");
   });
   $("#picture3").click (function() {
      $("#bigPicture").attr("src", "pictures/bigPicture3.png");
   });
   $("#picture4").click (function() {
      $("#bigPicture").attr("src", "pictures/bigPicture4.png");
   });
   
   $("#fashion").click (function() {
      $("#fashionSelected").css("visibility", "visible");
      $("#filmSelected").css("visibility", "hidden");
      $("#tvSelected").css("visibility", "hidden");
   });
   
   $("#film").click (function() {
      $("#fashionSelected").css("visibility", "hidden");
      $("#filmSelected").css("visibility", "visible");
      $("#tvSelected").css("visibility", "hidden");
   });
   
   $("#tv").click (function() {
      $("#fashionSelected").css("visibility", "hidden");
      $("#filmSelected").css("visibility", "hidden");
      $("#tvSelected").css("visibility", "visible");
   });
});