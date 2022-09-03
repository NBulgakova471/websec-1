
function whenButtonClicked(){

    let selectAction = document.getElementById("select");
    console.log(selectAction.value)
    
    let value1 = document.getElementById("input1").value;
    let value2 = document.getElementById("input2").value;
    
    var result;
    switch (selectAction.value){
        case '1':
        result = parseFloat(value1) + parseFloat(value2);
        break;
        case '2':
        result = parseFloat(value1) - parseFloat(value2);
        break;
        case '3':
        result = parseFloat(value1) * parseFloat(value2);
        break;
        case '4':
        result = parseFloat(value1) / parseFloat(value2);
        break;


    }

    console.log(value1,value2);
    document.getElementById("results").innerText = result;
    
}