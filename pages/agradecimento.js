function pegarnota() {
  let nota = localStorage.getItem("nota")

  let paragrafoNota = document.querySelector(".paragrafo_nota")

  paragrafoNota.innerHTML = `você seleecionou ${nota} de 5`
}

pegarnota()