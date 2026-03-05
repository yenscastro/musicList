import express from 'express'
import songsRouter from './routes/songs.js'

const app = express()

// Serve static files
app.use('/public', express.static('./public'))
app.use('/scripts', express.static('./public/scripts'))

// API routes
app.use('/songs', songsRouter)

// Root route
app.get('/', (req, res) => {
  res.status(200).send('<h1 style="text-align: center; margin-top: 50px;">🎵 Music Listicle API 🎵</h1>')
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`🚀 Server listening on http://localhost:${PORT}`)
  console.log(`📀 Access songs at http://localhost:${PORT}/songs`)
})