var express = require('express');
var app = express();

app.set('view engine' , 'ejs');

app.get('/home', function (req, res) {
    res.render("../views/home");
});

app.get('/form/:nome/:sobrenome?', function (req, res) {
    res.send('<h1>'+ req.params.nome + ' ' + req.params.sobrenome +'</h1>');

});

app.get('/cadastro', function (req, res) {
    let nomes = req.query["nomes"];
    if (nomes) {
        res.send('<h1>' + nomes + '</h1>');
    }
    else {
        res.send('<h1>Nenhum nome foi passado</h1>');
    }

})

app.get('/', function (req, res) {
    res.json({name: 'Daniel', idade: 36});
    //res.send('Olá Mundo!');
});

app.listen(3000, function() {
    console.log('Executando na porta 3000!');
});