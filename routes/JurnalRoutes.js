const {Router}=require('express');
const router=Router();
const multer = require('multer')
const {getAllJurnals, getJurnalById, getPinnedJurnals, addJurnal, updateJurnal, deleteJurnal}=require('../controllers/JurnalController');
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './uploads/');
    },
    filename: function(req, file, cb) {
        cb(null, new Date().toISOString() + file.originalname);
    }
});

const fileFilter = (req, file, cb) => {
    // reject a file
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null, true);
    } else {
        cb(null, false);
    }
};

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 5
    },
    fileFilter: fileFilter
});


//CRUD
router.get('/', getAllJurnals)

//get one by id
router.get('/:id', getJurnalById)

//get Pinned banners
router.get('/pinned', getPinnedJurnals)

//create
router.post('/add', upload.single("file"), addJurnal)

//update
router.put('/:id', updateJurnal);

//delete
router.delete('/:id', deleteJurnal);

module.exports=router;