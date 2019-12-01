var mysql = require("mysql")

function connect()
{
var connection = mysql.createConnection({
    port:9099,
    host:'192.168.2.37',
    user:'root',
    password:'root',
    database:'myapp_db'
})
connection.connect();
return connection
}
module.exports.connect = connect;