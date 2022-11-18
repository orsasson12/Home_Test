import express from 'express'
const router = express.Router()
import { getItems } from '../controllers/itemsController.js'

router.get('/', getItems)



export default router