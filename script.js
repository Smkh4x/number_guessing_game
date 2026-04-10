let RandomNumber;
let limit = 10;

let userNum;
function main(){

    if(RandomNumber === userNum){
        document.getElementById('result').innerHTML = "<h2>You win!</h2>";
    } else if (userNum < RandomNumber){
        document.getElementById('result').innerHTML = "<h2>ra9m dialk s4ar!</h2>";
    } else if (userNum > RandomNumber){
        document.getElementById('result').innerHTML = "<h2>ra9m dialk kbar!</h2>";
    }
}

function GenerateRandomNumber(){
    RandomNumber = Math.floor(Math.random() * 100);
    document.getElementById(`title-button-1`).innerHTML = "db rak generateti number bda tkhman";
}

function CheckNumber(){
    userNum = Number(document.getElementById("number-input").value);
    main()

}