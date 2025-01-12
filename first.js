const userInput = document.querySelector('.card') ;
let result = document.querySelector('.result') ;

userInput.addEventListener('click' , (event)=>{

    const element = event.target.classList[0] ;

    if(element === '=')
    {
        
        if(Number(result.value) != 0)
        {
            let num = eval(result.value) ; 
            result.value = num ;
        }  
        else 
        result.value = 'Enter Operands' ;
    }
    else if(element === 'AC')
    {
        result.value = '' ;
    }
    else if(element === 'DE')
    {
        result.value = result.value.toString().slice(0,-1)
    }
    else if(element === '1' || element === '2' || element === '3' || element === '4' || element === '5' || element === '6' || element === '7' || element === '8' || element === '9' || element === '0' || element === '00' || element === '+' || element === '-' || element === '*' || element === '/' || element === '.')
    result.value += element ;


})