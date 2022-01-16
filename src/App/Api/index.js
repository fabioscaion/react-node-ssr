export default function Api(app){
    app.get('/api', (req, res)=>{
        res.json({ "api":"works!" })
    })

}