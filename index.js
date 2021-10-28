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

        else{
            screen.value += buttonText;
        }
      
    });
 
}

