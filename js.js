
let commend = "X";
let keys = document.querySelectorAll(".type");
let nav = document.querySelector(".nav");
let gameIsWon = false;

function name(num1 , num2 , num3) {
    nav.innerHTML = `${keys[num1].innerHTML} winner.` ;
    keys[num1].style.background = `#000`;
    keys[num2].style.background = `#000`;
    keys[num3].style.background = `#000`;
    setInterval(function name() {
        nav.innerHTML += '.';
    },900)
    setTimeout(function name() {
        location.reload()
    },3000)
   

}




function test() {

    if (keys[0].innerHTML === keys[1].innerHTML && keys[1].innerHTML === keys[2].innerHTML && keys[2].innerHTML != "") {
        name(0,1,2);
    }
    if (keys[3].innerHTML === keys[4].innerHTML && keys[4].innerHTML === keys[5].innerHTML && keys[5].innerHTML != "") {
        name(3,4,5);
    }
    if (keys[6].innerHTML === keys[7].innerHTML && keys[7].innerHTML === keys[8].innerHTML && keys[8].innerHTML != "") {
        name(6,7,8);
    }
    if (keys[0].innerHTML === keys[4].innerHTML && keys[4].innerHTML === keys[8].innerHTML && keys[8].innerHTML != "") {
        name(0,4,8);
    }
    if (keys[6].innerHTML === keys[4].innerHTML && keys[4].innerHTML === keys[2].innerHTML && keys[2].innerHTML != "") {
        name(6,4,2);
    }
    if (keys[1].innerHTML === keys[4].innerHTML && keys[4].innerHTML === keys[7].innerHTML && keys[7].innerHTML != "") {
        name(1,4,7);
    }
    if (keys[2].innerHTML === keys[5].innerHTML && keys[5].innerHTML === keys[8].innerHTML && keys[8].innerHTML != "") {
        name(2,5,8);
    }
    if (keys[0].innerHTML === keys[3].innerHTML && keys[3].innerHTML === keys[6].innerHTML && keys[6].innerHTML != "") {
        name(0,3,6);
    }

  
}



function game(id) {

    // console.log(keys);
    keys.forEach(key => {
        if (key.innerHTML === "" && commend === "X") {
            if (id === key.id) {
                key.innerHTML = "X";
                commend = "O";
                nav.innerHTML = "O";
               
            }
            
        } else if (key.innerHTML === "" && commend === "O") {
            if (id === key.id) {
                key.innerHTML = "O";
                commend = "X";
                nav.innerHTML = "X";
                
            }
           
        }

       
    });

    test();
 
}