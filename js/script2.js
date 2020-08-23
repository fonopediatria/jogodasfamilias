let q2_errado1 = document.getElementById('q2_errado1')
let q2_errado2 = document.getElementById('q2_errado2')
let q2_errado3 = document.getElementById('q2_errado3')
let q2_certo = document.getElementById('q2_certo')



q2_errado1.addEventListener('click', ()=>{

    q2_errado1.classList.add('animate__shakeX')
    playErrada.play()
    setTimeout(() => {
        q2_errado1.classList.remove('animate__shakeX')
    }, 2000);
})


q2_errado2.addEventListener('click', ()=>{
    playErrada.play()

    q2_errado2.classList.add('animate__shakeX')
    setTimeout(() => {
        q2_errado2.classList.remove('animate__shakeX')
    }, 2000);
})


q2_errado3.addEventListener('click', ()=>{

    playErrada.play()
    q2_errado3.classList.add('animate__shakeX')
    setTimeout(() => {
        q2_errado3.classList.remove('animate__shakeX')
    }, 2000);
})


q2_certo.addEventListener('click', ()=>{

    q3.style.display = 'block'

    playCerta.play()

    q2_certo.classList.add('animate__flash')
    
    setTimeout(() => {

        q2.classList.add('animate__backOutDown')       


    }, 2000);

    setTimeout(() => {
        q3.classList.add('animate__backInUp')
        q2.style.display = 'none'
    }, 1000);
})
