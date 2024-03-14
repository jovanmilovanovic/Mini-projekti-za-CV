document.getElementById('getDogBtn').addEventListener('click',getDogImage)

function getDogImage() {
    const apiUrl = 'https://dog.ceo/api/breeds/image/random'
    fetch(apiUrl)
    .then( respons => {
        if (!respons.ok) {
            throw new Error('Mrezni odgovor nije bio u redu')
        }

        return respons.json()
    })

    .then( data => {

        const dogImages = document.getElementById('dogImages')

        const image = document.createElement('img')

        image.src = data.message

        dogImages.innerHTML = ''

        dogImages.appendChild(image)
    })

    .catch(error => {

        console.error('Doslo je do problema prilikom dohvatanja slike psa: ', error)

        const dogImages =document.getElementById('dogImages')

        dogImages.innerHTML = '<p>Nije uspelo dohvatanje slike psa. Molimo pokusajte ponovo</p>'
    })
}