const form = document.querySelector('form');
const p = document.querySelector('p');
const h1 = document.querySelector('h1');
const footer = document.querySelector('footer');

let card = (name, event, greeting, message) => {
    p.style.border = '5px dotted green'
    p.innerHTML = `${greeting}, <br>You are invited to ${name}'s ${event}.  <br>${message} <br>Hope you can make it!`
    footer.innerHTML = '(Refresh the page for a new card)'
}

form.addEventListener('submit', e => {
    e.preventDefault();
    h1.textContent = "Preview of your card:";
    form.style.display = 'none';

    let name = e.target.name.value;
    let event = e.target.events.value;
    let greeting = e.target.greeting.value;
    let message = e.target.message.value;
    
    
    const validCard = () => new Promise(getCard);
    let getCard = (res, rej) => {
        if (name.length && message.length && greeting.length) {
        let cardCall = card(name, event, greeting, message)
        res(cardCall)
        } else {
        h1.setAttribute("style", "text-align: center; background-color: red")
        h1.textContent = "Missing input, please reload and fill all fields"
        rej("no valid input")
        }
}
validCard()
    .catch(err => { console.error(err) })
})

