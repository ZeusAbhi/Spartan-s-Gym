console.log("billu");

document.getElementById("arno").addEventListener("mouseover",function(){
    this.innerHTML=``
    
   
});
document.getElementById("arno").addEventListener("mouseover",function(){
    var style = document.createElement('style');
    style.innerHTML = `
    #arno{
    }
    `;
    document.head.appendChild(style);
    
   
});
document.getElementById("arno").addEventListener("mouseout",function(){
    this.innerHTML="";
});
document.getElementById("arno").addEventListener("mouseout",function(){
    var style = document.createElement('style');
    style.innerHTML = `
    #arno{
        
    }
  
    `;
    document.head.appendChild(style);
    
   
});



 
