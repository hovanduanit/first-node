const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Cấu hình view engine và thư mục views
app.set('views', path.join(__dirname, 'views')); // __dirname là src/
app.set('view engine', 'ejs');

// Cấu hình thư mục tĩnh
app.use(express.static(path.join(__dirname, 'public')));

// Route chính
app.get('/', function (req, res) {
    res.send('Hello World');
});

// Route API render file EJS
app.get('/api/', function (req, res) {
    res.render('test.ejs'); // Tìm kiếm views/sample.ejs
});

// Start server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
