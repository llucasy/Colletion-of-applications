const number = document.querySelector('#number')
const button = document.querySelector('button')

button.addEventListener('click', () => {

    const qtNumber = number.value.length

    if (qtNumber > 4 | qtNumber < 2 | isNaN(number.value) == true) {
        alert("Please enter 2 to 4 digits and numbers")
    } else {
        arr = String(number.value).split("")
        console.log(arr)
    }
    
    

    // if (qtNumber == 2) {
    //     if (number.value < 11) {alert("Favor digitar um número maior que 10").break}
    //     if (arr[0] === arr[1]) { 
    //         document.querySelector('#contar').innerHTML = "Esse número já é um palíndromo"
    //     } else {
    //         numero = Number(arr[0] + arr[1])
    //         while (arr[0] != arr[1]) {
    //             numero -= 1
                
    //         }
    //     }
    // }

} )
