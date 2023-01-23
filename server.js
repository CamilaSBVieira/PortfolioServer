const express = require('express')
const cors = require('cors')
const axios = require('axios')
require('dotenv').config()

const PORT = process.env.PORT || 4000
const uid = process.env.uid

const app = express()
app.use(cors())

app.set('trust proxy', 1);

app.get('/projectImages', async (req, res) => {
    try {
        const response = await axios.get(`https://camilavieirafrontend-default-rtdb.firebaseio.com/ProjectImages.json?auth=${uid}`)
        const responseData = await response.data;
        return res.json(responseData)
    } catch (err) {
        console.log('error' + err)
        return err;
    }
})

app.listen(PORT, () => console.log(`Server is running on ${PORT}`))
