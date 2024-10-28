# Flask Web App

This is a Flask web application that displays a "Happy Diwali" message and an image. The message and image will be dynamically updated based on the user's click events.

## Project Structure

```
flask-web-app
├── app.py
├── static
│   ├── css
│   │   └── styles.css
│   └── js
│       └── script.js
├── templates
│   └── index.html
├── requirements.txt
└── README.md
```

## Files

### `app.py`

This file is the main Flask application file. It contains the Flask app instance and defines the routes and logic for the web application.

### `static/css/styles.css`

This file contains the CSS styles for the web application. You can use CSS transitions in this file to achieve smooth transitions for the message and image changes.

### `static/js/script.js`

This file contains the JavaScript code that handles the mouse click events. It listens for click events and updates the message and image based on the selected state and language.

### `templates/index.html`

This file is the HTML template for the home page of the web application. It displays the "Happy Diwali" message and the image. The message and image will be dynamically updated based on the user's click events.

### `requirements.txt`

This file lists the required dependencies for the Flask application. Make sure to include Flask version > 2.2.2 in this file.

## Usage

1. Install the required dependencies by running the following command:
   ```
   pip install -r requirements.txt
   ```

2. Start the Flask application by running the following command:
   ```
   python app.py
   ```

3. Open your web browser and navigate to `http://localhost:5000` to access the web application.

Enjoy the Diwali celebrations with our interactive Flask web app!