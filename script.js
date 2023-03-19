function clock(){
    let hours= document.querySelector(".hr");
    let minutes= document.querySelector(".min");
    let seconds= document.querySelector(".sec");
    let ampm= document.querySelector(".ampm");

    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();

    if ( h > 12 ){
        h = h - 12;
    }
    h= (h<10)? "0"+ h : h;
    m= (m<10)? "0"+ m : m;
    s= (s<10)? "0"+ s : s;

    hours.innerHTML = h;
    minutes.innerHTML = m;
    seconds.innerHTML = s;
    ampm.innerHTML = ap;
};
setInterval(clock,1000);