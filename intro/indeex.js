const Addition = () =>{
    const input1 = parseInt(document.getElementById('input1').value);
    const input2 = parseInt(document.getElementById('input2').value);
    const result = document.getElementById('result');

    let total = input1 + input2;
    if(total) {
        result.innerHTML = total;
        // innerHTML = insert into element
    } else {
        alert("Error at addition function");
    }
};