const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')
//---INPUT---//
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
	ctx.font = '35px Georgia'
	ctx.fillStyle = '#253660'

//---NAME---//
	ctx.fillText(nameInput.value, 270, 240)
//---NAME---//
	ctx.fillText(nrcInput.value, 270, 280)
//---CLASS---//
        ctx.fillText(classInput.value, 270, 360)
//---DATE---//
        ctx.fillText(dateInput.value, 165, 575)
//---CID---//
        ctx.fillText(cidInput.value, 500, 660)
}


nameInput.addEventListener('input', function () {
	drawImage()
})

downloadBtn.addEventListener('click', function () {
	downloadBtn.href = canvas.toDataURL('image/jpg')
	downloadBtn.download = 'Certificate' + nameInput.value
})
