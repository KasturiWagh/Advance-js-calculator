let screen = document.getElementById('screen');
let screen2 = document.getElementById('screen2');
buttons = document.querySelectorAll('button');
let screenValue = '';
for (item of buttons) {
    item.addEventListener('click', (e) =>{
        buttonText = e.target.innerText;
        

        if (buttonText == 'Clear') {
            screen.value = '';      
        }

        else if(buttonText == '='){
            screenValue = screen.value;
            screen.value = eval(screenValue); 
            screen2.value = screenValue + " = ";   
        }


        else if(buttonText == '~'){
            screenValue = screen.value;
            let myarr = screenValue.split("");
            console.log(myarr);
            let ee = '';
            for (let i = 0; i < myarr.length-1; i++) {
                const element = myarr[i];
                // console.log(element);
                ee = ee + element;
                // screen.value = ee;
                // console.log(ee);   
            }
            screen.value = ee; 
    
        }

        else if(buttonText == 'X'){
            buttonText = '*';
            screen.value += buttonText;
        }

        else if(buttonText == 'π'){
            buttonText = Math.PI;
            screen.value += buttonText;
        }

        else if(buttonText == 'ln'){
            buttonText = screen.value;
            screen.value = Math.log(buttonText);
        }

        else if(buttonText == 'log10'){
            buttonText = screen.value;
            screen.value = Math.log10(buttonText);
        }

        else if(buttonText == '√'){
            buttonText = screen.value;
            screen.value = Math.sqrt(buttonText);
        }

        else if(buttonText == 'x^2'){
            buttonText = screen.value;
            screen.value = Math.pow(buttonText,2);
        }

        else if(buttonText == 'sin'){
            buttonText =  screen.value;
            screen.value = Math.sin(buttonText);
        }

        else if(buttonText == 'cos'){
            buttonText = screen.value;
            screen.value = Math.cos(buttonText);
        }

        else if(buttonText == 'tan'){
            buttonText = screen.value;
            screen.value = Math.tan(buttonText);

        }

        else if(buttonText == '!'){
            buttonText = screen.value;
            let ans = 1;
            if(buttonText == 0 || buttonText == 1){
                screen.value = 1;
            }
            else{
                for (let i = buttonText; i >= 1; i--) {
                   ans =  ans *i;      
                }
                screen.value = ans;
            }
        }

        else{
            screen.value += buttonText;
        }
      
    });
 
}

