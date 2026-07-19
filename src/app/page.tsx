import Link from 'next/link'

export default function Home() {
  return (
    <div className="container">
      <section className="hero">
        <h1>Welcome to TAHEE Store</h1>
        <p>Custom merchandise and apparel powered by Printful</p>
        <Link href="/products">
          <button>Shop Now</button>
        </Link>
      </section>

      <style jsx>{`
        .hero {
          text-align: center;
          padding: 4rem 2rem;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 8px;
          color: white;
          margin-bottom: 3rem;
        }

        .hero h1 {
          font-size: 3rem;
          margin-bottom: 1rem;
        }

        .hero p {
          font-size: 1.25rem;
          margin-bottom: 2rem;
          opacity: 0.9;
        }

        .hero button {
          background-color: white;
          color: #667eea;
          font-weight: bold;
          padding: 1rem 2rem;
          font-size: 1.1rem;
        }

        .hero button:hover {
          background-color: #f0f0f0;
        }
      `}</style>
    </div>
  )
}
