# Clean Twitter/X Share Links (Chrome Extension)

A lightweight Chrome Extension (Manifest V3) that automatically strips tracking parameters (such as `?s=...`, `?t=...`, `?a=...`, and ref tags) from Twitter/X links whenever you copy them to your clipboard.

## Features

- **Automatic Clipboard Cleaning:** Intercepts Twitter's native "Copy Link" share button and strips all tracking query parameters before the link hits your clipboard.
- **Manual Copying Support:** Also strips tracking parameters when manually highlighting and copying a Twitter/X URL.
- **Zero Overhead:** Runs locally in your browser with minimal footprint—no external servers or background listeners.

## Installation Instructions

Since this extension is loaded locally, you can install it manually in Google Chrome in just a few steps:

1. **Clone or Download the Repository:**
   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   ```
   *(Or download the ZIP file and extract it to a folder on your computer).*

2. **Open Chrome Extensions Page:**
   Open Google Chrome and navigate to:
   ```text
   chrome://extensions/
   ```

3. **Enable Developer Mode:**
   Toggle on **Developer mode** using the switch located in the top-right corner of the extensions page.

4. **Load the Extension:**
   - Click the **Load unpacked** button in the top-left corner.
   - Select the folder containing this repository's files (`manifest.json` and `content.js`).

## How to Use

1. Navigate to [x.com](https://x.com) or [twitter.com](https://twitter.com).
2. Click **Share** on any post/tweet, then click **Copy Link**.
3. Paste the URL anywhere—it will automatically be cleaned:
   - **Before:** `https://x.com/username/status/1234567890?a=pkvYn72FqgK4pgEwS1c`
   - **After:** `https://x.com/username/status/1234567890`

## Repository Structure

```text
.
├── manifest.json  # Manifest V3 extension configuration
├── content.js     # Content script that handles clipboard cleaning
└── README.md      # Project documentation
```

## License

This project is licensed under the MIT License.