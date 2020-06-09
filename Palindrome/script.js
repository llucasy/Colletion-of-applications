const number = document.querySelector('#number')
const button = document.querySelector('button')
const form = document.querySelector('form')

const findPalindrome = () => {

    const qtNumber = number.value.length

    if (qtNumber > 10 | qtNumber < 2 | isNaN(number.value) == true | number.value < 10) {
        alert("Please enter 2 to 4 digits and numbers larger than 9")
    } else {

        function reverse(nums) {
            let reverse = ''
            for (let i = String(nums).length - 1; i >= 0; i--) {
                reverse += String(nums)[i]
            }
            return reverse;
        }

        function palindrome(num) {
            for (let i = num + 1; ; i++) {
                if (String(i) === reverse(i))
                    return i
            }
        }

        alert(palindrome(Number(number.value)))
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault()
    findPalindrome()
})

button.addEventListener('click', findPalindrome)