let q10_errado1 = document.getElementById('q10_errado1')
let q10_errado2 = document.getElementById('q10_errado2')
let q10_errado3 = document.getElementById('q10_errado3')
let q10_certo = document.getElementById('q10_certo')
let win = document.getElementById('win')
let titulo = document.getElementById('titulo')
let vitoria = document.getElementById('vitoria')
let texto1 = document.getElementById('texto1')


q10_errado1.addEventListener('click', ()=>{

    q10_errado1.classList.add('animate__shakeX')
    playErrada.play()
    setTimeout(() => {
        q10_errado1.classList.remove('animate__shakeX')
    }, 2000);
})


q10_errado2.addEventListener('click', ()=>{
    playErrada.play()

    q10_errado2.classList.add('animate__shakeX')
    setTimeout(() => {
        q10_errado2.classList.remove('animate__shakeX')
    }, 2000);
})


q10_errado3.addEventListener('click', ()=>{

    playErrada.play()
    q10_errado3.classList.add('animate__shakeX')
    setTimeout(() => {
        q10_errado3.classList.remove('animate__shakeX')
    }, 2000);
})


q10_certo.addEventListener('click', ()=>{

    win.style.display = 'block'

    playCerta.play()

    q10_certo.classList.add('animate__flash')
    
    setTimeout(() => {

        q10.classList.add('animate__backOutDown')       


    }, 2000);

    setTimeout(() => {
        win.classList.add('animate__backInUp')
        q10.style.display = 'none'
        titulo.style.display = 'none'
        vitoria.play()
        texto1.innerHTML = "Parabéns, você venceu!!!!"
    }, 1000);
})
