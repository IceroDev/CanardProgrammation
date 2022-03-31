var quotes = [
    "Et donc ?",
    "Qu'en penses-tu ?",
    "Hum hum...",
    "Et qu'est-ce que ça signifie ?",
    "Ah !",
    "Mais encore ?",
    "Bizarre...",
    "Hmmmmmmmm",
    "Coin ?"
]

function newQuote() {
    var random = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quoteDisplay').innerHTML = quotes[random];
}

const duck = document.getElementById('duck')

duck.addEventListener('click', (ev) => {
    console.log('Pas si fort ! Vous allez lui faire mal...')
    var random = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quoteDisplay').innerHTML = quotes[random];
})