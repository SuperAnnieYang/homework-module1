/*RANDOM CODES*/
//Function to generate combination of characters
    var code = '';//initialize to null value
    var getCode = '';
    var btnvalue;
    var str = 'ABCDEFGHYJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$';
function generateCode(){
    //Create variables to store generated codes and the type of characters we want to show as codes
    //Generate character multiple times using a loop
    for (i=1; i<=8; i++){
        var char =  Math.random()* str.length;//random select a character fron the vari;
        code += str.charAt(char);//accumulate the generated character into a string of 8;
    }
    return code;//return the final accumulated string when loop ends;
}
//Get HTML element to display
document.getElementById("codes").innerHTML = generateCode();

function disableButton(btnvalue){
    document.getElementById("submit").disabled = btnvalue;
    if (btnvalue == true){//test if button is disabled or enabled
        //set button and label color translucent
        document.getElementById("submit").style.backgroundColor  = "rgba(73,119,209,0.3)";
        document.getElementById("submit").style.color = "rgba(255,255,255,0.5)";
    } else {
        //set button and label color with no transparenccy
        document.getElementById("submit").style.backgroundColor = "rgba(73,119,209,1)";
        document.getElementById("submit").style.color = "rgba(255,255,255,1)";
    }
}


var codebox = document.getElementById("codeentered");
codebox.addEventListener("input", evaluateCode);

function evaluateCode(){
    getCode = document.getElementById("codeentered").value;
    var charset1 = getCode.trim();
    var charset2 = code.trim();
    if (charset1.length == charset2.length && charset1 == charset2){
        disableButton(false);
    }
}

disableButton();