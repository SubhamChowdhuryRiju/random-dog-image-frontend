const API_URL = "https://dog.ceo/api/breeds/image/random";

fetch(API_URL)
    .then(response => response.json())
    .then(data => {
        console.log(data.message);
        const imageEle = document.getElementById('randomDogImage');
        imageEle.src = data.message;
    })
    .catch(error => {
        console.error('Error in fetching data: ', error);
    })