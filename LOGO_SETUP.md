# Nautilus Logo Setup Instructions

## Adding Your Logo to the Website

The website is set up to display the Nautilus logo in the header. Follow these steps to add your logo image:

### Step 1: Prepare Your Logo

From the brand materials conversation, you have a **watercolor nautilus shell logo** with:
- **Format**: PNG with transparent background
- **Filename**: `Nautilus_Transparent_Logo.png`
- **Design**: Watercolor nautilus shell with "NAUTILUS" text and "Polymaths & Generalists" tagline

### Step 2: Add Logo to Public Folder

1. Copy your logo file to the `/public` directory
2. Rename it to `nautilus-logo.png` (or update the path in Header.tsx)

```bash
# Example command:
cp /path/to/your/Nautilus_Transparent_Logo.png ./public/nautilus-logo.png
```

### Step 3: Verify Logo Display

The logo will automatically appear in the header at:
- **Desktop**: Top-left corner with company name and tagline
- **Mobile**: Responsive header with mobile menu

### Logo Specifications

Based on your brand guide:
- **Size**: 48x48px display size (automatically scaled)
- **Format**: PNG with transparent background recommended
- **Colors**: Should match brand palette (Shell Primary: #7BA3BE)

### Fallback Behavior

If the logo image is not found, the website displays:
- An SVG nautilus spiral icon (simplified representation)
- "NAUTILUS" text with tagline

This ensures the website always looks professional even without the logo file.

### Alternative: Use a Different Logo

If you want to use a different logo file:

1. Open `/src/components/Header.tsx`
2. Find line ~26: `src="/nautilus-logo.png"`
3. Update the path to your logo filename

```tsx
<Image
  src="/your-logo-filename.png"
  alt="Nautilus Logo"
  fill
  className="object-contain"
/>
```

## Brand Colors Applied

The website now uses the official Nautilus brand colors:

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

1. **Add the logo file** to `/public/nautilus-logo.png`
2. **Test locally**: Run `npm run dev` and check the header
3. **Deploy**: Push changes and verify on production

## Need Help?

If you encounter issues:
- Check that the logo file is in `/public/` directory
- Verify the filename matches exactly
- Clear your browser cache and refresh
- Check browser console for image loading errors
