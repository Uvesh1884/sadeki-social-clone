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