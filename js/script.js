// hamburger dropdown menu toggle functionality
$(document).ready(function(event){
  $(".hamburger-dropdown").hide();
  $(".hamburger").click(function() {
    $(".hamburger-dropdown").slideToggle( "slow");
  });
});

// All, Read, To-Read and Reading - 4 different books display categories that toggle on clicking... showing the one selected/clicked on and hiding the remaining 3. The selected tab also changes color to show that its the current books display and the remaining 3 tabs show the default color.
$(document).ready(function(event){
  $(".read").hide();
  $(".to-read").hide();
  $(".reading").hide();
  // All books category selected - also the default
  $(".tab-all").click(function() {
    $(".all").show();

    $(".tab-all").css("color", "white");
    $(".tab-all").css("background-color", "#ce993d");

    $(".tab-read, .tab-toread, .tab-reading").css("color", "#131512");
    $(".tab-read, .tab-toread, .tab-reading").css("background-color", "#e4e4e4");

    $(".read, .to-read, .reading").hide();
  });
  // Read books category selected
  $(".tab-read").click(function() {
    $(".read").show();

    $(".tab-read").css("color", "white");
    $(".tab-read").css("background-color", "#ce993d");

    $(".tab-all, .tab-toread, .tab-reading").css("color", "#131512");
    $(".tab-all, .tab-toread, .tab-reading").css("background-color", "#e4e4e4");

    $(".all, .to-read, .reading").hide();
  });
  // To-Read books category selected
  $(".tab-toread").click(function() {
    $(".to-read").show();

    $(".tab-toread").css("color", "white");
    $(".tab-toread").css("background-color", "#ce993d");

    $(".tab-all, .tab-read, .tab-reading").css("color", "#131512");
    $(".tab-all, .tab-read, .tab-reading").css("background-color", "#e4e4e4");

    $(".all, .read, .reading").hide();
  });
  // Reading books category selected
  $(".tab-reading").click(function() {
    $(".reading").show();

    $(".tab-reading").css("color", "white");
    $(".tab-reading").css("background-color", "#ce993d");

    $(".tab-all, .tab-read, .tab-toread").css("color", "#131512");
    $(".tab-all, .tab-read, .tab-toread").css("background-color", "#e4e4e4");

    $(".all, .to-read, .read").hide();
  });
});
