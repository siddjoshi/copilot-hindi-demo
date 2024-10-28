// script.js

document.addEventListener('DOMContentLoaded', function() {
    const states = [
        {
            state: "Uttar Pradesh",
            language: "Hindi",
            message: "शुभ दीपावली (Hindi, Uttar Pradesh)",
            imageUrl: "https://diwaliimages.blob.core.windows.net/images/Uttarpradesh.jpg"
        },
        {
            state: "Punjab",
            language: "Punjabi",
            message: "ਦੀਵਾਲੀ ਮੁਬਾਰਕ (Punjabi, Punjab)",
            imageUrl: "https://diwaliimages.blob.core.windows.net/images/Punjab.jpg"
        },
        {
            state: "Gujarat",
            language: "Gujarati",
            message: "શુભ દિવાળી (Gujarati, Gujarat)",
            imageUrl: "https://diwaliimages.blob.core.windows.net/images/Gujrat.jpg"
        },
        {
            state: "Assam",
            language: "Assamese",
            message: "শুভ দীপাবলি (Assamese, Assam)",
            imageUrl: "https://diwaliimages.blob.core.windows.net/images/Assam.jpg"
        },
        {
            state: "Tamil Nadu",
            language: "Tamil",
            message: "இனிய தீபாவளி (Tamil, Tamil Nadu)",
            imageUrl: "https://diwaliimages.blob.core.windows.net/images/Tamilnadu.jpg"
        }
    ];

    let currentIndex = 0;

    function updateMessageAndImage() {
        currentIndex = (currentIndex + 1) % states.length;
        const stateInfo = states[currentIndex];
        document.getElementById('message').textContent = stateInfo.message;
        document.getElementById('image').src = stateInfo.imageUrl;
    }

    document.addEventListener('click', function() {
        updateMessageAndImage();
    });
});