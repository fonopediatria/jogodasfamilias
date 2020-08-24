let q8_errado1 = document.getElementById('q8_errado1')
let q8_errado2 = document.getElementById('q8_errado2')
let q8_errado3 = document.getElementById('q8_errado3')
let q8_certo = document.getElementById('q8_certo')



q8_errado1.addEventListener('click', ()=>{

    q8_errado1.classList.add('animate__shakeX')
    playErrada.play()
    setTimeout(() => {
        q8_errado1.classList.remove('animate__shakeX')
    }, 2000);
})


q8_errado2.addEventListener('click', ()=>{
    playErrada.play()

    q8_errado2.classList.add('animate__shakeX')
    setTimeout(() => {
        q8_errado2.classList.remove('animate__shakeX')
    }, 2000);
})


q8_errado3.addEventListener('click', ()=>{

    playErrada.play()
    q8_errado3.classList.add('animate__shakeX')
    setTimeout(() => {
        q8_errado3.classList.remove('animate__shakeX')
    }, 2000);
})


q8_certo.addEventListener('click', ()=>{

    q9.style.display = 'block'

    playCerta.play()

    q8_certo.classList.add('animate__flash')
    
    setTimeout(() => {

        q8.classList.add('animate__backOutDown')       


    }, 2000);

    setTimeout(() => {
        q9.classList.add('animate__backInUp')
        q8.style.display = 'none'
    }, 1000);
})
