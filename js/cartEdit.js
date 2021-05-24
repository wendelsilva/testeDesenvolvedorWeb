var i = 0;

function remove() {
    --i;
    var res = document.querySelector('.res');
    res.innerHTML = i;
    if (i <= 0) {
        alert('Não é possível retirar mais produtos');
        i = 0;
        res.innerHTML = i;
    }

}

function add() {
    i++;
    var res = document.querySelector('.res');
    res.innerHTML = i;
}

o = 0;

function remove2() {
    --o;
    var res2 = document.querySelector('.res2');
    res2.innerHTML = o;
    if (o <= 0) {
        alert('Não é possível retirar mais produtos');
        o = 0;
        res2.innerHTML = o;
    }

}

function add2() {
    o++;
    var res2 = document.querySelector('.res2');
    res2.innerHTML = o;
}