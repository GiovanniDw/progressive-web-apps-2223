import express from 'express'
import {getDynamicMuseumData} from '../api'
const router = express.Router();


router.get('/art', require('./art'));

module.exports = router;

export const home = async (req, res, next) => {

try {
  const data = getDynamicMuseumData()
} catch (error) {
  
}

}