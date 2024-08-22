window.addEventListener('DOMContentLoaded', () => {
    const cep = document.querySelector('#CEP')
    const botao = document.querySelector('#buscar')
    const endereco = document.querySelector('#endereco')

    const getCEP = async () => {
        if (cep.value == '') return;

        try {
            const resultado = await fetch(`https://viacep.com.br/ws/${cep.value}/json/`)
            const dados = await resultado.json()
            const endereco = dados.logradouro + ', ' + dados.bairro + ', ' + dados.localidade + ' - ' + dados.estado
            return endereco
        } catch (e) {
            return null
        }
    }

    botao.addEventListener('click', async () => {
        endereco.textContent = await getCEP()
    })
})