let q5_errado1 = document.getElementById('q5_errado1')
let q5_errado2 = document.getElementById('q5_errado2')
let q5_errado3 = document.getElementById('q5_errado3')
let q5_certo = document.getElementById('q5_certo')



q5_errado1.addEventListener('click', ()=>{

    q5_errado1.classList.add('animate__shakeX')
    playErrada.play()
    setTimeout(() => {
        q5_errado1.classList.remove('animate__shakeX')
    }, 2000);
})


q5_errado2.addEventListener('click', ()=>{
    playErrada.play()

    q5_errado2.classList.add('animate__shakeX')
    setTimeout(() => {
        q5_errado2.classList.remove('animate__shakeX')
    }, 2000);
})


q5_errado3.addEventListener('click', ()=>{

    playErrada.play()
    q5_errado3.classList.add('animate__shakeX')
    setTimeout(() => {
        q5_errado3.classList.remove('animate__shakeX')
    }, 2000);
})


q5_certo.addEventListener('click', ()=>{

    q6.style.display = 'block'

    playCerta.play()

    q5_certo.classList.add('animate__flash')
    
    setTimeout(() => {

        q5.classList.add('animate__backOutDown')       


    }, 2000);

    setTimeout(() => {
        q6.classList.add('animate__backInUp')
        q5.style.display = 'none'
    }, 1000);
})
