
document.getElementById("cus").addEventListener("mouseover",function(){
    this.innerHTML=`Hui`
    
   
});
document.getElementById("cus").addEventListener("mouseover",function(){
    var style = document.createElement('style');
    style.innerHTML = `
    #cus{
        background-image: url("https://static.helpjuice.com/helpjuice_production/uploads/upload/image/4752/direct/1585157958423-Customer%20Support.png");
        opacity:0.8;
    }
    `;
    document.head.appendChild(style);
    
   
});