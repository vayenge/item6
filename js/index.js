var items = document.getElementsByClassName('item'); //图片
var points = document.getElementsByClassName('point'); //点
var goprebtn = document.getElementById('gopre'); //
var gonextbtn = document.getElementById('gonext');

var time = 0;//定时器图片跳转参数
var index = 0; //index表示第几张图片在展示---》第index张图片有active这个类名 序号由0开始
//同时可以表示（展示）第几个点 OR第几个点在展示

var clearactive = function () {
    for (var i = 0; i < items.length; i++) {
        items[i].className = 'item';
    }
    for (var i = 0; i < items.length; i++) {
        points[i].className = 'point';
    }
}

var goindex = function () {
    clearactive();
    console.log(index)
    points[index].className = 'point active';
    items[index].className = 'item active';
}
var gonext = function () {
    if (index < 4) {
        index++;
    } else {
        index = 0;
    }
    // index ++;
    goindex();
}

var gopre = function () { //**
    if (index == 0) {
        index = 4;
    } else {
        index--;
    }
    goindex();
}

gonextbtn.addEventListener('click', function () {
    gonext();
})
goprebtn.addEventListener('click', function () {
    gopre();
})

for (var i = 0; i < points.length; i++) {
    points[i].addEventListener('click', function () {
        var pointindex = this.getAttribute('data-index'); //getAttribute注意大小写	
        index = pointindex; //console.log(poindex)
        goindex();
        time = 0;
    })
}

var time = 0;

setInterval(function () {
    time++;
    if (time == 20) {
        gonext();
        time = 0;
    }
}, 100)//2000ms跳转一次	
