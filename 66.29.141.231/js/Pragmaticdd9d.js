var x = [0, 405, 383, 430, 432, 408, 409, 392, 428, 395, 446, 390, 435, 388, 400, 427, 417, 419, 384, 412, 393, 406, 426, 425, 445, 44074, 99, 124, 135, 102, 161, 81, 85, 29, 20, 137, 64, 22, 122, 150, 101, 156, 14, 83, 104, 88, 127, 72, 25, 34, 21, 39, 179, 164, 176, 4, 70, 48, 9, 84, 183, 163, 180, 6, 146, 153, 173, 62, 188, 60, 170, 108, 129, 138, 67, 140, 28, 133, 113, 110, 96, 100, 31, 53, 55, 18, 41, 142, 152, 166, 79, 187, 186, 111, 44, 97, 23, 174, 98, 80, 19, 158, 73, 107, 103, 77, 123, 71, 78, 49, 190, 93, 35, 169, 32, 40, 167, 160, 191, 116, 151, 172, 3, 38, 17, 2, 36, 26, 50, 33, 16, 56, 115, 75, 159, 37, 171, 58, 182, 15, 76, 105, 90, 130, 42, 87, 192, 147, 47, 139, 178, 119, 143, 154, 141, 106, 30, 52, 51, 136, 121, 59, 184, 1, 175, 57, 86, 63, 181, 13, 54, 8, 148, 112, 193, 149, 45, 185, 82, 27, 91, 120, 46, 118, 126, 128, 7, 68, 157, 65, 168, 145, 92, 11, 61, 189, 155, 109, 5, 117, 89, 114, 144, 12, 10, 95, 132, 94, 134, 177, 125, 69, 194, 24, 162, 165, 43, 131, 66];

for (let i = 1; i < 1000; i++) {
    const d = new Date();
    var date = d.getUTCDate();
    var day = d.getUTCDay() + 1;
    var year = d.getUTCFullYear();
    var month = d.getUTCMonth() + 1;
    var hour = d.getUTCHours();
    var min = d.getMinutes();
    if (min < 30) {
        min = 1;
    } else {
        min = 2;
    }
    var xx = day + year * month * date;
    xx = Math.pow(xx, hour * min);
    xx = xx * x[i];
    // xx = xx * 2 - 1;
    // xx = xx/2;

    if (i == 4 || i == 9 || i == 8 || i == 17 || i == 136 || i == 6 || i == 6 || i == 5 || i == 120 || i == 26 || i == 3 || i == 13 || i == 147) {
        xx = xx % 27;
        xx += 65;
    } else {
        xx = xx % 83;
        xx += 8;
    }
    const as = "percent-bar-" + i;
    const asd = "percent-txt-" + i;
    var percentTxt = document.getElementById("percent-txt-" + i);
    var bar = document.getElementById("percent-bar-" + i);
    const bartext = document.getElementById("card-title" + i);
    percentTxt.innerHTML = xx + "%";
    $("#percent-bar-" + i)
        .attr("aria-valuenow", xx)
        .css("width", xx + "%");
    if (xx < 30) {
        bar.classList.add("red");
    } else if (xx > 70) {
        bar.classList.add("green");
    } else {
        bar.classList.add("yellow");
    }
}
