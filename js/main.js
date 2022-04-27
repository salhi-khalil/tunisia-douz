let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let amazigh = document.getElementById('amazigh');
let mountains3 = document.getElementById('mountains3');
let mountains4 = document.getElementById('mountains4');
let river = document.getElementById('river');
let boat = document.getElementById('boat');
let douz = document.getElementById('douz');
window.onscroll = function(){
    let value = scrollY
    stars.style.left = value * 0.5 + 'px';
    moon.style.top = value * 6 + 'px';
    mountains3.style.top = value * 2 + 'px';
    amazigh.style.bottom = value * 2 +'px';
    mountains4.style.top = value * 1.5 + 'px';
    river.style.top = value + 'px';
    boat.style.top = value * 1.5 + 'px';
    boat.style.left = value * 1.5 + 'px';
    douz.style.fontSize = value + 'px';
    /*condition in fontsize of the word douz*/
    if(scrollY >= 67){
        douz.style.fontSize = 70 + 'px';
        douz.style.position = 'fixed';
        if(scrollY >= 501){
            douz.style.display= 'none';
        }else{
            douz.style.display= 'block';
        }
        if(scrollY <= 64){
            document.querySelector('.main').style.background = 'linear-gradient(#200016,#10001f)'
        }else{
            document.querySelector('.main').style.background = 'linear-gradient(#2b9faf,#163aff)'
        }
    }
}