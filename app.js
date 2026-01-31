let gameSeq = [];
let userSeq = [];

let btns = ["yellow","red","purple","green"];

let started = true;
let level = 0;
let score = 0;
let h2 = document.querySelector("h2");
document.addEventListener("keypress" , function() {
    if(started){
        console.log("Game Started");
        started = false;
        levelUP();
    }
})

function flashbutton(btn){
    btn.classList.add("flash");
    setTimeout( function(){
        btn.classList.remove("flash");
    },250);
}
function flashbutton(btn){
    btn.classList.add("flash");
    setTimeout( function(){
        btn.classList.remove("flash");
    },250);
}
function userflashbtn(btn){
    btn.classList.add("userflash");
    setTimeout( function(){
        btn.classList.remove("userflash");
    },250);
}
function levelUP(){
    userSeq = [];
    level++;
    h2.innerText = `LEVEL ${level}`
    let randidx = Math.floor(Math.random()*3);
    let randcolor = btns[randidx];
    let btncolor = document.querySelector(`.${randcolor}`);
    gameSeq.push(randcolor);
    flashbutton(btncolor);
}

function checkAns(idx){
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUP,1000);
        }
    }else{
        h2.innerHTML = `Game Over! Your score is <b>${level}</b><br>press any key to start`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        },150);
        reset();
    }
}
function btnpressed() {
    let btn = this;
    userflashbtn(btn);
    usercolor = btn.getAttribute("id");
    console.log(usercolor);
    userSeq.push(usercolor);
    checkAns(userSeq.length-1);
}
function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
    started = true;
    // setTimeout(function(){
    //     alert("Game Will commerce in 3 seconds");
    // },1000);
    // setTimeout(function(){
    //     alert("Game Will commerce in 2 seconds");
    // },2000);
    // setTimeout(function(){
    //     alert("Game Will commerce in 1 seconds");
    // },3000);
}
let allbtns = document.querySelectorAll('.btn');
for(btn of allbtns){
    btn.addEventListener("click",btnpressed);
}