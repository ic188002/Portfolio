const express = require('express');
const morgan = require('morgan');

// express app
const app = express();

// listen for requests
app.listen(4073);


app.set('views', './views');
// register view engine
app.set('view engine', 'ejs');

// middleware & static files
app.use(express.static('public'));

// app.use((req, res, next) => {
//   console.log('new request made:');
//   console.log('host: ', req.hostname);
//   console.log('path: ', req.path);
//   console.log('method: ', req.method);
//   next();
// });

app.use((req, res, next) => {
//   console.log('in the next middleware');
  next();
});

app.use(morgan('dev'));

app.use((req, res, next) => {
  res.locals.path = req.path;
  next();
});

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});
//..........................HOBBIES AND PASSIONS.....................
app.get('/car', (req, res) => {
    res.render('car');
  });

//..........................PROJECTS.....................
app.get('/discoid', (req, res) => {
    res.render('discoid');
  });

  app.get('/wineapp', (req, res) => {
    res.render('wineapp');
  });

  app.get('/forage', (req, res) => {
    res.render('forage');
  });

  app.get('/tictactoe', (req, res) => {
    res.render('tictactoe');
  });

  app.get('/seiprojects', (req, res) => {
    res.render('seiprojects');
  });



//..........................SKILLS.....................


app.get('/contactme', (req, res) => {
    res.render('contactme');
  });

  app.get('/skills', (req, res) => {
    res.render('skills');
  });


//..........................DESIGN PROJECTS.....................

app.get('/graphics', (req, res) => {
    res.render('graphics');
  });






app.get('/blogs/create', (req, res) => {
  res.render('create', { title: 'Create a new blog' });
});

// 404 page
app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
});

const options={
    url: 'https://us20.api.mailchimp.com/3.0/lists/a06f7fee47',
    method: 'POST',
    headers: {
      Authorization: process.env.HEROKU_API_KEY
    },
    body: postData
  }

  module.exports = app;