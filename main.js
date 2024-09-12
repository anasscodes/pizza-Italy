let header = document.querySelector('header');
window.addEventListener('scroll', function(){
    header.classList.toggle('sticky' , this.window.scrollY > 0)
})

// ########################
let bt = document.getElementById('bt');

window.onscroll = function(){
    if(screenY >= 400)
    {
        bt.style.display = 'inline-block';
        
    }else{
        bt.style.display = 'block';
    
    }
}

bt.onclick = function(){
    scroll({
        left:0,
        top:0,
        behavior:"smooth"
    })
}