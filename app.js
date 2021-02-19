var express = require('express');
var app = express();
app.set('view engine', 'pug');
app.set('views', './views');

const port = process.env.PORT || 8080;

app.get('/', function (req, res) {
    res.render('index', {title: 'Обучение коду JS', message: 'Облачные технологии'});
    <img src="https://adolforamirez.es/wp-content/uploads/2018/01/facilitadores-inhibidores-800x600.jpg">
});

app.get('/page2', function (req, res) {
    res.render('page2', {title: 'Здесь вторая страница', message: 'Вторая страница'});
    <p>
  <a href="/"
     title="Лучшее место для поиска дополнительной информации
});

app.listen(port, function() {
    console.log('Приложение запущено');
});
