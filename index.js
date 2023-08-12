import express from 'express'

const app = express()
const port = 3000

app.get('/api/:userid/pessoa/:personid', (req, res) => {
    const nome = req.query.nome
    const userid = req.params.userid
    const personid = req.params.personid

    res.json({ 
        message: `Voce passou o queryParam ${nome}` 
        + ` voce passou o userid: ${userid}`
        + ` voce passou o personid: ${personid}`
    })
})

app.listen(port, () =>{
    console.log(`Servidor rodando na porta ${port}`)
})