let values = document.querySelectorAll('input[type="range"]')

const form = document.querySelector('.form')

const copyToClipboard = copy => {
    let inputCopy = document.createElement("input")
    inputCopy.value = copy

    document.body.appendChild(inputCopy)

    inputCopy.select()
    inputCopy.setSelectionRange(0, 99999)
    document.execCommand('copy')

    document.body.removeChild(inputCopy)
}

form.addEventListener('input', () => {

    let strBorderRadius = `${values[0].value}% ${values[1].value}% ${values[2].value}% ${values[3].value}% / ${values[4].value}% ${values[5].value}% ${values[6].value}% ${values[7].value}%`

    document.querySelector('.borderRadius').style.borderRadius = strBorderRadius

    let strCopy = `border-radius: ${strBorderRadius};`
    document.querySelector('.result').innerHTML = strCopy
    copyToClipboard(strCopy)
})

