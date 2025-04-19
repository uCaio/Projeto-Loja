const session = require("express-session")
const SequelizeStore = require("connect-session-sequelize")(session.Store)
const { sequelize } = require("./db") // <<< pega só a instância aqui


const sessionStore = new SequelizeStore({
    db: sequelize,
})

const sessionMiddleware = session({
    secret: "nodejsElegal",
    resave: false,
    saveUninitialized: false,
    store: sessionStore,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24
    }
});


// Sincroniza a tabela de sessões no banco 
sessionStore.sync()

module.exports = sessionMiddleware;