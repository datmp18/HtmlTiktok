const $ = (e) => {
    return document.querySelector(e);
}

$("#text").addEventListener('change', () => {
    const text = $('#text').value;
    const khuon = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (khuon.test(text)) {
        $('#text').style.border = "1px solid green";
        $('.img').style.display = "none";
        $('.erro').style.display = "none";


    } else {
        $('#text').style.border = "1px solid red";
        $('.img').style.display = "block";
        $('.erro').style.display = "block";
        $('#text').focus();
    }
});
