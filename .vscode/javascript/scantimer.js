document.addEventListener("DOMContentLoaded", function () {

    const countdownElement = document.getElementById("countdown");
    const messageElement = document.getElementById("timer-message");
    const resultsButton = document.getElementById("resultsButton");

    let count = 3;


    function startCountdown() {

        countdownElement.textContent = count;

        messageElement.textContent = "Hold still...";


        const timer = setInterval(function () {

            count--;

            if (count > 0) {

                countdownElement.textContent = count;

            } else {

                clearInterval(timer);

                countdownElement.textContent = "✓";

                messageElement.textContent = "Scan captured!";

            }

        }, 1000);
    }


    startCountdown();


    resultsButton.addEventListener("click", function () {

        window.location.href = "results.html";

    });

});