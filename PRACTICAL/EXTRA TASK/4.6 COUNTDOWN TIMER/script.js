let Timer = () => {
    const endTimeElement = document.getElementById("end-time");
    const input = document.querySelectorAll('input[type="text"]');
    const userEndDate = document.getElementById("userEndDate");
    const startCountdownButton = document.getElementById("startCountdown");
    const completionMessage = document.getElementById("completionMessage");

    let endDate = "";

    startCountdownButton.addEventListener("click", () => {
        endDate = userEndDate.value;
        if (endDate) {
            endTimeElement.innerText = `End Date: ${new Date(endDate).toLocaleString()}`;
            completionMessage.style.display = "none";
            clock();
            setInterval(clock, 1000);
        }
    });

    function clock() {
        const end = new Date(endDate);
        const now = new Date();
        const diff = (end - now) / 1000;

        if (diff < 0) {
            completionMessage.style.display = "block";
            return;
        }

        input[0].value = Math.floor(diff / 3600 / 24);
        input[1].value = Math.floor((diff / 3600) % 24);
        input[2].value = Math.floor((diff / 60) % 60);
        input[3].value = Math.floor(diff % 60);
    }
};

Timer()
