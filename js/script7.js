let q7_errado1 = document.getElementById('q7_errado1')
let q7_errado2 = document.getElementById('q7_errado2')
let q7_errado3 = document.getElementById('q7_errado3')
let q7_certo = document.getElementById('q7_certo')



q7_errado1.addEventListener('click', ()=>{

    q7_errado1.classList.add('animate__shakeX')
    playErrada.play()
    setTimeout(() => {
        q7_errado1.classList.remove('animate__shakeX')
    }, 2000);
})


q7_errado2.addEventListener('click', ()=>{
    playErrada.play()

    q7_errado2.classList.add('animate__shakeX')
    setTimeout(() => {
        q7_errado2.classList.remove('animate__shakeX')
    }, 2000);
})


q7_errado3.addEventListener('click', ()=>{

    playErrada.play()
    q7_errado3.classList.add('animate__shakeX')
    setTimeout(() => {
        q7_errado3.classList.remove('animate__shakeX')
    }, 2000);
})


q7_certo.addEventListener('click', ()=>{

    q8.style.display = 'block'

    playCerta.play()

    q7_certo.classList.add('animate__flash')
    
    setTimeout(() => {

        q7.classList.add('animate__backOutDown')       


    }, 2000);

    setTimeout(() => {
        q8.classList.add('animate__backInUp')
        q7.style.display = 'none'
    }, 1000);
})
