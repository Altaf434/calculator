var value1;
var value2;
var operator="!";
var a="";
for(var i=0;i<document.querySelectorAll("#id2").length;i++)
{
    document.querySelectorAll("#id2")[i].addEventListener("click",function(){
        
        this.style.backgroundColor="#5FBDFF";
        setTimeout(() => {
            this.style.backgroundColor="#96EFFF";
            
        }, "100");
         func(this.textContent);
         
    });
}

    document.addEventListener("keypress",function(event){
    
        
          func(event.key);
          
          
    });

function func(s)
{
    switch(s)
    {    case '0':
              document.querySelector("#id1").textContent=document.querySelector("#id1").textContent+"0";
              document.querySelectorAll("#id2")[12].style.backgroundColor="#5FBDFF";
            setTimeout(() => {
                document.querySelectorAll("#id2")[12].style.backgroundColor="#96EFFF";
                
            }, "100");
               break;
        case '1':
             document.querySelector("#id1").textContent=document.querySelector("#id1").textContent+"1";
             document.querySelectorAll("#id2")[0].style.backgroundColor="#5FBDFF";
            setTimeout(() => {
                document.querySelectorAll("#id2")[0].style.backgroundColor="#96EFFF";
                
            }, "100");
             break;
        case '2':
             document.querySelector("#id1").textContent=document.querySelector("#id1").textContent+"2";
             document.querySelectorAll("#id2")[1].style.backgroundColor="#5FBDFF";
            setTimeout(() => {
                document.querySelectorAll("#id2")[1].style.backgroundColor="#96EFFF";
                
            }, "100");
             break;
        case '3':
             document.querySelector("#id1").textContent=document.querySelector("#id1").textContent+"3";
             document.querySelectorAll("#id2")[2].style.backgroundColor="#5FBDFF";
            setTimeout(() => {
                document.querySelectorAll("#id2")[2].style.backgroundColor="#96EFFF";
                
            }, "100");
             break;
           
        case '4':
             document.querySelector("#id1").textContent=document.querySelector("#id1").textContent+"4";
             document.querySelectorAll("#id2")[4].style.backgroundColor="#5FBDFF";
            setTimeout(() => {
                document.querySelectorAll("#id2")[4].style.backgroundColor="#96EFFF";
                
            }, "100");
             break;
        case '5':
                document.querySelector("#id1").textContent=document.querySelector("#id1").textContent+"5";
                document.querySelectorAll("#id2")[5].style.backgroundColor="#5FBDFF";
            setTimeout(() => {
                document.querySelectorAll("#id2")[5].style.backgroundColor="#96EFFF";
                
            }, "100");
                break;
        case '6':
                document.querySelector("#id1").textContent=document.querySelector("#id1").textContent+"6";
                document.querySelectorAll("#id2")[6].style.backgroundColor="#5FBDFF";
            setTimeout(() => {
                document.querySelectorAll("#id2")[6].style.backgroundColor="#96EFFF";
                
            }, "100");
                break;
        case '7':
                document.querySelector("#id1").textContent=document.querySelector("#id1").textContent+"7";
                document.querySelectorAll("#id2")[8].style.backgroundColor="#5FBDFF";
            setTimeout(() => {
                document.querySelectorAll("#id2")[8].style.backgroundColor="#96EFFF";
                
            }, "100");
                break;
              
        case '8':
                document.querySelector("#id1").textContent=document.querySelector("#id1").textContent+"8";
                document.querySelectorAll("#id2")[9].style.backgroundColor="#5FBDFF";
            setTimeout(() => {
                document.querySelectorAll("#id2")[9].style.backgroundColor="#96EFFF";
                
            }, "100");
                break;
        case '9':
                    document.querySelector("#id1").textContent=document.querySelector("#id1").textContent+"9";
                    document.querySelectorAll("#id2")[10].style.backgroundColor="#5FBDFF";
            setTimeout(() => {
                document.querySelectorAll("#id2")[10].style.backgroundColor="#96EFFF";
                
            }, "100");
                    break;
                        
        case '+':

        value1=parseInt(document.querySelector("#id1").textContent,10);
        document.querySelector("#id1").textContent="";
        operator="+";
        document.querySelectorAll("#id2")[3].style.backgroundColor="#5FBDFF";
            setTimeout(() => {
                document.querySelectorAll("#id2")[3].style.backgroundColor="#96EFFF";
                
            }, "100");
        break;

        
        case '*':
            value1=parseInt(document.querySelector("#id1").textContent,10);
            document.querySelector("#id1").textContent="";
            operator="*";
            document.querySelectorAll("#id2")[11].style.backgroundColor="#5FBDFF";
            setTimeout(() => {
                document.querySelectorAll("#id2")[11].style.backgroundColor="#96EFFF";
                
            }, "100");
            break;
    
        
        case '/':
            value1=parseInt(document.querySelector("#id1").textContent,10);
        document.querySelector("#id1").textContent="";
        operator="/";
        document.querySelectorAll("#id2")[15].style.backgroundColor="#5FBDFF";
            setTimeout(() => {
                document.querySelectorAll("#id2")[15].style.backgroundColor="#96EFFF";
                
            }, "100");
        break;
        
        case '-':
            value1=parseInt(document.querySelector("#id1").textContent,10);
        document.querySelector("#id1").textContent="";
        operator="-";
        document.querySelectorAll("#id2")[7].style.backgroundColor="#5FBDFF";
            setTimeout(() => {
                document.querySelectorAll("#id2")[7].style.backgroundColor="#96EFFF";
                
            }, "100");
        break;

        case '=':
            document.querySelectorAll("#id2")[14].style.backgroundColor="#5FBDFF";
            setTimeout(() => {
                document.querySelectorAll("#id2")[14].style.backgroundColor="#96EFFF";
                
            }, "100");
            value2=parseInt(document.querySelector("#id1").textContent,10);
            switch(operator)
            {
                case "+":
                    document.querySelector("#id1").textContent=value1+value2;
                    break;
                case "-":
                    document.querySelector("#id1").textContent=value1-value2;
                    break;
                case "*":
                    document.querySelector("#id1").textContent=value1*value2;
                    break;
                case "/":
                     document.querySelector("#id1").textContent=value1/value2;
                     break;
                default:
                    document.querySelector("#id1").textContent=value1;
                    break;            
            }
            break;
       default:
        if(s=="clr")
        {
        document.querySelector("#id1").textContent="";
        operator='!';
        document.querySelectorAll("#id2")[13].style.backgroundColor="#5FBDFF";
            setTimeout(() => {
                document.querySelectorAll("#id2")[13].style.backgroundColor="#96EFFF";
                
            }, "100");
        }
        break;
    }
}
