$(document).ready(function () {
    var ESC_KEY = 27,
        modalButtons = [document.querySelector("#Button1516"),
        document.querySelector("#Button1415"),
        document.querySelector("#Button1314"),
        document.querySelector("#Button1213"),
        document.querySelector("#Button1112")
      ];

    for (var i = 0; i < modalButtons.length; i++) {
        var button = modalButtons[i];
        button.addEventListener("click", onButtonClick);
    }

    function onButtonClick(e) {
        var target = e.target,
            modal = null;

        while (modal === null) {
            modal = document.querySelector("." + target.getAttribute("modal"));
            target = target.parentNode;
        }

        var closeButton = modal.querySelector(".closeModal");

        modal.style.display = "block";

        $(closeButton).click(function () {
            modal.style.display = "none";
        });
        $(window).click(function (e) {
            if (e.target === modal) {
                modal.style.display = "none";
            }
        });
        $(document).keyup(function (e) {
            if (e.keyCode == ESC_KEY) {
                modal.style.display = "none";
            }
        });
    }
});
