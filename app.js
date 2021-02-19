var express = require('express');
var app = express();
app.set('view engine', 'pug');
app.set('views', './views');

const port = process.env.PORT || 8080;

app.get('/', function (req, res) {
    res.render('index', {title: 'Заголовок', message: 'Облачные технологии'});
    pc.innerHTML="<img src='https://cf.ppt-online.org/files/slide/r/rXpTua8IhKyfU4vk0QCnmFGExP9BJcqHzZd6NL/slide-6.jpg'>";
    
   
});

app.get('/page2', function (req, res) {
    res.render('page2', {title: 'Страница 2', message: 'Вторая страница'});
});

app.listen(port, function() {
    console.log('Приложение запущено');
});

