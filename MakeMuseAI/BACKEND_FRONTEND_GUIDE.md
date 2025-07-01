# Frontend-Backend Integration Guide

## 🏗️ Architecture Overview

Your project now has a **full-stack setup** with:

- **Frontend**: React + TypeScript + Vite (runs on port 5173)
- **Backend**: Express + TypeScript (runs on port 3001)
- **API Proxy**: Vite automatically proxies `/api` requests to the backend

## 🚀 How to Run

### Option 1: Run Both Together (Recommended)
```bash
npm run dev:full
```
This starts both frontend and backend simultaneously with hot reloading.

### Option 2: Run Separately
```bash
# Terminal 1 - Backend
npm run server:dev

# Terminal 2 - Frontend  
npm run dev
```

### Option 3: Production Build
```bash
# Build frontend
npm run build

# Build backend
npm run build:server

# Start production server
npm start
```

## 🔗 How the Connection Works

### 1. API Proxy Configuration
In `vite.config.ts`, we configured a proxy:
```typescript
server: {
  proxy: {
    '/api': {
      target: 'http://localhost:3001',
      changeOrigin: true,
      secure: false,
    },
  },
}
```

This means:
- Frontend requests to `/api/health` → automatically forwarded to `http://localhost:3001/api/health`
- No CORS issues in development
- Clean URLs in your frontend code

### 2. API Service Layer
The `src/services/api.ts` file provides a clean interface:
```typescript
// Frontend code
const response = await apiService.healthCheck()
const response = await apiService.generateContent("Your prompt")
```

### 3. Backend API Endpoints
The `server/index.ts` file defines your API:
```typescript
// GET /api/health
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Backend is running!' })
})

// POST /api/generate
app.post('/api/generate', async (req, res) => {
  const { prompt } = req.body
  // Your AI logic here
})
```

## 📡 Available API Endpoints

| Endpoint | Method | Description | Request Body | Response |
|----------|--------|-------------|--------------|----------|
| `/api/health` | GET | Health check | None | `{ status: 'OK', message: string }` |
| `/api/hello` | GET | Test endpoint | None | `{ message: string }` |
| `/api/generate` | POST | Generate content | `{ prompt: string }` | `{ generated: string, timestamp: string }` |

## 🧪 Testing the Connection

1. **Start both servers**: `npm run dev:full`
2. **Open your browser**: `http://localhost:5173`
3. **Use the API Test component**: It will show you if the connection is working
4. **Check the console**: Both servers will show their status

## 🔧 Adding New API Endpoints

### Backend (server/index.ts)
```typescript
// Add new endpoint
app.post('/api/your-endpoint', async (req, res) => {
  try {
    const { data } = req.body
    // Your logic here
    res.json({ result: 'success' })
  } catch (error) {
    res.status(500).json({ error: 'Server error' })
  }
})
```

### Frontend (src/services/api.ts)
```typescript
// Add new method
async yourEndpoint(data: any): Promise<ApiResponse<any>> {
  return this.request('/your-endpoint', {
    method: 'POST',
    body: JSON.stringify(data),
  })
}
```

### Frontend Component
```typescript
// Use in your component
const response = await apiService.yourEndpoint(data)
if (response.data) {
  // Handle success
} else {
  // Handle error
}
```

## 🌍 Environment Variables

Create a `.env` file in your root directory:
```env
# Backend port (optional, defaults to 3001)
PORT=3001

# API URL for production (optional)
VITE_API_URL=https://your-api-domain.com/api
```

## 🚀 Deployment

### Option 1: Separate Deployment
- **Frontend**: Deploy to Vercel/Netlify (static hosting)
- **Backend**: Deploy to Railway/Render/Heroku
- **Update**: Set `VITE_API_URL` to your backend URL

### Option 2: Combined Deployment
The backend is configured to serve the frontend in production:
```typescript
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../dist')))
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/index.html'))
  })
}
```

## 🔍 Debugging

### Check Backend Status
```bash
curl http://localhost:3001/api/health
```

### Check Frontend Proxy
```bash
curl http://localhost:5173/api/health
```

### View Network Requests
1. Open browser DevTools
2. Go to Network tab
3. Make API calls
4. See the proxied requests

## 🛠️ Common Issues

### CORS Errors
- ✅ **Development**: Proxy handles this automatically
- ✅ **Production**: Backend serves frontend, no CORS needed

### Port Already in Use
```bash
# Kill process on port 3001
lsof -ti:3001 | xargs kill -9

# Or change port in .env
PORT=3002
```

### TypeScript Errors
```bash
# Check types
npm run type-check

# Fix linting
npm run lint:fix
```

## 📚 Next Steps

1. **Add your AI logic** to the `/api/generate` endpoint
2. **Create more endpoints** for your specific features
3. **Add authentication** if needed
4. **Add database integration** (MongoDB, PostgreSQL, etc.)
5. **Add error handling** and validation
6. **Add tests** for both frontend and backend

Your full-stack application is now ready to build amazing AI features! 🚀 