/* Variáveis */

fetch('https://yesno.wtf/api')
    .then(response => response.json())
    .then(data => {
        const result = data;
        const resultAnswer = result.answer;
        const container = document.getElementById('container')

        const h1Element = document.createElement('h1')
        h1Element.textContent = resultAnswer.toUpperCase()

        const imgElement = document.createElement('img')
        imgElement.src = result.image
        imgElement.classList.add('container-image')

        const buttonElement = document.createElement('button')
        buttonElement.textContent = 'Mim de uma resposta diferente!!'
        buttonElement.classList.add('button-container')
        buttonElement.addEventListener('click', reload);

        container.appendChild(h1Element)
        container.appendChild(imgElement)
        container.appendChild(buttonElement)
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });

function reload() {
    window.location.reload()
}


