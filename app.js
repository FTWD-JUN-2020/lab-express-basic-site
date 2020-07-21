const express = require('express');
const app = express();
const axios = require('axios')

app.use(express.static('public'))




app.get('/', (req, res, next) => {
    res.sendFile(__dirname + `/views/index.html`)
})

app.get('/about', (req, res, next) => {
    res.sendFile(__dirname + `/views/about.html`)
})

app.get('/works', (req, res, next) => {
    res.sendFile(__dirname + `/views/works.html`)
})

app.get('/photos', (req, res, next) => {
   
    axios.get(`https://api.giphy.com/v1/gifs/search?api_key=X2zaDYIPM87ua1kWDXdcQFfTQ1jPFfYA&q=batman`)
        .then(giphy => {
            console.log(giphy.data)
            let html = ``

            let gifs = giphy.data.data.map(eachObj => { 
               html+=`<iframe src=${eachObj.embed_url} width="480" height="221" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>`
            })




            console.log(html)

            res.send(html)
            //res.send(`<iframe src="${gifs[0]}" width="480" height="221" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>`)


        }).catch(err => console.error(err))
    //res.sendFile(__dirname + `/views/photos.html`)
})




app.listen(3000, () => console.log("Listening to port 3000"))

//console.log(__dirname) //Users/niko/Documents/IHJUN/lab-express-basic-site
