const {Router}=require('express');
const router=Router();

const {getAllJurnals, getJurnalById, addJurnal, updateJurnal, deleteJurnal}=require('../controllers/JurnalController');

//CRUD
router.get('/', getAllJurnals)

//get one by id
router.get('/:id', getJurnalById)

//create
router.post('/add', addJurnal)

//update
router.put('/:id', updateJurnal);

//delete
router.delete('/:id', deleteJurnal);
module.exports=router;