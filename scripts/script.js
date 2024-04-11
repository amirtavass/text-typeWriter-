let i=0;
function Write(text,id){
    
    let out=document.querySelector(id);

       
      
        
        if(i<text.length){
            out.innerHTML+=text[i++];
        setTimeout(function(){
            Write(text,id)
        }, 600);
        
   
}
}
