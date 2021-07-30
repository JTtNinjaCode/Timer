$('body').on('click', '#start', () => {
    // Date 物件是基於世界標準時間從 1970 年 1 月 1 日開始的毫秒數值來儲存時間
    //計算主要時間
    main_time = +new Date() - different_time;
    //計算副時間
    sub_time = +new Date() - different_sub_time;
    start = !start; //布林切換
    reset = !reset; //布林切換
    //隨著布林切換更改按鈕上的字
    $('#start').text((start) ? 'Pause' : 'Start');
    $('#reset').text((reset) ? 'Next' : 'Reset');
})
$('body').on('click', '#split', () => { //分割
    if (!different_time || !different_sub_time) return false; //總時間或分割時間為0 不進行分割
    let big = get_time(different_time);//取得大字的時分秒物件
    let small = get_time(different_sub_time);//取得小字的時分秒物件
    $('#split_place').append(`
    <div class='list'>
        <div>#${split_index}</div>
        <div><span class='split_main_text'>${small.hour}:${small.min}:${small.sec}</span><span class='split_sub_text'>.${small.ms}</span></div>
        <div><span class='split_main_text'>${big.hour}:${big.min}:${big.sec}</span><span class='split_sub_text'>.${big.ms}</span></div>
    </div>
    `);
    split_index++;
    // 分割時間歸0
    sub_time = +new Date();
    different_sub_time = 0;
    $('#small_hour_min_sec').text('00:00:00');//重置小字時分秒
    $('#small_ms').text('.000');//重置小字毫秒
})
$('body').on('click', '#reset', () => {
    if (!reset) { //重製
        start = 0; //使時間設為0
        $('.list').remove();//清空list
        $('#start').text('Start'); //start區塊填入文字：開始
        $('#big_hour_min_sec').text('00:00:00');//更改大字時分秒
        $('#big_ms').text('.000');//更改大字毫秒
        $('#small_hour_min_sec').text('00:00:00');//更改小字時分秒
        $('#small_ms').text('.000');//更改小字毫秒
        main_time = 0;
        sub_time = 0;
        different_time = 0;
        different_sub_time = 0;
        split_index = 1;
        reset = 1;
    } else { //跳題
        sub_time = +new Date();
        different_sub_time = 0;
        $('#small_hour_min_sec').text('00:00:00');
        $('#small_ms').text('.000');
    }
})
$('#split_place').sortable({
    stop: () => {
        $('.list').each((index, e) => {
            $(e).children(':eq(0)').text(`#${index+1}`);
        })
    }
});