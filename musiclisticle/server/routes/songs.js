import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import songData from '../data/songs.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const router = express.Router()

// Get all songs
router.get('/', (req, res) => {
  res.status(200).json(songData)
})

// Get individual song page
router.get('/:songId', (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, '../public/song.html'))
})

export default router
