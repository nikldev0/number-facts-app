let fact = document.querySelector('#fact');
let factText = document.querySelector('#factText')
let date = document.querySelector('#date');
let dateText = document.querySelector('#dateText');

let numberInput = document.querySelector('#numberInput');
let dateInput = document.querySelector('#dateInput');
numberInput.addEventListener('input', getFactFetch)
dateInput.addEventListener('input', getFactFetch)


async function getFactFetch() {
    let number = numberInput.value;
    let entryMonth = dateInput.value[5] + dateInput.value[6];
    let entryDay = dateInput.value[8] + dateInput.value[9];

    const response = await fetch('http://numbersapi.com/'+number)
    const data = await response.text()
        if (number != '') {
            fact.style.display = "block";
            factText.innerHTML = data;
        }
    const responsetwo = await fetch('http://numbersapi.com/'+entryMonth+'/'+entryDay+'/date')   
    const moredata  = await responsetwo.text()
        if (entryMonth && entryDay) {
            date.style.display = "block";
            dateText.innerHTML = moredata;
        }
    };
        


getFactFetch();

console.log(dateInput);
console.log(entryMonth);
console.log(entryDay);