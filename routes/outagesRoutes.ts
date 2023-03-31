import express from 'express';
const router = express.Router();

//Controllers
import cntrlOutages from '../controllers/outagesController';

//GET Routes
router.get('/getOutagesOfPrefecture/:prefectureId', cntrlOutages.fetch);

export default router;