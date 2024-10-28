# Diwali-themed Web Application using GitHub Copilot and Flask

This repository contains a Diwali-themed single-page web application built using Python, Flask, and JavaScript, demonstrating how GitHub Copilot can understand instructions in native languages like Hindi to generate code efficiently.

## Overview

This application displays a "Happy Diwali" message along with an image of a Diwali celebration. When a user clicks anywhere on the webpage, the message changes to display "Happy Diwali" in a different Indian language, and the image updates to reflect Diwali celebrations in different regions of India.

The project is built using:

- **Backend:** Python with Flask (version > 2.2.2)
- **Frontend:** HTML, JavaScript, and CSS
- **GitHub Tools:** GitHub Copilot for code generation and GitHub Codespaces for the development environment

## Features

- **Initial Display:**
  - The homepage shows a "Happy Diwali" message in English.
  - An image of Diwali celebrations is loaded from an online source.
  
- **Interactivity:**
  - Clicking anywhere on the webpage changes the displayed message and image.
  - The message and image reflect Diwali celebrations in different Indian states, along with the language and state names in both the native language and English.

### States and Languages Supported:

| State           | Language        | Message                                 | Image URL                                                       |
|-----------------|-----------------|-----------------------------------------|-----------------------------------------------------------------|
| Uttar Pradesh   | Hindi           | शुभ दीपावली (Hindi, Uttar Pradesh)      | [Image URL](https://diwaliimages.blob.core.windows.net/images/Uttarpradesh.jpg) |
| Punjab          | Punjabi         | ਦੀਵਾਲੀ ਮੁਬਾਰਕ (Punjabi, Punjab)         | [Image URL](https://diwaliimages.blob.core.windows.net/images/Punjab.jpg)      |
| Gujarat         | Gujarati        | શુભ દિવાળી (Gujarati, Gujarat)          | [Image URL](https://diwaliimages.blob.core.windows.net/images/Gujrat.jpg)      |
| Assam           | Assamese        | শুভ দীপাবলি (Assamese, Assam)           | [Image URL](https://diwaliimages.blob.core.windows.net/images/Assam.jpg)       |
| Tamil Nadu      | Tamil           | இனிய தீபாவளி (Tamil, Tamil Nadu)        | [Image URL](https://diwaliimages.blob.core.windows.net/images/Tamilnadu.jpg)   |

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- **Python 3.8+**
- **Flask > 2.2.2**
- **GitHub Copilot Extension (optional)**

## Copilot Prompts

This project demonstrates GitHub Copilot's ability to understand native language instructions, such as Hindi. Below are the prompts that were used to generate this web application using GitHub Copilot.

### Hindi Prompt

```plaintext
@workspace /new Python का उपयोग करके एक Flask वेब एप्लिकेशन बनाएं जिसमें निम्नलिखित विशेषताएं हों:
प्रारंभिक प्रदर्शन:
होमपेज पर "Happy Diwali" संदेश (अंग्रेज़ी में) दिखाएं और तस्वीर केवल इस URL से लोड करें: https://diwaliimages.blob.core.windows.net/images/india.jpg। कोई लोकल इमेज का उपयोग न करें, तस्वीर को केवल ऑनलाइन स्रोत से लोड करें।

इंटरैक्टिविटी:
• यूजर से कोई इनपुट नहीं मांगा जाएगा, सिर्फ माउस क्लिक पर इंटरैक्शन होगा।
• वेबपेज पर कहीं भी क्लिक करने पर:
  ○ "Happy Diwali" संदेश को भाषा और राज्य के अनुसार बदलें, और संदेश में भाषा और राज्य का नाम अंग्रेज़ी में भी शामिल करें, जैसे: "शुभ दीपावली (Hindi, Uttar Pradesh)"।
  ○ राज्य की संस्कृति को दर्शाने वाली तस्वीर भी बदलें।
निम्नलिखित संयोजनों का उपयोग करें:
राज्य (State)	भाषा (Language)	संदेश (Message)	तस्वीर (Image URL)
उत्तर प्रदेश (Uttar Pradesh)	हिंदी (Hindi)	शुभ दीपावली (Hindi, Uttar Pradesh)	https://diwaliimages.blob.core.windows.net/images/Uttarpradesh.jpg
पंजाब (Punjab)	पंजाबी (Punjabi)	ਦੀਵਾਲੀ ਮੁਬਾਰਕ (Punjabi, Punjab)	https://diwaliimages.blob.core.windows.net/images/Punjab.jpg
गुजरात (Gujarat)	गुजराती (Gujarati)	શુભ દિવાળી (Gujarati, Gujarat)	https://diwaliimages.blob.core.windows.net/images/Gujrat.jpg
असम (Assam)	असमिया (Assamese)	শুভ দীপাবলি (Assamese, Assam)	https://diwaliimages.blob.core.windows.net/images/Assam.jpg
तमिलनाडु (Tamil Nadu)	तमिल (Tamil)	இனிய தீபாவளி (Tamil, Tamil Nadu)	https://diwaliimages.blob.core.windows.net/images/Tamilnadu.jpg

तकनीकी आवश्यकताएँ:
Backend (Flask):
• Flask का उपयोग केवल HTML पेज को रेंडर करने और स्टैटिक फाइलें सर्व करने के लिए करें।
• Flask का वर्शन > 2.2.2 हो।
• केवल आवश्यक निर्भरताएं requirements.txt में शामिल करें।
Frontend (HTML + JavaScript):
• JavaScript के जरिए माउस क्लिक इवेंट को हैंडल करें, और हर क्लिक पर संदेश और तस्वीर बदलें।
• सुनिश्चित करें कि भाषा और राज्य का नाम अंग्रेज़ी में भी दिखाई दे।
CSS Transitions:
• CSS transitions का उपयोग करें जिससे संदेश और छवि परिवर्तन सुचारू दिखे।
```

Above prompt will generate code along with file structure , and you can create all the files using single click in Visual Studio Code. 

Once all the files are generated , install application requirements 

'''
pip install -r requirements.txt 
'''

Run the application 

'''
python app.py
'''

Ideally a working application should come up, however if you see that home page is not reacting to the clicks , please use below prompt 

'''
@workspace होम पेज क्लिक इवेंट पर प्रतिक्रिया नहीं दे रहा है
'''
Apply all the code suggestions provided by copilot and run the application again. 
