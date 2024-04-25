let botoes = document.querySelectorAll(".botoes button")
botoes.forEach(botao => {
    botao.addEventListener("click", guardarNota)
})

function guardarNota(Event) {
   let nota = Event.target.innerText

   localStorage.setItem("nota", nota)
}