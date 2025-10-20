# Lottery Ledger 📝

A simple, offline-first Progressive Web App (PWA) designed to help lottery ticket sellers track their daily sales, returns, and earnings efficiently. All data is stored locally on the device, ensuring privacy and immediate access without needing an internet connection.

---

## ✨ Features

* **Daily Data Entry**: Log ticket inputs and returns for three distinct sessions: Morning, Day, and Night.
* **Automated Calculations**: Instantly see the total tickets sold and the corresponding earnings for each session and the full day.
* **Weekly Reports**: View a consolidated report for any week, showing daily totals and a grand weekly total.
* **PDF Export**: Generate and download professional, printable PDF summaries of the weekly reports.
* **Monthly Dashboard**: Visualize monthly sales trends with an easy-to-understand bar chart.
* **Offline First**: Thanks to the integrated Service Worker, the app works perfectly without an internet connection after the first visit.
* **Data Management**:
    * Export all your data as a CSV file for backup.
    * Import data from a CSV file.
    * Clear records older than 30 days to save space.
* **Personalization**:
    * Set your name and the ticket rate in the settings.
    * Switch between a comfortable Light and Dark mode.
* **Secure & Private**: All data is stored exclusively in your browser's local storage. It never leaves your device.

---

## 🛠️ Tech Stack

* **Frontend**: HTML5, CSS3 (Custom Properties), JavaScript (ES6+)
* **Libraries**:
    * **Chart.js**: For rendering the monthly sales dashboard.
    * **jsPDF & jsPDF-AutoTable**: For generating PDF reports.
    * **EmailJS**: To power the "Send Feedback" form.
* **Core Technology**: Progressive Web App (PWA) capabilities, using a Service Worker for caching and offline functionality.

---

## 🚀 Getting Started

To run this project locally, you have two options:

**1. Simple Method (Directly opening the file)**
You can simply open the `index.html` file in any modern web browser. However, some PWA features, like the service worker, may not function correctly with the `file:///` protocol.

**2. Recommended Method (Using a local server)**
For full functionality and reliable testing, it's best to serve the files from a local server. If you are using Visual Studio Code, you can use the **"Live Server"** extension.

1.  Install the "Live Server" extension in VS Code.
2.  Right-click on the `index.html` file.
3.  Select "Open with Live Server".

---

## ⚠️ Important: How to See Changes After Editing Code

This project uses a **Service Worker** to make the app work offline. The service worker is very good at saving (caching) files like `style.css` and `script.js`.

Because of this, after you make changes to the code, a simple refresh (**`Ctrl+R`**) in your desktop browser might **NOT** show your changes. The browser will just load the old, saved files.

To see your latest changes, you **must** perform a **Hard Reload**.

* **On Windows/Linux (Chrome, Edge, Firefox):** Press **`Ctrl + Shift + R`**
* **On Mac (Chrome, Edge, Firefox):** Press **`Cmd + Shift + R`**

This forces the browser to ignore the cache and download the fresh files from the server. This is likely why the app was working on your mobile but not on your computer after making changes.

---

## ⚙️ Configuration

The feedback form in the settings page uses EmailJS to send emails. To make it work, you need to configure your own keys in the `script.js` file.

Find this object in `script.js` and replace the placeholder values with your own keys from your EmailJS account:

```javascript
const EMAILJS_CONFIG = {
    publicKey: 'cR_ecVOlooNvaufB0', // Your Public Key
    serviceId: 'service_wc19lto',   // Your Service ID
    templateId: 'template_grmabah'    // Your Template ID
};
````

-----

## 👤 Author

  * **Developed by:** Aavid
  * **Concept & Features by:** Md Imam

<!-- end list -->

```
```
