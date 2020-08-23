let q3_errado1 = document.getElementById('q3_errado1')
let q3_errado2 = document.getElementById('q3_errado2')
let q3_errado3 = document.getElementById('q3_errado3')
let q3_certo = document.getElementById('q3_certo')



q3_errado1.addEventListener('click', ()=>{

    q3_errado1.classList.add('animate__shakeX')
    playErrada.play()
    setTimeout(() => {
        q3_errado1.classList.remove('animate__shakeX')
    }, 2000);
})


q3_errado2.addEventListener('click', ()=>{
    playErrada.play()

    q3_errado2.classList.add('animate__shakeX')
    setTimeout(() => {
        q3_errado2.classList.remove('animate__shakeX')
    }, 2000);
})


q3_errado3.addEventListener('click', ()=>{

    playErrada.play()
    q3_errado3.classList.add('animate__shakeX')
    setTimeout(() => {
        q3_errado3.classList.remove('animate__shakeX')
    }, 2000);
})


q3_certo.addEventListener('click', ()=>{

    q4.style.display = 'block'

    playCerta.play()

    q3_certo.classList.add('animate__flash')
    
    setTimeout(() => {

        q3.classList.add('animate__backOutDown')       


    }, 2000);

    setTimeout(() => {
        q4.classList.add('animate__backInUp')
        q3.style.display = 'none'
    }, 1000);
})
