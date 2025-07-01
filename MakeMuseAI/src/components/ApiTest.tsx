import React, { useState, useEffect } from 'react'
import { apiService } from '../services/api'

const ApiTest: React.FC = () => {
  const [healthStatus, setHealthStatus] = useState<string>('')
  const [helloMessage, setHelloMessage] = useState<string>('')
  const [prompt, setPrompt] = useState<string>('')
  const [generatedContent, setGeneratedContent] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>('')

  useEffect(() => {
    // Test backend connection on component mount
    testBackendConnection()
  }, [])

  const testBackendConnection = async () => {
    try {
      const response = await apiService.healthCheck()
      if (response.data) {
        setHealthStatus(`✅ ${response.data.message}`)
      } else {
        setHealthStatus(`❌ ${response.error}`)
      }
    } catch (err) {
      setHealthStatus('❌ Connection failed')
    }
  }

  const testHelloEndpoint = async () => {
    try {
      const response = await apiService.hello()
      if (response.data) {
        setHelloMessage(response.data.message)
      } else {
        setHelloMessage(`Error: ${response.error}`)
      }
    } catch (err) {
      setHelloMessage('Failed to fetch hello message')
    }
  }

  const generateContent = async () => {
    if (!prompt.trim()) {
      setError('Please enter a prompt')
      return
    }

    setLoading(true)
    setError('')
    setGeneratedContent('')

    try {
      const response = await apiService.generateContent(prompt)
      if (response.data) {
        setGeneratedContent(response.data.generated)
      } else {
        setError(response.error || 'Failed to generate content')
      }
    } catch (err) {
      setError('Failed to generate content')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="api-test">
      <h2>Backend API Test</h2>
      
      <div className="test-section">
        <h3>Health Check</h3>
        <p>{healthStatus || 'Checking...'}</p>
        <button onClick={testBackendConnection}>Refresh Health</button>
      </div>

      <div className="test-section">
        <h3>Hello Endpoint</h3>
        <p>{helloMessage || 'Click button to test'}</p>
        <button onClick={testHelloEndpoint}>Test Hello</button>
      </div>

      <div className="test-section">
        <h3>Generate Content</h3>
        <div>
          <input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Enter your prompt..."
            style={{ width: '300px', marginRight: '10px' }}
          />
          <button 
            onClick={generateContent} 
            disabled={loading}
          >
            {loading ? 'Generating...' : 'Generate'}
          </button>
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {generatedContent && (
          <div>
            <h4>Generated Content:</h4>
            <p>{generatedContent}</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default ApiTest 