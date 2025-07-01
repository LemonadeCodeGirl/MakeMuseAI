import express from 'express'
import cors from 'cors'
import path from 'path'

const app = express()
const PORT = process.env.PORT || 3001

// Middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// API Routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Backend is running!' })
})

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from the backend!' })
})

// Example API endpoint for your AI functionality
app.post('/api/generate', async (req, res) => {
  try {
    const { prompt } = req.body
    
    if (!prompt) {
      return res.status(400).json({ error: 'Prompt is required' })
    }

    // TODO: Add your AI generation logic here
    const response = {
      generated: `Generated content for: ${prompt}`,
      timestamp: new Date().toISOString()
    }

    res.json(response)
  } catch (error) {
    console.error('Error generating content:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
})

// Serve static files in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../dist')))
  
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/index.html'))
  })
}

app.listen(PORT, () => {
  console.log(`🚀 Backend server running on http://localhost:${PORT}`)
  console.log(`📡 API available at http://localhost:${PORT}/api`)
}) 