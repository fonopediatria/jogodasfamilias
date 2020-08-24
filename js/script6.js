let q6_errado1 = document.getElementById('q6_errado1')
let q6_errado2 = document.getElementById('q6_errado2')
let q6_errado3 = document.getElementById('q6_errado3')
let q6_certo = document.getElementById('q6_certo')



q6_errado1.addEventListener('click', ()=>{

    q6_errado1.classList.add('animate__shakeX')
    playErrada.play()
    setTimeout(() => {
        q6_errado1.classList.remove('animate__shakeX')
    }, 2000);
})


q6_errado2.addEventListener('click', ()=>{
    playErrada.play()

    q6_errado2.classList.add('animate__shakeX')
    setTimeout(() => {
        q6_errado2.classList.remove('animate__shakeX')
    }, 2000);
})


q6_errado3.addEventListener('click', ()=>{

    playErrada.play()
    q6_errado3.classList.add('animate__shakeX')
    setTimeout(() => {
        q6_errado3.classList.remove('animate__shakeX')
    }, 2000);
})


q6_certo.addEventListener('click', ()=>{

    q7.style.display = 'block'

    playCerta.play()

    q6_certo.classList.add('animate__flash')
    
    setTimeout(() => {

        q6.classList.add('animate__backOutDown')       


    }, 2000);

    setTimeout(() => {
        q7.classList.add('animate__backInUp')
        q6.style.display = 'none'
    }, 1000);
})
