const express = require('express');
const session = requiere('express-session');

const port = 3000;
const path = require('path');
const app = express();

app.use(session({secret:'hauha'}));

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use('/public', express.static(path.join(__dirname, ' public')));
app.set('views', path.join(___dirname, '/views'))

app.listen(port, () => {
  console.log('servidor rodando');
})