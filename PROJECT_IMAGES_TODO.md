# Project Images - Update Guide

Hassan, you need to replace the placeholder images with your actual project screenshots/logos.

## Current Placeholder Images Being Used:
- `src/assets/images/saayaHealthLogo.webp` (currently used for GRC & Omani Therapist)
- `src/assets/images/nextuLogo.webp` (currently used for Healthcare & OCR projects)
- `src/assets/images/facebookLogo.png` (Liztek company logo)
- `src/assets/images/quoraLogo.png` (Optivex company logo)
- `src/assets/images/airbnbLogo.png` (Fierra Footwear logo)
- `src/assets/images/harvardLogo.png` (Superior University logo)

## How to Add Your Project Images:

1. **Prepare Your Images:**
   - GRC Compliance system screenshot/diagram
   - Healthcare dashboard screenshot
   - Omani Therapist interface/architecture diagram
   - OCR pipeline visualization
   - Company logos (if available)
   - University logo

2. **Add Images to Project:**
   ```
   Place images in: src/assets/images/
   
   Recommended names:
   - grc-compliance.webp or .png
   - healthcare-dashboard.webp or .png
   - omani-therapist.webp or .png
   - ocr-rag-pipeline.webp or .png
   - liztek-logo.png
   - optivex-logo.png
   - fierra-logo.png
   - superior-university-logo.png
   ```

3. **Update portfolio.js:**
   
   Find the `bigProjects` section and update:
   ```javascript
   {
     image: require("./assets/images/grc-compliance.webp"),
     projectName: "Enterprise GRC & Compliance Intelligence",
     // ...
   }
   ```

4. **Image Guidelines:**
   - Size: 300-500px wide recommended
   - Format: WebP preferred (smaller size), PNG/JPG also work
   - Compress images before adding (use TinyPNG.com or similar)

## Quick Find & Replace in portfolio.js:

Search for these lines and update with your images:

**Line ~220-280 (bigProjects section):**
- Replace `require("./assets/images/saayaHealthLogo.webp")` 
- Replace `require("./assets/images/nextuLogo.webp")`

**Line ~180-220 (workExperiences section):**
- Replace company logos

**Line ~130 (educationInfo section):**
- Replace `require("./assets/images/harvardLogo.png")` with Superior University logo

---

**Note:** The portfolio will work with placeholder images, but custom images will make it more professional and personalized!
