const button = document.querySelector('button')

button.addEventListener('click', () => {

    const bin = document.querySelector('#bin').value
    const qtd = document.querySelector('#qtd').value

    let valid = Boolean;

    if (bin.length != qtd | isNaN(bin) == true) {
        alert('The number of digits must be the same as that entered. Letter are not allowed')
    } else {
        bin.split("").some(element => {
           if (Number(element) !== 0 & Number(element) !== 1) return valid = false
        });

        if (valid) alert(parseInt(bin, 2))
        else alert('Please enter "0" or "1"')
    }
})