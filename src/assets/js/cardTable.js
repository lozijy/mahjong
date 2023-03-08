
const history={
    count:0,
    last:-1
}
//我
const me = {
number:0,
p_tiles: []
};
const front = {
number:13,
checkNumber:0,
};
const left = {
number:13,
checkNumber:0,
};
const right = {
number:13,
checkNumber:0,
};
// 定义牌组
var tiles = [
    "1m", "2m", "3m", "4m", "5m", "6m", "7m", "8m", "9m",
    "1s", "2s", "3s", "4s", "5s", "6s", "7s", "8s", "9s",
    "1p", "2p", "3p", "4p", "5p", "6p", "7p", "8p", "9p",
];

// 洗牌函数
function shuffle(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}


// 发牌函数
function deal() {
    var hand = shuffle(tiles).slice(0, 13);
    for (var i = 0; i < hand.length; i++) {
        (function(index) {
            me.p_tiles.unshift({id:hand[index],checked:false});
            me.number++;
        })(i);
    }
    my_Sort(me);
    show1(me);
    show2(front);//zui shang mian
    show3(left);
    show4(right);
    }
    //摸牌函数
    function draw(){
        my_Sort(me);
        show1(me);
    }
    //打牌函数
    function discard(){
        my_Sort(me);
        show1(me);
    }
    //吃函数
    function eat(){
        my_Sort(me);
        show1(me);
        show2()
    }
    //碰函数
    function pong(){
        my_Sort(me);
        show1(me);
    }
    //杠函数
    function kong(){
        my_Sort(me);
        show1(me);
    }
    //胡函数
    function win(){
        my_Sort(me);
        show1(me);
    }




// clear
//打牌
function go(i){
    console.log("go");
    me.p_tiles.splice(me.p_tiles.indexOf({id:i,checked:true}), 1);
    var t=document.getElementById(i);
    t.remove();
    
    console.log(me.p_tiles.length)
    show1(me);
}
//点击牌
function click(i,history){
    console.log("click: ",i);
    var box = document.getElementById(i);
    if(history.count==0){
        box.classList.toggle("move");
        new Audio("../../public/audio/click_pai.mp3").play();
        history.count++;
        history.last=i;
    }
    else{
        if(history.last==i){
            go(i);//da pai
            new Audio("../../public/audio/discard_tile.mp3").play();
            history.count=0;
            history.last=-1;
        }else{
            document.getElementById(history.last).classList.toggle("move");
            new Audio("../../public/audio/click_pai.mp3").play();
            box.classList.toggle("move");
            history.last=i;
        }
    }

}

// 排序函数
function my_Sort(me){
    console.log("mysort");
    me.p_tiles.sort(function(a,b){
        if((a.id)[1]==(b.id)[1]){
            return Number(a.id[0])-Number(b.id[0]);
        }else{
            return (a.id.codePointAt(1)-b.id.codePointAt(1));
        }})
    }















//前端展示
//展示函数,主要是对me的数组进行遍历，对每一个元素都做一个div展示出来
function show1(me){
    for(var i =0; i<me.p_tiles.length;i++){
        if(me.p_tiles[i].checked===false){
            var tile = document.createElement("img");
            (function(index) {
            tile.src  = `../../public/img/1/${me.p_tiles[index].id}.gif`;
            //设置id    
            tile.id=me.p_tiles[index].id;
            //添加点击函数
            tile.onclick = function() {
                click( this.id,history);
                };
        })(i);
            tile.className = "bottom-tile";
            // 这个事件处理函数 click(i) 中的 i 是循环变量，最终的值是 13，因为在循环结束时它停留在了最后一个元素。这意味着在点击任何牌时，它将始终传递值 13。
            // 解决此问题的方法是使用另一个变量来存储循环变量 i 的当前值
            document.getElementById("bottom").appendChild(tile);
            me.p_tiles[i].checked=true;
        }
    }
}
function show2(front){
    while(front.checkNumber!=front.number){
        if(front.checkNumber<front.number){
            var tile = document.createElement("img");
            tile.src =`../../public/img/2/behind.gif`;
            tile.className = "top-tile";
            tile.id=`pl2${front.checkNumber}`;
            front.checkNumber++;
            document.getElementById("top").appendChild(tile);
        }
        else{
            var tile = document.getElementById(`pl2${front.checkNumber}`);
            tile.remove();
            front.checkNumber--;
        }
        
    }
}
function show3(left){
    while(left.checkNumber!=left.number){
        if(left.checkNumber<left.number){
            var tile = document.createElement("img");
            tile.src =`../../public/img/2/left.png`;
            tile.className = "left-tile";
            tile.id=`pl3${left.checkNumber}`;
            document.getElementById("left").appendChild(tile);
            left.checkNumber++;
        }
        else if(left.checkNumber>left.number){
            var tile = document.getElementById(`pl3${left.checkNumber}`);
            tile.remove();
            front.checkNumber--;
        }
    }
}
function show4(right){
    while(right.checkNumber!=right.number){
        if(right.checkNumber<right.number){
            var tile = document.createElement("img");
            tile.src =`../../public/img/2/right.png`;
            tile.className = "right-tile";
            tile.id=`pl4${right.checkNumber}`;
            right.checkNumber++;
            document.getElementById("right").appendChild(tile);
        }
        else if(right.checkNumber>right.number){
            var tile = document.getElementById(`pl4${right.checkNumber}`);
            tile.remove();
            front.checkNumber--;
        }  
    }
}

