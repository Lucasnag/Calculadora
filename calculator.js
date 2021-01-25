
    document.querySelector('#calcular').addEventListener("click", () => {
        const n1 = parseInt(document.querySelector('#n1').value);
        const n2 = parseInt(document.querySelector('#n2').value);
        const op = document.querySelector('#op').value;
        let R;
        if (op == "+" ){
            R = n1 + n2; 
        } else if (op == "+" ){
            R = n1 - n2;
        }   else if (op == "*" ){
            R = n1 * n2;
        } else if (op == "/") {
            R = n1 / n2;
        }
        console.log(R)
        ;
    }); 