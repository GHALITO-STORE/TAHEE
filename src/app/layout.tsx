import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'TAHEE - Printful Store',
  description: 'Custom merchandise and apparel store powered by Printful',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <header className="header">
          <nav className="navbar">
            <div className="container">
              <h1 className="logo">TAHEE Store</h1>
              <ul className="nav-links">
                <li><a href="/">Home</a></li>
                <li><a href="/products">Products</a></li>
                <li><a href="/cart">Cart</a></li>
              </ul>
            </div>
          </nav>
        </header>
        <main className="main-content">
          {children}
        </main>
        <footer className="footer">
          <p>&copy; 2026 TAHEE Store. Powered by Printful.</p>
        </footer>
      </body>
    </html>
  )
}
