let q4_errado1 = document.getElementById('q4_errado1')
let q4_errado2 = document.getElementById('q4_errado2')
let q4_errado3 = document.getElementById('q4_errado3')
let q4_certo = document.getElementById('q4_certo')



q4_errado1.addEventListener('click', ()=>{

    q4_errado1.classList.add('animate__shakeX')
    playErrada.play()
    setTimeout(() => {
        q4_errado1.classList.remove('animate__shakeX')
    }, 2000);
})


q4_errado2.addEventListener('click', ()=>{
    playErrada.play()

    q4_errado2.classList.add('animate__shakeX')
    setTimeout(() => {
        q4_errado2.classList.remove('animate__shakeX')
    }, 2000);
})


q4_errado3.addEventListener('click', ()=>{

    playErrada.play()
    q4_errado3.classList.add('animate__shakeX')
    setTimeout(() => {
        q4_errado3.classList.remove('animate__shakeX')
    }, 2000);
})


q4_certo.addEventListener('click', ()=>{

    q5.style.display = 'block'

    playCerta.play()

    q4_certo.classList.add('animate__flash')
    
    setTimeout(() => {

        q4.classList.add('animate__backOutDown')       


    }, 2000);

    setTimeout(() => {
        q5.classList.add('animate__backInUp')
        q4.style.display = 'none'
    }, 1000);
})
