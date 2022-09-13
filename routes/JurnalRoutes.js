const {Router}=require('express');
const router=Router();

const {getAllJurnals, getJurnalById, addJurnal}=require('../controllers/JurnalController');

//CRUD
router.get('/', getAllJurnals)

//get one by id
router.get('/:id', getJurnalById)

//create
router.post('/add', addJurnal)


module.exports=router;