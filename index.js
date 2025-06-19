const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const port = 80;

// Method Override
const methodOverride = require('method-override')
app.use(methodOverride('_method'))


// Session
const sessionMiddleware = require("./config/sessionConfig");
app.use(sessionMiddleware);

// ✅ Body Parser Middleware — TEM QUE VIR ANTES DAS ROTAS!
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Rotas
const homeRoutes = require('./routes/homeRoutes');
const registerRoutes = require('./routes/registerRoutes');
const loginRoutes = require('./routes/loginRoutes');
const myAccountRoutes = require('./routes/myAccountRoutes');
const logOutRoutes = require('./routes/logOutRoutes');
const productPageRoutes = require('./routes/productPageRoutes');
const shoppingCartRoutes = require('./routes/shoppingCartRoutes');


app.use('/', homeRoutes);
app.use('/', registerRoutes);
app.use('/', loginRoutes);
app.use('/', myAccountRoutes);
app.use('/', logOutRoutes);
app.use('/', productPageRoutes);
app.use('/', shoppingCartRoutes);


// View Engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Static Files
app.use(express.static(path.join(__dirname, 'public')));

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
