let gameSeq=[];
let userSeq=[];

let btns=["red","yellow","green","purple"];

let started = false;
let level = 0;
let h2 = document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("Game is started");
        started=true;

        levelUp();
    }
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },1000);
}

function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    },1000);
}

function levelUp(){
    userSeq=[];

    level++;
    h2.innerText=`Level ${level}`;
    let randIdx=Math.floor(Math.random()*3);
    let randColor=btns[randIdx];
    let randBtn=document.querySelector(`.${randColor}`);
    //console.log(randIdx);
    //console.log(randColor);
    //console.log(randBtn);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randBtn);
};

function btnPress(){
    console.log(this);
    let btn = this;
    userFlash(btn);

    userColor=btn.getAttribute("id");
    console.log(userColor);
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}

let allBtns=document.querySelectorAll(".btn");
for (btn of allBtns){
    btn.addEventListener("click",btnPress);
}


function checkAns(idx){
    //console.log("curr level : ",level);
    
    if(userSeq[idx]===gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }else{
        h2.innerHTML=`Game Over! Your score was <b>${level}</b><br> Press any key to start.`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150)
        reset();
    }
}

function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}
