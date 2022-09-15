const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const multer = require('multer');

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

// Parse JSON

app.use(express.json());

// Use CORS

app.use(cors());

// Serve Static Files

//app.use(express.static('uploads'));

app.use(express.static('public'));
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
    let order_number = req.body.order_number;

    let postQuery = "INSERT INTO products (title, text, file, order_number) VALUES ('" + title + "', '" + text + "', '" + file + "', '"+order_number+"');";
    console.log(postQuery);
    db.query(postQuery, (err,result,fields) => {
        if (err) { throw err };

        res.send('Response has been recorded...');
    })
})

app.use('/api/jurnal', require('./routes/JurnalRoutes'))

const PORT= process.env.PORT || 7000;
app.listen(7000, console.log(`Port is listening on port: 7000`));




/*
app.get('/', (req,res)=>{
    db.query('Select * from shirinmeva', (err,result)=>{
            if(err){
                console.log(err);
            }
            res.send(result);
        }
    )
})

app.get('/insert', (req,res)=>{
   connection.query('INSERT INTO products (title, text, img, date, status, author, order_number) VALUES ()', (err,result)=>{
       if(err){
           console.log(err);
       }
       res.send(result);
       }
       )
})*/

