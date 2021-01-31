var mysql = require('mysql');

var con = mysql.createConnection({
  host: 'banco-de-dados.c86kkalillil.us-east-1.rds.amazonaws.com',
  user: 'admin',
  password: 'farb123456',
  database: 'banco-de-dados',
});

con.connect(function (err) {
  if (err) throw err;
  console.log('Connected!');
  var sql =
    "INSERT INTO customers (name, address) VALUES ('Company Inc', 'Highway 37')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log('1 record inserted');
  });
});
