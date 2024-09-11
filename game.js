let boxes = document.querySelectorAll(".box");
let resetbtn = document.getElementById("rest");
let newbtn = document.querySelector("#new");
let msgcon = document.querySelector(".msg-con");
let msg1 = document.getElementsByTagName("h2");


let turno = true;

const winpatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],

];
const resetGame= () =>{
    turno= true;
   enableBoxes();
    msgcon.classList.add("hide");
    
};

boxes.forEach((boxx)=>{
    boxx.addEventListener("click", ()=>{
        if(turno){
            boxx.innerText= "O";
            turno= false;
        }
        else{
            boxx.innerText = "X";
            turno=true;
        }
        boxx.disabled= true;
        checkwinner();

    });
});


    
 

const disableBoxes = ()=>{
    for(let box of boxes){
        box.disabled= true;
    }
};

const enableBoxes = ()=>{
    for(let box of boxes){
        box.disabled= false;
        box.innerText = "";
    }
};

const showwinner = (winner) => {
    msg1.innerText = "cograts ,winner is", winner;
      msgcon.classList.remove("hide");
      disableBoxes();
    }
 
const checkwinner = () => {
    for (let pattern of winpatterns) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if (pos1val != "" && pos2val != "" && pos3val != "") {
            if (pos1val === pos2val && pos2val === pos3val) {
                console.log("Winner", pos1val);
                showwinner(pos1val);


            }
        }
    };

};

resetbtn.addEventListener("click", resetGame);
newbtn.addEventListener("click", resetGame);




