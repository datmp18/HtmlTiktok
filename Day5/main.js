const input1 = document.querySelectorAll(".at1");

input1.forEach(element => {
    document.querySelectorAll(".row1").forEach(row => {
        row.style.top = "-15px";
    });
});