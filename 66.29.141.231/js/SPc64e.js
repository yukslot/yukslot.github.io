var x = [0, 3811, 4808, 51, 3446, 354, 4939, 2914, 3539, 995, 571, 3029, 4646, 368, 3158, 4136, 3107, 3142, 2520, 1641, 1289, 2017, 2156, 4130, 3887, 4575, 3225, 4253, 2393, 769, 2223, 4539, 1239, 912, 3619, 179, 347, 4104, 4782, 3322, 3727, 3188, 4152, 1407, 3283, 3468, 1119, 2471, 4143, 4948, 2853, 1315, 3133, 3317, 985, 474, 1936, 3206, 1204, 1433, 2977, 2245, 4485, 3371, 3439, 3044, 1263, 2163, 2099, 584, 2350, 4648, 3739, 2327, 3842, 4279, 3562, 2205, 4036, 3904, 4252, 4172, 4742, 492, 1450, 1159, 2821, 2214, 157, 3374, 4813, 567, 1727, 1419, 3963, 764, 2738, 1063, 4451, 1548, 3874, 3509, 1132, 1128, 3148, 4263, 1817, 2431, 3194, 3776, 3412, 689, 2016, 1386, 3738, 2021, 4919, 1837, 4986, 456, 1458, 3834, 4876, 879, 2634, 3999, 1638, 771, 2776, 4552, 3657, 3909, 4108, 419, 3072, 1809, 2096, 2497, 4013, 3938, 1020, 161, 1867, 3383, 205, 1756, 2989, 2940, 1203, 3862, 989, 1467, 1537, 1918, 2240, 379, 3287, 4811, 4570, 1915, 2403, 1178, 2326, 1409, 2579, 2632, 3923, 2511, 40, 4256, 2204, 3898, 3868, 2058, 1553, 3541, 3358, 2843, 3784, 3492, 1400, 938, 2420, 4756, 903, 2406, 4623, 2007, 3058, 697, 3162, 4831, 542, 1593, 310, 4273, 1475, 1656, 1824, 1636, 2348];
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
