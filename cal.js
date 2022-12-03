let string="";
let buttons=document.querySelectorAll(".btn");
console.log(buttons.size);
let  array=Array.from(buttons);
console.log(array.length);
for(let i=0;i<array.length;i++){
let button=array[i];
 button.addEventListener("click",(e)=>{
    if(e.target.innerHTML=='='){
    string=eval(string);
    document.getElementById('input').value=string;
    }
    else if(e.target.innerHTML=='C'){
        string="";
        document.getElementById('input').value="";
    }
    else{
        string=string+e.target.innerHTML;
        document.getElementById('input').value=string;
    }
   
 })

}