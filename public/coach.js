console.log("billu");

document.getElementById("arno").addEventListener("click",function(){
    window.open('https://en.wikipedia.org/wiki/Arnold_Schwarzenegger', '_blank')
   
});

document.getElementById("arno").addEventListener("mouseover",function(){
    var style = document.createElement('style');
    style.innerHTML = `
    #arno{
        cursor:pointer;
    }
    `;
    document.head.appendChild(style);
    
   
});
document.getElementById("ron").addEventListener("click",function(){
    window.open('https://en.wikipedia.org/wiki/Ronnie_Coleman', '_blank')
   
});

document.getElementById("ron").addEventListener("mouseover",function(){
    var style = document.createElement('style');
    style.innerHTML = `
    #ron{
        cursor:pointer;
    }
    `;
    document.head.appendChild(style);
    
   
});
document.getElementById("bum").addEventListener("click",function(){
    window.open('https://en.wikipedia.org/wiki/Chris_Bumstead', '_blank')
   
});

document.getElementById("bum").addEventListener("mouseover",function(){
    var style = document.createElement('style');
    style.innerHTML = `
    #bum{
        cursor:pointer;
    }
    `;
    document.head.appendChild(style);
    
   
});

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


 
