let errado1 = document.getElementById('errado1')
let errado2 = document.getElementById('errado2')
let errado3 = document.getElementById('errado3')
let certo = document.getElementById('certo')
let playCerta = document.getElementById('playCerta')
let playErrada = document.getElementById('playErrada')
let q1 = document.getElementById('q1')
let q2 = document.getElementById('q2')
let q3 = document.getElementById('q3')
let q4 = document.getElementById('q4')
let q5 = document.getElementById('q5')
let q6 = document.getElementById('q6')



errado1.addEventListener('click', ()=>{

    errado1.classList.add('animate__shakeX')
    playErrada.play()
    setTimeout(() => {
        errado1.classList.remove('animate__shakeX')
    }, 2000);
})


errado2.addEventListener('click', ()=>{
    playErrada.play()

    errado2.classList.add('animate__shakeX')
    setTimeout(() => {
        errado2.classList.remove('animate__shakeX')
    }, 2000);
})


errado3.addEventListener('click', ()=>{

    playErrada.play()
    errado3.classList.add('animate__shakeX')
    setTimeout(() => {
        errado3.classList.remove('animate__shakeX')
    }, 2000);
})


certo.addEventListener('click', ()=>{

    q2.style.display = 'block'

    playCerta.play()

    certo.classList.add('animate__flash')
    
    setTimeout(() => {

        q1.classList.add('animate__backOutDown')       


    }, 2000);

    setTimeout(() => {
        q2.classList.add('animate__backInUp')
        q1.style.display = 'none'
    }, 1000);
})
