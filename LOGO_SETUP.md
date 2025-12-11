# Nautilus Logo Files

## Logo Variations Created ✨

Your website now includes **4 professional logo variations**, all created as scalable SVG files:

### 1. **Horizontal Logo** (`nautilus-logo.svg`)
- **Usage**: Main header, website navigation
- **Layout**: Nautilus shell icon + "NAUTILUS" text + tagline (side by side)
- **Dimensions**: 400×140px
- **Currently used**: ✅ Active in website header

### 2. **Icon Only** (`nautilus-icon.svg`)
- **Usage**: Favicon, app icons, social media profile pictures
- **Layout**: Just the watercolor nautilus shell
- **Dimensions**: 100×100px
- **Perfect for**: Square displays where text won't be readable

### 3. **Stacked Logo** (`nautilus-logo-stacked.svg`)
- **Usage**: Business cards, documents, social media posts
- **Layout**: Shell on top, text below (vertical)
- **Dimensions**: 300×180px
- **Perfect for**: Vertical layouts, print materials

### 4. **Favicon** (`favicon.svg`)
- **Usage**: Browser tab icon
- **Layout**: Simplified nautilus shell
- **Dimensions**: 32×32px
- **Currently used**: ✅ Active as website favicon

## Files Location

All logo files are in `/public/` directory:
```
/public/
  ├── nautilus-logo.svg         ← Main horizontal logo (ACTIVE)
  ├── nautilus-logo-stacked.svg ← Vertical layout
  ├── nautilus-icon.svg         ← Icon only
  └── favicon.svg               ← Browser tab icon (ACTIVE)
```

## Logo Features

All logos include:
- ✅ **Watercolor nautilus shell** with flowing tail
- ✅ **Brand colors**: Shell Primary (#7BA3BE), Shell Deep (#5B8299), Slate (#2D3A45)
- ✅ **Elegant typography**: "NAUTILUS" in serif, tagline in sans-serif
- ✅ **Scalable SVG format**: Crisp at any size
- ✅ **Transparent backgrounds**: Works on any color

## Using Different Logo Variations

### To use the stacked logo in header:

Edit `/src/components/Header.tsx` line ~33:
```tsx
<Image
  src="/nautilus-logo-stacked.svg"  // Changed from nautilus-logo.svg
  alt="Nautilus"
  width={200}   // Adjust width for stacked version
  height={120}  // Adjust height for stacked version
  className="h-14 w-auto transition-opacity group-hover:opacity-80"
  priority
/>
```

### To use icon-only version:

```tsx
<Image
  src="/nautilus-icon.svg"
  alt="Nautilus"
  width={48}
  height={48}
  className="h-12 w-12 transition-opacity group-hover:opacity-80"
  priority
/>
```

## Adding Your Original PNG Logo

If you prefer to use your original watercolor PNG logo instead of the SVG versions:

1. Save your PNG file to `/public/nautilus-logo.png`
2. Update `/src/components/Header.tsx` line ~33:
```tsx
<Image
  src="/nautilus-logo.png"  // Use PNG instead of SVG
  alt="Nautilus"
  width={240}
  height={70}
  className="h-12 w-auto"
  priority
/>
```

## Brand Colors Reference

The website uses the official Nautilus brand colors:

| Color Name | Hex Code | Usage |
|------------|----------|-------|
| Slate Blue | #2D3A45 | Primary text, headers |
| Shell Primary | #7BA3BE | Accents, buttons, highlights |
| Shell Deep | #5B8299 | Secondary accents, hover states |
| Shell Light | #C5D9E8 | Light accents, borders |
| Shell Pale | #E8F1F5 | Subtle backgrounds |
| Cream | #FDFCFA | Main background |
| Cream Dark | #F5F3F0 | Card backgrounds |

## Services Updated

The services have been updated to match your catalogues:

### For Students:
- Thesis Design & Supervision
- Research Methodology
- Data Analysis (R, SPSS, Excel, Python)
- One-on-One Tutoring
- Programming Tutoring
- CV Design

### For Organizations:
- Research Design
- Data Analysis
- Technical Writing
- Tender Preparation
- Literature Review
- CV & Profile Development

## Next Steps

1. ✅ **Logo variations created** - 4 SVG versions ready to use
2. ✅ **Header updated** - Horizontal logo is active
3. ✅ **Favicon added** - Browser tab shows Nautilus icon
4. **Optional**: Replace with your original PNG if preferred
5. **Test locally**: Run `npm run dev` and check the header
6. **Deploy**: Push changes and verify on production

## Need Help?

If you encounter issues:
- Check that logo files exist in `/public/` directory
- Verify the filename matches exactly in Header.tsx
- Clear your browser cache and refresh
- Check browser console for image loading errors
- SVG logos should work in all modern browsers
