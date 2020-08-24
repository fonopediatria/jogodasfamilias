let q9_errado1 = document.getElementById('q9_errado1')
let q9_errado2 = document.getElementById('q9_errado2')
let q9_errado3 = document.getElementById('q9_errado3')
let q9_certo = document.getElementById('q9_certo')



q9_errado1.addEventListener('click', ()=>{

    q9_errado1.classList.add('animate__shakeX')
    playErrada.play()
    setTimeout(() => {
        q9_errado1.classList.remove('animate__shakeX')
    }, 2000);
})


q9_errado2.addEventListener('click', ()=>{
    playErrada.play()

    q9_errado2.classList.add('animate__shakeX')
    setTimeout(() => {
        q9_errado2.classList.remove('animate__shakeX')
    }, 2000);
})


q9_errado3.addEventListener('click', ()=>{

    playErrada.play()
    q9_errado3.classList.add('animate__shakeX')
    setTimeout(() => {
        q9_errado3.classList.remove('animate__shakeX')
    }, 2000);
})


q9_certo.addEventListener('click', ()=>{

    q10.style.display = 'block'

    playCerta.play()

    q9_certo.classList.add('animate__flash')
    
    setTimeout(() => {

        q9.classList.add('animate__backOutDown')       


    }, 2000);

    setTimeout(() => {
        q10.classList.add('animate__backInUp')
        q9.style.display = 'none'
    }, 1000);
})
