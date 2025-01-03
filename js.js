let boxes = document.querySelectorAll(".box");
let resetbtn=document.querySelector(".reset");
let msg=document.querySelector("#msg");
let newgamr=document.querySelector("#new-game");
let winner=document.querySelector(".winner");

let turn0 = true;


const winning = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]



boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        console.log("Box was Clickeds");
        if(turn0){
            box.innerText="O";
            turn0=false;
        }
        else{
            box.innerText="X";
            turn0=true;
        }
        box.disabled=true;
        checkwinner();
    })
});


const showwinner=(win)=>{
    msg.innerText = `Congratulations, Winner is ${win}`;
    winner.classList.remove("hide");
    disbox();
}


const checkwinner=()=>{
    for(let pattern of winning){
        // console.log(pattern[0],pattern[1],pattern[2]);
        // console.log(boxes[pattern[0]],boxes[pattern[1]],boxes[pattern[2]]);
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;

        if(pos1!="" && pos2!="" && pos3!=""){
            if(pos1===pos2 && pos2===pos3){
                console.log("Winner is Find",pos2);
                showwinner(pos2);
            }
        };
    }
}


const disbox=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}

const enabox=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}


const rst=()=>{
    turn0=true;
    enabox();
    winner.classList.add("hide");
}

newgamr.addEventListener("click",rst);
resetbtn.addEventListener("click",rst);