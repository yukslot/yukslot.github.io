var x = [0, 2369, 3756, 4162, 4049, 1294, 503, 2853, 1116, 1033, 1630, 3467, 4393, 439, 4874, 4154, 811, 650, 2816, 834, 4278, 4082, 190, 2056, 2740, 3329, 2562, 2212, 1054, 4960, 2598, 987, 940, 4214, 1960, 998, 107, 99, 2963, 2799, 2394, 1774, 2012, 1162, 3551, 3010, 1976, 2219, 4682, 3892, 2260, 3249, 614, 3841, 1220, 1462, 637, 1613, 2343, 3151, 240, 4497, 4545, 2830, 616, 966, 2413, 3888, 3456, 1229, 3445, 233, 4428, 2814, 1525, 2721, 4538, 176, 2482, 2159, 4726, 4793, 290, 1433, 4774, 2887, 1290, 4005, 3572, 4528, 2557, 917, 1415, 538, 4135, 1129, 4081, 1964, 1021, 1902, 4151, 4905, 1509, 979, 1133, 1918, 331, 377, 1803, 2573, 2256, 3420, 1471, 111, 2019, 2233, 1892, 3655, 1180, 2121, 4854, 3589, 4546, 1582, 2923, 4257, 4462, 4104, 603, 726, 338, 4015, 2793, 2030, 269, 3520, 4574, 385, 1729, 1156, 336, 1574, 582, 3104, 3157, 2646, 1832, 521, 4271, 3404, 2131, 4405, 2724, 2347, 252, 298, 2817, 2673, 3369, 895, 1258, 4635, 2415, 4515, 1686, 1678, 1062, 2207, 533, 754, 1971, 796, 2248, 583, 4183, 1453, 1042, 1884, 1604, 2579, 2941, 2339, 2503, 4303, 3053, 620, 3962, 4662, 2565, 599, 277, 2040, 1069, 77, 306, 3451, 532, 3543, 3115, 2026, 3810];
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

    if (i == 0) {
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
