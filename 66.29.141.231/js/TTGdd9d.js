var x = [0, 321, 146, 63, 1005, 83, 477, 448, 1186, 684, 96, 849, 337, 32, 943, 116, 847, 392, 654, 1040, 391, 1123, 994, 111, 724, 1044, 555, 1032, 126, 274, 471, 217, 606, 22, 91, 940, 1172, 86, 241, 644, 852, 586, 1184, 282, 343, 917, 459, 2, 33, 678, 558, 297, 600, 506, 198, 97, 1091, 1145, 804, 1170, 789, 295, 1016, 261, 767, 853, 737, 494, 846, 628, 749, 810, 841, 766, 1012, 516, 537, 416, 511, 636, 980, 552, 1042, 623, 582, 457, 331, 89, 419, 399, 489, 307, 1161, 267, 354, 954, 1149, 714, 668, 121, 1212, 122, 666, 683, 786, 959, 335, 165, 440, 1139, 957, 543, 550, 20, 908, 1001, 1124, 313, 197, 336, 127, 332, 979, 1116, 67, 164, 82, 1057, 319, 71, 373, 893, 534, 495, 703, 478, 288, 522, 921, 1182, 257, 334, 988, 897, 809, 310, 710, 832, 1053, 280, 425, 813, 731, 184, 507, 1189, 176, 673, 732, 276, 483, 665, 1234, 398, 59, 296, 1115, 237, 958, 733, 324, 462, 890, 549, 1093, 1027, 1164, 964, 730, 689, 106, 686, 868, 227, 596, 401, 428, 821, 1159, 19, 31, 1011, 953, 1205, 622, 205, 207, 655, 485, 55, 1143];
for (let i = 1; i < 195; i++) {
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

    if (i == 44 || i == 35 || i == 48 || i == 74 || i == 105 || i == 41 || i == 69) {
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
