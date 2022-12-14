const express = require('express');
const morgan = require('morgan');

// express app
const app = express();

require('dotenv').config();

// listen for requests
const PORT = process.env.PORT;



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

app.get('/gin', (req, res) => {
    res.render('gin');
  });

  app.get('/lobster', (req, res) => {
    res.render('lobster');
  });
  app.get('/autocar', (req, res) => {
    res.render('autocar');
  });

  app.get('/stormsimulator', (req, res) => {
    res.render('stormsimulator');
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
  app.get('/pages', (req, res) => {
    res.render('pages');
  });


//..........................DESIGN PROJECTS.....................

app.get('/mfc', (req, res) => {
    res.render('mfc');
  });

  app.get('/bin', (req, res) => {
    res.render('bin');
  });

  app.get('/interests', (req, res) => {
    res.render('interests');
  });


  


app.get('/blogs/create', (req, res) => {
  res.render('create', { title: 'Create a new blog' });
});

// 404 page
app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
});





  app.listen(PORT, () => {
    console.log(`my portfolio is running on port ${PORT}`);
})

  module.exports = app;