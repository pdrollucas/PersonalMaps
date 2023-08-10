/* Com base no vídeo: https://www.youtube.com/watch?v=NWbTGAGs0D0 */

const imageSpace = document.querySelectorAll(".container-soltar")

imageSpace.forEach((box) => {
    box.addEventListener('dragover', dragover)
    box.addEventListener('dragleave', dragleave)
    box.addEventListener('drop', dropImage)

    function dragover(e){
        e.preventDefault()
        box.classList.add('hover')
    }
    
    function dragleave(){
        box.classList.remove('hover')
    }
    
    function dropImage(e){
        e.preventDefault()
        box.classList.remove('hover')
        const imageFile = e.dataTransfer.files[0]
        const urlImage = URL.createObjectURL(imageFile)
        const imagem = document.createElement('img')
        imagem.src = urlImage
        box.appendChild(imagem)
    }
})