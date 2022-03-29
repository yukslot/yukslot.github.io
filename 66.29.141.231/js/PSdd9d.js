var x = [0, 276, 602, 473, 297, 272, 890, 1279, 1406, 1386, 754, 625, 1255, 1119, 863, 1057, 894, 666, 1442, 930, 352, 520, 1408, 746, 126, 1216, 981, 301, 141, 1200, 438, 696, 164, 351, 705, 838, 255, 268, 220, 1289, 1009, 1224, 40, 1049, 1141, 1107, 437, 1229, 869, 1177, 419, 1300, 274, 1267, 500, 480, 606, 641, 239, 1354, 131, 1162, 315, 478, 280, 257, 56, 964, 767, 591, 424, 512, 1095, 948, 749, 1379, 999, 1329, 921, 463, 979, 1415, 223, 769, 609, 525, 384, 1001, 526, 593, 1104, 836, 700, 1093, 449, 417, 1231, 731, 1422, 1118, 524, 837, 793, 865, 690, 950, 1419, 1089, 653, 823, 266, 1044, 1262, 182, 1407, 674, 402, 365, 688, 821, 659, 1428, 204, 99, 903, 309, 734, 787, 860, 868, 914, 177, 1316, 1228, 134, 1098, 1169, 447, 928, 1192, 296, 320, 1038, 495, 1256, 1400, 1143, 545, 334, 889, 1180, 1370, 403, 288, 982, 1433, 892, 829, 554, 1236, 1198, 452, 957, 195, 1311, 1014, 589, 1028, 59, 308, 523, 507, 1282, 242, 1080, 1101, 300, 11, 1298, 752, 97, 1414, 279, 850, 1377, 910, 1196, 1039, 1117, 1398, 1376, 961, 1034, 17, 646, 233, 782, 1078, 409, 1145, 1022];

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
