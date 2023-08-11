/* Referências: https://www.youtube.com/watch?v=NWbTGAGs0D0 e https://www.youtube.com/watch?v=QCnZbK7vzSQ&t=496s*/

const imageSpace = document.querySelectorAll(".container-soltar")
const bonecos = document.querySelectorAll("#boneco")

bonecos.forEach(boneco => {
    boneco.addEventListener('dragstart', dragStart)
})

imageSpace.forEach(box => {
    box.addEventListener('dragover', dragover)
    box.addEventListener('drop', dropImage)
    box.addEventListener('dragenter', dragenter)
    box.addEventListener('dragleave', dragleave)
})

let beingDragged

function dragStart(e){
    beingDragged = e.target
}

function dragover(e){
    e.preventDefault()
}

function dropImage(e){
    e.target.append(beingDragged)
}

function dragenter(e){
    e.target.classList.add('hover')
}

function dragleave(e){
    e.target.classList.remove('hover')
}