let values = document.querySelectorAll('input[type="range"]')

const form = document.querySelector('.form')

form.addEventListener('input', () => {
    document.querySelector('.borderRadius').style.borderRadius = `${values[0].value}% ${values[1].value}%`
})

