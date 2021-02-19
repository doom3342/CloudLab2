var express = require('express');
var app = express();
app.set('view engine', 'pug');
app.set('views', './views');

const port = process.env.PORT || 8080;

app.get('/', function (req, res) {
    res.render('index', {title: 'Заголовок', message: 'Облачные технологии'});
    <img src="https://adolforamirez.es/wp-content/uploads/2018/01/facilitadores-inhibidores-800x600.jpg">
});

app.get('/page2', function (req, res) {
    res.render('page2', {title: 'Страница 2', message: 'Вторая страница'});
    <p>Я создал ссылку на
  <a href="/"
     title="Лучшее место для поиска дополнительной информации
   
  </a>.
</p>
});

app.listen(port, function() {
    console.log('Приложение запущено');
});
