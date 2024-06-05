document.addEventListener("DOMContentLoaded", function () {
  const fisIcon = document.querySelector(".fis .service-image");
  const accredIcon = document.querySelector(".accred .service-image");

  helpDeskIcon.addEventListener("mouseover", function () {
    fisIcon.src = "/static/services/FIS (1).png";
  });

  helpDeskIcon.addEventListener("mouseout", function () {
    fisIcon.src = "/static/services/FIS.png";
  });

  scdsIcon.addEventListener("mouseover", function () {
    accredIcon.src = "/static/services/ACCRED (1).png";
  });

  scdsIcon.addEventListener("mouseout", function () {
    accredIcon.src = "/static/services/ACCRED.png";
  });
});
