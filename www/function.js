function fill_zero(x,len){ //補零
    x = x.toString();
    while (x.length < len){
        x = "0" + x;
    }
    return x;
}
function get_time(time){//取得時間並且轉換、補零
    return {
        hour: fill_zero(parseInt(time / 3600000) % 60,2),//轉換成小時
        min: fill_zero(parseInt(time / 60000) % 60,2),//轉換成分
        sec: fill_zero(parseInt(time / 1000) % 60,2),//轉換成秒
        ms: fill_zero(time % 1000,3)//轉換成毫秒
    };
}