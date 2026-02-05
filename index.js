const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {

    res.send("Server del mio blog");

})

app.get('/bacheca', (req, res) => {

    const posts = [
        {
            titolo: "Ciambellone",
            contenuto: "Il ciambellone è un dolce soffice e semplice, perfetto per la colazione o la merenda. Si prepara con ingredienti base come uova, zucchero, farina e latte.",
            immagine: "",
            tags: ["dolce", "colazione", "forno"]
        },
        {
            titolo: "Pane dritto",
            contenuto: "Il pane dritto è un tipo di pane dalla forma allungata e dalla crosta croccante. È ideale da accompagnare con salumi, formaggi o altri piatti salati.",
            immagine: "",
            tags: ["pane", "salato", "forno"]
        },
        {
            titolo: "Pasta dolce",
            contenuto: "La pasta dolce è una variante della classica pasta che viene preparata con ingredienti zuccherati e spesso arricchita con creme o frutta.",
            immagine: "",
            tags: ["dolce", "pasta", "dessert"]
        },
        {
            titolo: "Torta paesana",
            contenuto: "La torta paesana è un dolce tradizionale preparato con pane raffermo, cacao, latte, uvetta e frutta secca. È una ricetta tipica della tradizione contadina.",
            immagine: "",
            tags: ["dolce", "tradizione", "torta"]
        },
        {
            titolo: "Cracker alla barbabietola",
            contenuto: "I cracker alla barbabietola sono uno snack croccante e colorato, preparato con purea di barbabietola e farina. Sono perfetti come aperitivo o spuntino salutare.",
            immagine: "",
            tags: ["snack", "salato", "barbabietola"]
        }
    ];


    res.json(posts);

})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
