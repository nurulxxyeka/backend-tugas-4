const express = require ('express'); 
// const routerMhs = require('./routers/mahasiswa')
const app = express();
const port = 8080;
const routeMatkul = require('./routers/mahasiswa')

app.use(express.json());
app.use(express.urlencoded({extended: true}))
// app.use(routerMhs)
app.use(routeMatkul)

app.get('/', (req, res) => {
    res.send('server page')
});

app.listen(port, () => {
    console.log(`Server berjalan pada localhost:${port}`)
});