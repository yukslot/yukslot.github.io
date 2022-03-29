var x = [0, 61, 247, 193, 901, 866, 818, 525, 643, 816, 916, 152, 729, 470, 352, 722, 482, 992, 105, 80, 183, 924, 185, 796, 641, 416, 568, 348, 370, 923, 820, 523, 746, 938, 6, 978, 178, 12, 999, 134, 670, 177, 155, 401, 34, 637, 913, 546, 439, 774, 139, 218, 449, 243, 246, 765, 625, 918, 503, 879, 925, 438, 842, 724, 776, 872, 161, 661, 424, 977, 23, 469, 122, 903, 632, 960, 367, 216, 468, 288, 410, 18, 893, 993, 648, 557, 506, 645, 532, 27, 330, 25, 104, 66, 35, 741, 592, 657, 62, 584, 169, 846, 663, 189, 283, 810, 43, 562, 190, 706, 317, 576, 572, 383, 314, 170, 681, 192, 406, 58, 777, 45, 160, 707, 520, 762, 384, 260, 521, 815, 573, 484, 366, 596, 798, 797, 728, 36, 92, 895, 745, 256, 567, 86, 761, 278, 258, 213, 919, 462, 991, 534, 932, 72, 870, 375, 32, 743, 995, 980, 778, 447, 255, 8, 89, 790, 806, 683, 412, 394, 795, 665, 522, 508, 117, 346, 698, 838, 599, 834, 986, 180, 448, 692, 586, 450, 575, 253, 782, 60, 219, 263, 559, 878, 329, 714, 861, 24, 996, 868, 287];
for (let i = 1; i < 319; i++) {
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

    if (i == 13 || i == 8 || i == 5 || i == 7 || i == 73 || i == 33 || i == 11 || i == 113) {
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