function disappear(tile){
    if(tile.style.opacity==0){
        tile.remove();
    }
    setTimeout(()=>{
        tile.style.opacity-=0.2;
        disappear(tile);
    },200)

}
//吃(前端)
function addChi(){
    var tile = document.createElement("img");
    tile.src  = `../../public/img/4/chi.png`;
    tile.onclick = function(){(function(t){Chi(t)})(tile)};
    tile.addEventListener("mouseover", function() {
        tile.style.transform = "scale(1.2)";
        var v=new Audio("../../public/audio/btn_appear.mp3");
        v.volume=0.5;
        v.play();
      });
      tile.addEventListener("mouseout", function() {
        tile.style.transform = "scale(1)";
        var v=new Audio("../../public/audio/btn_appear.mp3");
        v.volume=0.5;
        v.play();
    });
    document.getElementsByClassName("buttonContainer")[0].appendChild(tile);
}
function Chi(tile){
    //播放音乐
    new Audio("../../public/audio/fulu.mp3").play();    
    //向后端发送请求
    //渐变消失
    disappear(tile);

    
}

//杠(前端)
function addGang(){
    var tile = document.createElement("img");
    tile.src  = `../../public/img/4/gang.png`;
    tile.onclick = function(){(function(t){Gang(t)})(tile)};
    tile.addEventListener("mouseover", function() {
        tile.style.transform = "scale(1.2)";
        var v=new Audio("../../public/audio/btn_appear.mp3");
        v.volume=0.5;
        v.play();
      });
      tile.addEventListener("mouseout", function() {
        tile.style.transform = "scale(1)";
        var v=new Audio("../../public/audio/btn_appear.mp3");
        v.volume=0.5;
        v.play();
    });
    document.getElementsByClassName("buttonContainer")[0].appendChild(tile);
}

function Gang(tile){
    new Audio("../../public/audio/gang.mp3").play();
    //向后端发送请求
    //渐变消失
    disappear(tile);

}
//自摸(前端)
function addZimo(){
    var tile = document.createElement("img");
    tile.src  = `../../public/img/4/zimo.png`;
    tile.onclick = function(){(function(t){Zimo(t)})(tile)};
    tile.addEventListener("mouseover", function() {
        tile.style.transform = "scale(1.2)";
        var v=new Audio("../../public/audio/btn_appear.mp3");
        v.volume=0.5;
        v.play();
      });
      tile.addEventListener("mouseout", function() {
        tile.style.transform = "scale(1)";
        var v=new Audio("../../public/audio/btn_appear.mp3");
        v.volume=0.5;
        v.play();
    });
    document.getElementsByClassName("buttonContainer")[0].appendChild(tile);
}
function Zimo(tile){
    v=new Audio("../../public/audio/zimo.mp3");
    v.volume=0.3;
    v.play();
    //向后端发送请求
    //渐变消失
    disappear(tile);
}

//跳过(前端)
function addTiaoguo(){
    var tile = document.createElement("img");
    tile.src  = `../../public/img/4/tiaoguo.png`;
    tile.onclick = function(){(function(t){Tiaoguo(t)})(tile)};
    tile.addEventListener("mouseover", function() {
        tile.style.transform = "scale(1.2)";
        var v=new Audio("../../public/audio/btn_appear.mp3");
        v.volume=0.5;
        v.play();
      });
      tile.addEventListener("mouseout", function() {
        tile.style.transform = "scale(1)";
        var v=new Audio("../../public/audio/btn_appear.mp3");
        v.volume=0.5;
        v.play();
    });
    document.getElementsByClassName("buttonContainer")[0].appendChild(tile);
}
function Tiaoguo(tile){
    new Audio("../../public/audio/fulu.mp3").play();
    //向后端发送请求
    //渐变消失
    disappear(tile);

}
//胡(前端)
function addHu(){
    var tile = document.createElement("img");
    tile.src  = `../../public/img/4/hu.png`;
    tile.onclick = function(){(function(t){Hu(t)})(tile)};
    tile.addEventListener("mouseover", function() {
        tile.style.transform = "scale(1.2)";
        var v=new Audio("../../public/audio/btn_appear.mp3");
        v.volume=0.5;
        v.play();
      });
      tile.addEventListener("mouseout", function() {
        tile.style.transform = "scale(1)";
        var v=new Audio("../../public/audio/btn_appear.mp3");
        v.volume=0.5;
        v.play();
    });
    document.getElementsByClassName("buttonContainer")[0].appendChild(tile);
}
function Hu(tile){
    new Audio("../../public/audio/fulu.mp3").play();
    //向后端发送请求
    //渐变消失
    disappear(tile);
}

//流局(前端)
function showtile(){
    new Audio("../../public/audio/showtile.mp3").play();
}







// 初始化函数
function init() {
// document.getElementById("draw").addEventListener("click", function() {
//     alert("摸牌");
//     draw();
// });
// document.getElementById("discard").addEventListener("click", function() {
//     alert("打牌");
//     discard();
// });
// document.getElementById("eat").addEventListener("click", function() {
//     alert("吃");
//     eat();
// });
// document.getElementById("pong").addEventListener("click", function() {
//     alert("碰");
//     pong();
// });
// document.getElementById("kong").addEventListener("click", function() {
//     alert("杠");
//     kong();
// });
// document.getElementById("win").addEventListener("click", function() {
//     alert("胡");
//     win();
// });
deal();
addChi();
addGang();
addHu();
addTiaoguo();
addZimo();

}

// 页面加载完成后执行初始化函数
window.onload = init;