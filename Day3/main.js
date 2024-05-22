
var progress = 0;

setInterval(
    () => {

        progress++;

        document.querySelector('i').innerText = `${progress}%`;
        if (progress === 100) {
            document.querySelector('.loader').style.display = "none";
            document.querySelector('body').style.position = "none";
            document.querySelector('.slide ').style.display = "block";
        }

    },
    50
);