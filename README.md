# Haven Estates — Real Estate Website Concept

A responsive Next.js 14 concept website created for the Go Digital portfolio.

## Run locally
1. Install Node.js 18+
2. Run `npm install`
3. Run `npm run dev`
4. Open http://localhost:3000

## Customize before publishing
- Replace illustrative property names, prices, and listing details with clearly labeled demo data or real client-approved data.
- Replace the placeholder contact email and phone number in `app/page.tsx`.
- The property images are loaded from Unsplash URLs; download and self-host licensed images for production reliability.
- This is a concept project, not a real estate brokerage or live inventory platform.

## Property detail pages
- Every property card opens its own route, for example `/properties/the-palm-residence`.
- Each detail page includes a multi-image gallery, property specifications, description, amenities, and an enquiry panel.
- Property content is centralized in `lib/properties.ts`, so you can edit a listing once and have it update on both the homepage and its detail page.
- All property information, prices, imagery and contact details are illustrative placeholders and should be replaced before presenting this as a live listing website.
# haven-estates
