const text = document.getElementById("quote")
let author = document.getElementById("author")
const tweetButton = document.getElementById("tweet")
const nextButton = document.getElementById("next2")

const getNewQuote = async () => {


    // API za citate 
    const url = "https://type.fit/api/quotes"


    // fetch (prihvatamo) podatke iz API-a
    const response = await fetch(url)

    console.log( typeof  response);

    // konvertujemo response(odgovor) u json i smestamo ga u allQuotes niz 
    const allQuotes = await response.json()

    // Generisemo slucajni broj izmedju 0 i duzine niza

    const indx = Math.floor(Math.random()*allQuotes.length)

    const quote = allQuotes[indx].text

    // cuvamo autora za taj citat

    const auth = allQuotes[indx].author

    if( auth == null ) 
    {
        author = "Anonymous"
    }

    // dinamicki prikaz za citat i za ime autora 

    text.innerHTML = quote
    author.innerHTML = `~ ${auth}`

    // tweet citat 
    tweetButton.href = `https://twitter.com/intent/tweet?text= ${quote} ~ ${auth}`
}

nextButton.addEventListener("click",getNewQuote)