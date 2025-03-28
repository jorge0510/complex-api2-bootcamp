document.querySelector("button").addEventListener('click', getCat);

async function getCat() {
    const catPhraseResponse = await fetch(`https://meowfacts.herokuapp.com`);
    const catPhraseData = await catPhraseResponse.json();
    const catPhrase = catPhraseData.data[0]

    const catPictureResponse = await fetch(`https://cataas.com/cat?json=true`);
    const catPictureData = await catPictureResponse.json();
    const catPicture = catPictureData.url

    document.querySelector('.catImage').src = catPicture
    document.querySelector('h2').innerText = catPhrase
}


getCat()