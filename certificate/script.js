const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

const nameInput = document.getElementById('name')
const nrcInput = document.getElementById('nrc')
const classInput = document.getElementById('class')
const dateInput = document.getElementById('date')
const cidInput = document.getElementById('cid')

const downloadBtn = document.getElementById('download-btn')

const image = new Image()
image.src = 'certificate.jpg'
image.onload = function () {
	drawImage()
}

function drawImage() {
	// ctx.clearRect(0, 0, canvas.width, canvas.height)
	ctx.drawImage(image, 0, 0, canvas.width, canvas.height)
	ctx.font = '40px monotype corsiva'
	ctx.fillStyle = '#29e'
	ctx.fillText(nameInput.value, 430, 200)
        ctx.fillText(nrcInput.value, 350, 250)
        ctx.fillText(classInput.value, 350, 360)
        ctx.fillText(dateInput.value, 190, 560)
        ctx.fillText(cidInput.value, 500, 660)
}


nameInput.addEventListener('input', function () {
	drawImage()
})

downloadBtn.addEventListener('click', function () {
	downloadBtn.href = canvas.toDataURL('image/jpg')
	downloadBtn.download = 'Certificate - ' + nameInput.value
        downloadBtn.download = 'Certificate - ' + nrcInput.value
})
