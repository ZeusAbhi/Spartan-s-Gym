document.getElementById("fb").addEventListener("click",function(){
    window.open('https://www.facebook.com/abhinav.tushar.3/', '_blank')
})
document.getElementById("fb").addEventListener("mouseover",function(){
    var style = document.createElement('style');
    style.innerHTML = `
    #fb{
        cursor:pointer;
    }
    `;
    document.head.appendChild(style);
    
   
});
document.getElementById("in").addEventListener("click",function(){
    window.open('https://www.instagram.com/abhinav_tushar/', '_blank')
})
document.getElementById("in").addEventListener("mouseover",function(){
    var style = document.createElement('style');
    style.innerHTML = `
    #in{
        cursor:pointer;
    }
    `;
    document.head.appendChild(style);
    
   
});
document.getElementById("li").addEventListener("click",function(){
    window.open('https://www.linkedin.com/in/abhinav-tushar-36149521b/', '_blank')
})
document.getElementById("li").addEventListener("mouseover",function(){
    var style = document.createElement('style');
    style.innerHTML = `
    #li{
        cursor:pointer;
    }
    `;
    document.head.appendChild(style);
    
   
});