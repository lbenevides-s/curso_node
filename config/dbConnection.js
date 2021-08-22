var mysql = require('mysql');

const connMySQL = function(){
    console.log('conexão com bd foi estabelecida')
    return mysql.createConnection({
        host : 'localhost',
        user : 'root',
        password : 'Lestatlcs20',
        database : 'portal_noticias'
        });
}
    module.exports = function() {
        console.log('O autoload carregou o módulo de conexão com o bd')
        return connMySQL;
    }

