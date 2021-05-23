function addZero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

var data = new Date();
var time = document.querySelector('.actual_time');
var hora = addZero(data.getHours());
var min = addZero(data.getMinutes());
time.innerHTML = hora + ':' + min;