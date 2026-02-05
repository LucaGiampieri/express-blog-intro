const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'));

app.get('/', (req, res) => {

    res.send("Server del mio blog");

})

app.get('/bacheca', (req, res) => {

    const posts = {

        "page": 1,

        "results": [
            {
                titolo: "Ciambellone",
                contenuto: "Il ciambellone è un dolce soffice e semplice, perfetto per la colazione o la merenda. Si prepara con ingredienti base come uova, zucchero, farina e latte.",
                immagine: "imgs/ciambellone.jpeg",
                tags: ["dolce", "colazione", "forno"]
            },
            {
                titolo: "Pane fritto dolce",
                contenuto: "Il pane fritto dolce è una preparazione golosa realizzata con fette di pane immerse in un composto dolce e poi fritte fino a doratura. È perfetto come merenda o dessert.",
                immagine: "imgs/pane_fritto_dolce.jpeg",
                tags: ["dolce", "fritto", "pane"]
            },
            {
                titolo: "Pasta alla barbabietola",
                contenuto: "La pasta alla barbabietola è un primo piatto colorato e dal sapore delicato. La barbabietola dona alla pasta una tonalità rosata e un gusto leggermente dolce.",
                immagine: "imgs/pasta_barbabietola.jpeg",
                tags: ["pasta", "barbabietola", "primo"]
            },
            {
                titolo: "Torta paesana",
                contenuto: "La torta paesana è un dolce tradizionale preparato con pane raffermo, cacao, latte, uvetta e frutta secca. È una ricetta tipica della tradizione contadina.",
                immagine: "imgs/torta_paesana.jpeg",
                tags: ["dolce", "tradizione", "torta"]
            },
            {
                titolo: "Cracker alla barbabietola",
                contenuto: "I cracker alla barbabietola sono uno snack croccante e colorato, preparato con purea di barbabietola e farina. Sono perfetti come aperitivo o spuntino salutare.",
                immagine: "imgs/cracker_barbabietola.jpeg",
                tags: ["snack", "salato", "barbabietola"]
            }
        ]
    };

    res.json(posts);

})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
