/*
    計時方式使用：現在時間-開始計時的時間
*/
let main_time = 0,              //開始計時的時間(主要)
    sub_time = 0,               //開始計時的時間(分割)
    different_time = 0,         //時間差(主要)
    different_sub_time = 0,     //時間差(分割)
    temp,                       //各類暫存
    start = 0,                  //判斷是否開始計時
    split_index = 1,            //紀錄分割幾次
    reset = 1                   //重製|跳題

setInterval(() => {//連閃器
    if (!start) return false;//如果是暫停狀態就不管
    different_time = +new Date() - main_time;
    different_sub_time = +new Date() - sub_time;
    //主要時間設置
    temp = get_time(different_time);
    $("#big_hour_min_sec").text(`${temp.hour}:${temp.min}:${temp.sec}`);
    $("#big_ms").text(`.${temp.ms}`);
    //分割時間設置
    temp = get_time(different_sub_time);
    $("#small_hour_min_sec").text(`${temp.hour}:${temp.min}:${temp.sec}`);
    $("#small_ms").text(`.${temp.ms}`);
},1);