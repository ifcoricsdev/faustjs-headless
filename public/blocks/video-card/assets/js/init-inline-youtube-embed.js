// TODO create this as an array of objects instead, so that we can have multiple players
// TODO on the same page without worrying about them stepping on each other
// See vimeo embed js for example setup
var ytPlayerObjects= [], ytPlayers = []
function create_yt_api_elements(elemId, elemWidth, elemHeight, vidId) {
  let playerObj = {
    playerId: elemId,
    playerWidth: elemWidth,
    playerHeight: elemHeight,
    videoId: vidId
  }

  ytPlayerObjects.push(playerObj)

  // console.log('in create_yt_api_elements, playerinfo =', playerId, pWidth, pHeight, videoId)
// 2. This code loads the IFrame Player API code asynchronously.
  if(!document.querySelector('#youtube-iframe-api-script')) {
    let tag = document.createElement('script')
    tag.id = "youtube-iframe-api-script"
    tag.src = "https://www.youtube.com/iframe_api"
    let firstScriptTag = document.getElementsByTagName('script')[0]
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)
  }

  if(typeof YT !== 'undefined') {
    createNewYtPlayer(playerObj)
  }
  /*
  let videoContainer = document.createElement('div')
  videoContainer.id = 'player'

  let card = document.querySelector('div.ibf-video-card')
  card.parentNode.insertBefore(videoContainer, card)
  */

  // console.log('in init-inline-youtube-embed, document elements created and placed')
}

// This function creates an <iframe> (and YouTube player)
// after the API code downloads.
function onYouTubeIframeAPIReady() {
  const playerObj = ytPlayerObjects[ytPlayerObjects.length - 1]

  console.log('in onYouTubeIframeAPIReady, playerObj = ', playerObj)

  const newPlayer = new YT.Player(playerObj.playerId, {
    height: playerObj.playerHeight,
    width: playerObj.playerWidth,
    videoId: playerObj.videoId,
    playerVars: {
      'playsinline': 1,
      'autoplay': 1,
      'mute': 1
    },
    events: {
      'onReady': onPlayerReady,
      'onError': processPlayerError,
      'onStateChange': playerStateChanged
    }
  });

  ytPlayers.push(newPlayer)
}

function createNewYtPlayer(player) {
  const newPlayer = new YT.Player(player.playerId, {
    height: player.playerHeight,
    width: player.playerWidth,
    videoId: player.videoId,
    playerVars: {
      'playsinline': 1,
      'autoplay': 1,
      'mute': 1
    },
    events: {
      'onReady': onPlayerReady,
      'onError': processPlayerError,
      'onStateChange': playerStateChanged
    }
  });

  ytPlayers.push(newPlayer)
}

// The API will call this function when the video player is ready.
function onPlayerReady(event) {
  let insertedIframe = document.querySelector('iframe#' + event.target.g.id)
  insertedIframe.classList.remove("removed")
  insertedIframe.classList.add("added")

  /*
  console.log('called onPlayerReady event, event = ', event)
  console.log('called onPlayerReady event, event.target = ', event.target)
  console.log('called onPlayerReady event, event.target ID = ', event.target.g.id)
  console.log('player state = ', event.target.getPlayerState())
  */

  //player.playVideo();
}

function playerStateChanged(event) {
  // console.log('player state changed, state=', event)
  if(event.data === 1) {
    event.target.unMute()
  }
}

function processPlayerError(event) {
  console.log('video player encountered an error, error =', event)
}
