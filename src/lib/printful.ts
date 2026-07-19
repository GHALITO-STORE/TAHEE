import axios from 'axios'

const PRINTFUL_API_URL = 'https://api.printful.com'

// Initialize Printful API client
export const printfulClient = axios.create({
  baseURL: PRINTFUL_API_URL,
  headers: {
    'Authorization': `Bearer ${process.env.NEXT_PUBLIC_PRINTFUL_API_KEY}`,
    'Content-Type': 'application/json',
  },
})

// Get all products
export const getProducts = async () => {
  try {
    const response = await printfulClient.get('/products')
    return response.data
  } catch (error) {
    console.error('Error fetching products:', error)
    throw error
  }
}

// Get product by ID
export const getProductById = async (productId: string) => {
  try {
    const response = await printfulClient.get(`/products/${productId}`)
    return response.data
  } catch (error) {
    console.error('Error fetching product:', error)
    throw error
  }
}

// Get store info
export const getStoreInfo = async () => {
  try {
    const response = await printfulClient.get('/store')
    return response.data
  } catch (error) {
    console.error('Error fetching store info:', error)
    throw error
  }
}
