const API_BASE_URL = import.meta.env.VITE_API_URL || '/api'

export interface ApiResponse<T = any> {
  data?: T
  error?: string
  status: number
}

class ApiService {
  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<ApiResponse<T>> {
    try {
      const url = `${API_BASE_URL}${endpoint}`
      const response = await fetch(url, {
        headers: {
          'Content-Type': 'application/json',
          ...options.headers,
        },
        ...options,
      })

      const data = await response.json()

      if (!response.ok) {
        return {
          error: data.error || 'An error occurred',
          status: response.status,
        }
      }

      return {
        data,
        status: response.status,
      }
    } catch (error) {
      console.error('API request failed:', error)
      return {
        error: 'Network error',
        status: 500,
      }
    }
  }

  // Health check
  async healthCheck(): Promise<ApiResponse<{ status: string; message: string }>> {
    return this.request('/health')
  }

  // Hello endpoint
  async hello(): Promise<ApiResponse<{ message: string }>> {
    return this.request('/hello')
  }

  // Generate content
  async generateContent(prompt: string): Promise<ApiResponse<{ generated: string; timestamp: string }>> {
    return this.request('/generate', {
      method: 'POST',
      body: JSON.stringify({ prompt }),
    })
  }
}

export const apiService = new ApiService() 