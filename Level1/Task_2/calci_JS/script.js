let display = document.getElementById("display");
let buttons = document.querySelectorAll(".btn");

let expression ="";

buttons.forEach((button)=>{
    button.addEventListener("click",function(){
      let value = button.value;

      if(value==="CLR"){
        expression="";
        display.textContent=expression;
      }else if(value==="DEL"){
        expression=expression.slice(0,expression.length - 1);
        display.textContent=expression;
      }else if(value==="="){
        try{
            expression=eval(expression).toString();
            display.textContent=expression;
        }
        catch{
              display.textContent="Error";
              expression="";
        }
      }else{
        expression+=value;
         display.textContent=expression;
      }


      
    })
    

})
