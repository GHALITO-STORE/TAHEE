'use client'

import { useEffect, useState } from 'react'
import { getProducts } from '@/lib/printful'

interface Product {
  id: string
  name: string
  image: string
  price?: number
}

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true)
        const data = await getProducts()
        // Handle Printful API response structure
        const productList = data.result || data || []
        setProducts(Array.isArray(productList) ? productList : [])
      } catch (err) {
        setError('Failed to load products. Please ensure your Printful API key is configured.')
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  if (loading) {
    return <div className="container"><div className="loading">Loading products...</div></div>
  }

  if (error) {
    return <div className="container"><div className="error">{error}</div></div>
  }

  if (!products || products.length === 0) {
    return (
      <div className="container">
        <div className="empty-state">
          <h2>No Products Yet</h2>
          <p>Your Printful store is empty. Add products to get started!</p>
        </div>
      </div>
    )
  }

  return (
    <div className="container">
      <h1>Our Products</h1>
      <div className="products-grid">
        {products.map((product: any) => (
          <div key={product.id} className="product-card">
            {product.image && (
              <img
                src={product.image}
                alt={product.name}
                className="product-image"
              />
            )}
            <div className="product-info">
              <h3 className="product-name">{product.name}</h3>
              {product.price && (
                <p className="product-price">${product.price.toFixed(2)}</p>
              )}
              <button>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
