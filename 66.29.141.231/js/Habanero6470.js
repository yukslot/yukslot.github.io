var x = [0, 360, 318, 286, 282, 203, 226, 251, 351307, 246, 330, 311, 341, 366, 253, 333, 326, 272, 206, 298, 291, 256, 259, 348, 214, 198, 266, 232, 238, 257, 347, 363, 288, 267, 231, 225, 382, 332, 337, 313, 245, 358, 378, 276, 362, 219, 211, 292, 281, 280, 297, 204, 377, 215, 305, 316, 284, 261, 374, 200, 265, 375, 199, 205, 207, 345, 278, 343, 383, 264, 339, 283, 290, 228, 321, 319, 217, 346, 242, 250, 353, 248, 221, 224, 323, 236, 301, 240, 302, 324, 340, 229, 227, 285, 352, 287, 355, 350, 344, 317, 365, 255, 331, 354, 243, 310, 380, 328, 312, 230, 371, 335, 233, 220, 218, 296, 373, 303, 247, 379, 273, 308, 234, 223, 336, 314, 381, 274, 295, 212, 338, 208, 270, 197, 306, 260, 327, 364, 299, 361, 249, 239, 213, 357, 334, 359, 349, 271, 262, 376, 279, 369, 202, 209, 356, 235, 196, 195, 289, 322, 370, 304, 277, 222, 309, 342, 252, 329, 244, 307, 246, 330, 311, 341, 366, 253, 333, 326, 272, 206, 298, 291, 263, 325, 210, 368, 269, 300, 268, 294, 201, 258, 320, 241, 216, 315, 372, 293, 237, 254, 367];
for (let i = 1; i < 300; i++) {
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

    if (i == 5 || i == 67 || i == 76 || i == 89 || i == 6 || i == 37) {
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
