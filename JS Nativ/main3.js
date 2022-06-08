// обработчик, handler, подписчик, слушатель -> function
// Handler будет вызван при наступлении события
// Handler будет вызван c аргументом ({})
// {} (сведения о произошедшем собитии) -> event, ev, e

const sm = document.getElementById("small")
const md = document.getElementById("medium")
const a = document.getElementById("a")

function onClickHandler(e) {
e.stopPropagation()//чтобы не кликались все родительские дивки
    alert('hello')
}

function anchorHandler(e) {
    e.preventDefault()// отменяет значение по умолчании
    alert("Не переходи")
}
// sm.onclick = onClickHandler
// sm.onclick = null

sm.addEventListener("click",onClickHandler)
// sm.removeEventListener("click",onClickHandler)
md.addEventListener("click",onClickHandler)

a.addEventListener("click",anchorHandler )