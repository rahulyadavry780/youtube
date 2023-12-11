// Replace 'YOUR_API_KEY' with your actual YouTube API key
var apiKey = 'YOUR_API_KEY';

// Replace 'YOUR_VIDEO_ID' with the unlisted YouTube video ID
var videoId = 'YOUR_VIDEO_ID';

// Load the YouTube API script asynchronously
function loadYouTubeAPI() {
    var tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
}

// Create a YouTube player once the API is loaded
var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '360',
        width: '640',
        videoId: videoId,
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

// The API will call this function when the video player is ready
function onPlayerReady(event) {
    // You can do additional setup here
    event.target.playVideo();
}

// The API calls this function when the player's state changes
function onPlayerStateChange(event) {
    // You can handle player state changes here
    // For example, you can pause the video when it ends
    if (event.data == YT.PlayerState.ENDED) {
        player.stopVideo();
    }
}

// Load the YouTube API
loadYouTubeAPI();