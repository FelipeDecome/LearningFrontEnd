const buttons = document.querySelectorAll("button")

buttons.forEach(button => {
  button.addEventListener("click", click)
})

function click() {
  let active = document.querySelector(".active")
  let button = document.querySelector(".active button")
  let nextId = button.getAttribute("data-target")
  let next = document.querySelector(nextId)

  console.log(active, button, nextId, next)
  togCl(active, "fade", "active")
  togCl(next, "active", "fade")
}


function togCl(el, add = null, rem = null) {
  if (add) {
    el.classList.add(add)
  }

  if (rem) {
    el.classList.remove(rem)
  }
}
