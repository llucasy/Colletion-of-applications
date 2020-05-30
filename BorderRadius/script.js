let values = document.querySelectorAll('input[type="range"]')

const form = document.querySelector('.form')

form.addEventListener('input', () => {

    let strBorderRadius = `${values[0].value}% ${values[1].value}% ${values[2].value}% ${values[3].value}% / ${values[4].value}% ${values[5].value}% ${values[6].value}% ${values[7].value}%`

    document.querySelector('.borderRadius').style.borderRadius = strBorderRadius

    document.querySelector('.result').innerHTML = `border-radius: ${strBorderRadius}`
})

