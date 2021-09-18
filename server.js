const express = require('express')
const app = express()
const handlebars = require('express-handlebars')
const path = require('path')
const pdf = require('html-pdf')

//template
//app.engine('handlebars',hbs())
app.engine('handlebars',handlebars({
     defaultLayout: "main"
    }));

app.set('view engine', 'handlebars')

//app.set('views', path.join(__dirname, 'views'))

app.use(express.static(__dirname + 'view'))


app.get('/', function(req, res){
    res.render("pages/home")
    pdf.create(home, options).toFile("conclusao.pdf", (err, data)=>{
        return response.send("Erro ao gerar o PDF")
    })
})

const discentes = [
    {
        name: "Suaziele Cristina de Souza",
        age: 21,
        courseData: "21/12/2020",
        date: "10/06/2021",  
        obs: "Graduada em Ciência da Computaçâo."
    },
];

app.listen(3000)