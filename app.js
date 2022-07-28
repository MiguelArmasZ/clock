const clockDOM = document.querySelector('.clock')

setInterval(() => {
  const date = new Date()
  const clock = date.toLocaleString().split(' ').at(-1)
  clockDOM.textContent = clock
}, 1000)
