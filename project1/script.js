const inputBox = document.querySelectorAll('.check-circle');

inputBox.forEach((checked)=>{
    checked.addEventListener('click',()=>{
        checked.classList.toggle("completed");
    })

})