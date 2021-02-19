var express = require('express');
var app = express();
app.set('view engine', 'pug');
app.set('views', './views');

const port = process.env.PORT || 8080;

app.get('/', function (req, res) {
    res.render('index', {title: 'Заголовок', message: 'Облачные Технологии'});
});

app.get('/page3', function (req, res) {
    res.render('page2', {title: 'Страница 2', message: 'Вторая страница'});
});

app.listen(port, function() {
    console.log('Приложение запущено');
});
