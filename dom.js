<<<<<<< HEAD
document.writeln("hello");

function result(){
    let inputdata = document.getElementById("inputText").value;

    let changecolor = document.getElementById('text');
    changecolor.style.color="white";

    let bodycolor = document.getElementsByTagName('body')[0];
    bodycolor.style.backgroundColor = "red";

    document.getElementById('text').style.fontSize = 500;
}

let para = document.getElementById("paratext");

function changetextcolor(){
    para.style.backgroundColor = "#" +Math.floor(Math.random() * 16777777777);
}
para.addEventListener('mouseover',changetextcolor);
=======
document.writeln("hello");

function result(){
//     let inputdata = document.getElementById("inputText").value;

    let changecolor = document.getElementById('text');
    changecolor.style.color="white";

    let bodycolor = document.getElementsByTagName('body')[0];
    bodycolor.style.backgroundColor = "red";

    document.getElementById('text').style.fontSize = 500;
}

let para = document.getElementById("paratext");

// function changetextcolor(){
//     para.style.backgroundColor = "#" +Math.floor(Math.random() * 16777777777);
// }
// para.addEventListener('mouseover',changetextcolor);
>>>>>>> 83e5e57475dc47e1352a6777ecf19ec4da8d7bf2
