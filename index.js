const item = document.querySelector('.item')
const placeholders = document.querySelectorAll('.placeholder')

const dragStart = (event) => {
    event.target.classList.add('hold')
    setTimeout(() => event.target.classList.add('hide'), 0)

}

const dragEnd = (event) => {
    event.target.className = 'item'
}

const dragOver = (event) => {
    event.preventDefault()
}
const dragEnter = (event) => {
    event.target.classList.add('hovered')
}
const dragLeave = (event) => {
    event.target.classList.remove('hovered')
}
const drop = (event) => {
    event.target.append(item)
    event.target.classList.remove('hovered')
}

placeholders.forEach(item => {
    item.addEventListener('dragover', dragOver)
    item.addEventListener('dragenter', dragEnter)
    item.addEventListener('dragleave', dragLeave)
    item.addEventListener('drop', drop)
})

item.addEventListener('dragstart', dragStart)
item.addEventListener('dragend', dragEnd)





