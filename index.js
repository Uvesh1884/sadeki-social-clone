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
            document.querySelector('.pop-up').style.transition = "all 400ms ease";
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
            msg.style.transition = "all 400ms ease"
            document.querySelector('.msg-count').style.display = "none";
    }
    else{
        msg.style.boxShadow = "0px 0px 0px";
    }
   })
})

menuItems.forEach(item=>{
item.addEventListener('click',()=>{
    if (item.id === "theme-menu")  {
        document.querySelector(".customize-themes").style.display = "Block";
    }
    else{
        document.querySelector(".customize-themes").style.display = "none";
    }
})
})

document.querySelector("#close-btn").addEventListener("click",()=>{
    document.querySelector(".customize-themes").style.display = "none";
})
