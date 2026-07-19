# TAHEE Store Setup Guide

## Step 1: Get Your Printful API Key

1. Go to [Printful Developer Settings](https://www.printful.com/admin/settings/api)
2. Create or copy your API key
3. Note both your API key and API secret

## Step 2: Clone & Install

```bash
git clone https://github.com/GHALITO-STORE/TAHEE.git
cd TAHEE
npm install
```

## Step 3: Configure Environment Variables

```bash
cp .env.example .env.local
```

Edit `.env.local` and add your Printful credentials:

```
NEXT_PUBLIC_PRINTFUL_API_KEY=your_api_key_here
PRINTFUL_API_SECRET=your_api_secret_here
```

## Step 4: Run Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

## Step 5: Connect Your Store

1. Navigate to `/products` page
2. The site will automatically fetch your products from Printful
3. If no products appear, ensure:
   - Your API key is correct
   - You have products created in Printful

## Deployment

### Deploy to Vercel (Recommended)

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your TAHEE repository
4. Add environment variables in Vercel dashboard
5. Deploy!

### Deploy to GitHub Pages

1. Update `next.config.js` to export as static:

```javascript
const nextConfig = {
  output: 'export',
  // ... other config
}
```

2. Build and push:

```bash
npm run build
git add -A
git commit -m "Build for deployment"
git push
```

3. Enable GitHub Pages in repository settings

## Next Steps

- Customize colors and branding in `src/app/globals.css`
- Add product filtering and search
- Implement shopping cart functionality
- Add checkout integration
- Set up order management
- Customize homepage in `src/app/page.tsx`

## Troubleshooting

**Products not loading?**
- Check your API key is correct in `.env.local`
- Verify you have products in your Printful account
- Check browser console for errors

**Build errors?**
- Delete `node_modules` and `.next` folder
- Run `npm install` again
- Clear cache: `npm cache clean --force`

## Resources

- [Printful API Docs](https://developers.printful.com/)
- [Next.js Documentation](https://nextjs.org/docs)
- [Printful Support](https://www.printful.com/support)
