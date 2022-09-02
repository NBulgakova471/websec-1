
function whenButtonClicked(){


    let value1 = document.getElementById("input1").value;
    let value2 = document.getElementById("input2").value;
    let selectAction = document.getElementById("select").value;
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

    document.getElementById("results").innerText = result;
    console.log(value1,value2);
}