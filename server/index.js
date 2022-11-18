import express from 'express'
import cors from 'cors'

import itemsRoute from './routes/itemsRoute.js'
const app = express()
app.use(cors())

app.use('/', itemsRoute)



const PORT = 5000
app.listen(PORT, () => {
    console.log(`app listen on port - http://localhost:${PORT}`);
})