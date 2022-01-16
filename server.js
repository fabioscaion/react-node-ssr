import express from 'express'
import Routes from './src/App/Routes'
import Api from './src/App/Api'
const app = express()
const port = 3030

app.use(express.static('./public'))

Routes(app)
Api(app)

app.listen(port, ()=>{
    console.log(`server is running on port ${port}`); // eslint-disable-line
})