const menuItems = document.querySelectorAll(".menu-items");
// remove active

const changeActiveItem = ()=>{
    menuItems.forEach(item =>{
        item.classList.remove('active');
    })
}


menuItems.forEach(item =>{
    item.addEventListener('click',()=>{
        changeActiveItem();
        item.classList.add('active');
        if(item.id != 'Notification'){
            document.querySelector('.pop-up').style.display = "none";
        }
        else{
            document.querySelector('.pop-up').style.display = "block";
            document.querySelector('.notify-count').style.display = "none";
        }
    })
})


// --------message------------

const msg = document.querySelector('.messages');
const shadow = document.querySelector('#shadow-box');
msg.style.boxShadow = "0px 0px 0px";
menuItems.forEach(item=>{
   item.addEventListener('click',()=>{
    if (item.id === "shadow-box") {
            msg.style.boxShadow = "-10px 10px 20px black";
    }
    else{
        msg.style.boxShadow = "0px 0px 0px";
    }
    document.querySelector('.msg-count').style.display = "none";
   })
})




// shadow.addEventListener('click',()=>{
//     if( msg.style.boxShadow === "0px 0px 0px"){
//         msg.style.boxShadow = "-10px 10px 20px black";
//     }
//     else{
//         msg.style.boxShadow = "0px 0px 0px";

//     }
   
// })