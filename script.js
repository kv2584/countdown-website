let countdownInterval;

function startCountdown() {

    const eventName =
        document.getElementById("eventName").value;

    const date =
        document.getElementById("targetDate").value;

    const time =
        document.getElementById("targetTime").value;

    if (
        eventName === "" ||
        date === "" ||
        time === ""
    ) {

        document.getElementById("countdown")
            .innerHTML =
            "请填写所有信息";

        return;
    }

    const targetDateTime =
        new Date(date + " " + time).getTime();

    document.getElementById("title")
        .innerHTML =
        "距离 " + eventName + " 还有";

    clearInterval(countdownInterval);

    countdownInterval =
        setInterval(function () {

            const now =
                new Date().getTime();

            const distance =
                targetDateTime - now;

            if (distance <= 0) {

                clearInterval(countdownInterval);

                document.getElementById("countdown")
                    .innerHTML =
                    "🎉 时间到了！";

                return;
            }

            const days =
                Math.floor(
                    distance /
                    (1000 * 60 * 60 * 24)
                );

            const hours =
                Math.floor(
                    (distance /
                        (1000 * 60 * 60))
                    % 24
                );

            const minutes =
                Math.floor(
                    (distance /
                        (1000 * 60))
                    % 60
                );

            const seconds =
                Math.floor(
                    (distance / 1000)
                    % 60
                );

            document.getElementById("countdown")
                .innerHTML =
                days + " 天 " +
                hours + " 小时 " +
                minutes + " 分钟 " +
                seconds + " 秒";

        }, 1000);
}