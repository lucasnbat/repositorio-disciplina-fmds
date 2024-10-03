import express from 'express'
import crypto from 'node:crypto'

const app = express()

app.use(express.json())

let clientes = [
    { id: 1, nome: 'João' },
    { id: 2, nome: 'Marcos' },
    { id: 3, nome: 'Matheus' },
]

/* Create */
app.post('/cliente', (req, res) => {
    const { nome } = req.body
    clientes.push(
        {
            id: crypto.randomUUID(),
            nome,
        }
    )
    res.send({ message: 'Sucesso ao cadastrar!', vetor: clientes })
})

/* Patch = faz update e se não existir, faz create (upinsert) */
/* Put = atualiza */
app.put('/cliente/:id', (req, res) => {
    const id = req.params.id;
    const { nome } = req.body;

    // Encontra o cliente pelo ID
    let clienteParaAtualizar = clientes.find(cliente => cliente.id == id);

    if (!clienteParaAtualizar) {
        // Se não encontrar o cliente, retorna erro
        return res.status(404).json({ message: 'Cliente não encontrado!' });
    }

    // Atualiza apenas o nome do cliente
    clienteParaAtualizar.nome = nome || clienteParaAtualizar.nome;

    res.json({ message: 'Cliente atualizado com sucesso!', cliente: clienteParaAtualizar });
});

/* Get */
app.get('/cliente', (req, res) => {
    res.json(clientes)
})

app.get('/cliente/:id', (req, res) => {
    const id = req.params.id
    const cliente = clientes.find(cli => cli.id == id)
    res.json(cliente)
})

/* Delete */
app.delete('/cliente/:id', (req, res) => {
    res.send('Cliente deletado!')
})

app.get('/', (req, res) => {
    res.send('Seja bem vindo!')
})

app.listen(5000, () => {
    console.log('Servidor rodando!')
})