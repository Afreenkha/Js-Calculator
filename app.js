function getNum (num){
    
    var ele = document.getElementById("result");
    result.value += num;
}

function clearResult ()
{
    var ele = document.getElementById("result");
    result.value = "";

}

function getResult()
{
    var ele = document.getElementById("result");
    result.value = eval (ele.value);
}