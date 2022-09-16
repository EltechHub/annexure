const express = require('express');
var bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');
const multer = require('multer');
var router = express.Router();
const app = express ();

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'uploads');
    },
    filename: function (req, file, cb) {
        console.log(file);
        cb(null , file.originalname );
    }
});

const upload = multer({ storage: storage })
app.use(bodyParser.urlencoded({ extended: false }));
// Parse JSON

app.use(express.json());

// Use CORS

app.use(cors());
router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header("Access-Control-Allow-Headers", "Content-Type");
    next();
});

// Serve Static Files

app.use(express.static('uploads'));

const db =mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: '',
    database: 'shirinmeva',
})

app.get('/', (req,res) => {
    let selectQuery = "SELECT * FROM products;";

    db.query(selectQuery, (err, result, fields) => {
        if (err) throw err;

        res.send({
            status: 200,
            err: null,
            result: result
        })
    })
})
app.post('/', upload.single('file'), (req,res) => {
    let title = req.body.title;
    let text = req.body.text;
    let file ="http://localhost:7000/"+ req.file.filename;
    let pin = req.body.pin ? req.body.pin:false;

    let postQuery = "INSERT INTO products (title, text, file, pin) VALUES ('" + title + "', '" + text + "', '" + file + "', '"+pin+"');";
    console.log(postQuery);
    db.query(postQuery, (err,result,fields) => {
        if (err) { throw err };

        res.send('Response has been recorded...');
    })
})

app.use('/api/jurnal', require('./routes/JurnalRoutes'))

const PORT= process.env.PORT || 7000;
app.listen(7000, console.log(`Port is listening on port: 7000`));