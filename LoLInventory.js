const Chest = document.querySelector('#View');
const ShowList = document.querySelector('#FriendList');
const Arrow = document.querySelector('#Arrow');

function ViewList(){
    ShowList.classList.toggle('Hidden');
    Arrow.classList.toggle('Rotate');
}

function ChestView(){
    Chest.innerHTML = '<img src="ChestH.png" class="Chest">' +
    '<div class="BtnChest">' +
    '<button>ABRIR</button>' +
    '<button>ABRIR 3</button>' +
    '</div>'
}

function AddList(){
    for (i = 5; i < 21; i++){
        ShowList.innerHTML += '<div class="Offline"><div class="Avatar4"><img src="X&R.jpg"></div><div class="NickStatus4"><p>Manco '+i+'</p><p>Desconectado</p></div></div>'
    }
}

function KeyView(){
    Chest.innerHTML = '<img src="ForgeKey.png">'
}

function GemView(){
    Chest.innerHTML = '<h1 style="color: white; text-align: center;">Las gemas son tan poderosas, que no me dejaron copiarlas</h1>'
}

function SettView(){
    Chest.innerHTML = '<h1 style="color: white; text-align: center;">No manches bro, sett lleva años en LoL ya</h1>'
}

function PrestigeView(){
    Chest.innerHTML = '<img src="PointP.png" style="width: 100%; height= 100%; cursor: pointer;">'
}

function NoHaySistema(){
    Chest.innerHTML = '<img src="Noaisistema.png">'+
    '<h2 style="color: white; text-align: center;">No hay sistema</h2>'
}

function NoChamp(){
    Chest.innerHTML = '<img src="SadCat.png">'+
    '<h2 style="color: white; text-align: center;">No consegui las imagenes de cada campeón bandita</h2>'
}

function YasuoView(){
    Chest.innerHTML = '<img src="YasuoF.png" style="width: 100%; height= 100%; cursor: pointer;">'+
    '<h2 style="color: white; text-align: center;">Está más prrona esta panas, se le ve fresco al Yasuo</h2>'
}

function MiniView(){
    Chest.innerHTML = '<img src="Kekw.png" style="cursor: pointer;">'+
    '<h2 style="color: white; text-align: center;">¿Quién compra minileyendas en 2020?</h2>'
}

function ViewEternos(){
    Chest.innerHTML = '<img src="Eternos.png" style="width: 70%; height= 70%; cursor: pointer;">'+
    '<h2 style="color: white; text-align: center;">Se ve prron</h2>'
}

function ViewEternos2(){
    Chest.innerHTML = '<img src="Eternos2.png" style="width: 70%; height= 70%; cursor: pointer;">'+
    '<h2 style="color: white; text-align: center;">Este maso</h2>'
}

function ViewPengui(){
    Chest.innerHTML = '<img src="Pengui.png" style="width: 50%; height= 50%; cursor: pointer;">'+
    '<h2 style="color: white; text-align: center;">No me sale este :"( </h2>'
}

function ViewUju(){
    Chest.innerHTML = '<img src="Uju.png" style="width: 50%; height= 50%; cursor: pointer;">'+
    '<h2 style="color: white; text-align: center;">Este lo debes spamear hasta cuando fallas un minion gordo, como las M7 de yasuo </h2>'
}

function ChangedStatus(){

    const Circle = document.querySelector('#Circle');
    const Par = document.querySelector('#Par');

    Circle.classList.toggle('Dissconected');
    Par.classList.toggle('DissconectedP');
}
