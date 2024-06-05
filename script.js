let input = document.querySelector("#inputBox");
let buttons = document.querySelectorAll("button");

let string = " ";
let buttonArray = Array.from(buttons);
buttonArray.forEach(function(btn){

    btn.addEventListener("click",(event)=>{
        if(event.target.innerHTML == "DEL")
        {
            string = string.substring(0,string.length-1);
            input.value = string;
        }
        else if(event.target.innerHTML == "C")
        {
            string = " ";
            input.value = string;
        }
        else if(event.target.innerHTML == "=")
        {
            // eval => string ko number mein convert karta hai fir vho code ko calculate karta hai. 
            string = eval(string);
            input.value = string;
        }
        else 
        {
            string += event.target.innerHTML;
            input.value = string;

        }

        
    })
})


