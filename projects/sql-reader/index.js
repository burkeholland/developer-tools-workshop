const {Connection, Request} = require('tedious');
require('console.table');

const options = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric'
};

const config = {
  userName: process.env.SQL_USERNAME,
  password: process.env.SQL_PASSWORD,
  server: process.env.SQL_SERVER,
  options: {encrypt: true, database: process.env.SQL_DATABASE}
};

function main(context, myTimer) {
  getChangedSkus().then(data => {
      data.forEach(item => {
        console.table(data);
      });
    })
    .catch(err => {
      console.error(`ERROR 🛑: ${err}`);
    });
}

/**
 * Executes a query against the database for SKU's changed in the last 24 hours
 * @returns {Promise} Promise object contains result of query
 */
function getChangedSkus() {
  return new Promise((resolve, reject) => {
    const connection = new Connection(config);
    const query = `SELECT Sku, Quantity, CONVERT(varchar, Modified, 0) as Modified
                   FROM Inventory`;

    connection.on('connect', err => {
      if (err) reject(err);

      let request = new Request(query, err => {
        if (err) {
          reject(err);
        }
      });

      const results = [];
      request.on('row', columns => {
        let result = {};
        columns.forEach(column => {
          result[column.metadata.colName]=column.value;
        });

        results.push(result);
      });

      request.on('doneProc', (rowCount, more) => {
        resolve(results);
      });

      connection.execSql(request);
    }); });
}

// run the thing
main();
