import app from './app.js'
import cloudinary from 'cloudinary'
import "colors"


cloudinary.v2.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
})

const port = process.env.PORT || 3000
const mode = process.env.MODE || "productiom"

app.listen(port, () => {
    console.log(`Server running on ${mode} mode in http://localhost:${port}`.bgMagenta.white)
})