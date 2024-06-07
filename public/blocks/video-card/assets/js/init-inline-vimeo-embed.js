var vimPlayerObjects = [], vimPlayers = []
function create_vim_api_elements(elemId, elemWidth, elemHeight, vidUrl) {

  let playerObj = {
    playerId: elemId,
    playerWidth: elemWidth,
    playerHeight: elemHeight,
    playerUrl: vidUrl
  }

  vimPlayerObjects.push(playerObj)
  // console.log('in create_vim_api_elements, playerinfo =', vimPlayerObjects[index].playerId, vimPlayerObjects[index].playerWidth, vimPlayerObjects[index].playerHeight, vimPlayerObjects[index].playerUrl)

  // 2. This code loads the Vimeo IFrame Player API code asynchronously.

  if(!document.querySelector('#vimeo-sdk-script')) {
    let tag = document.createElement('script');
    tag.id = "vimeo-sdk-script"
    tag.src = "https://player.vimeo.com/api/player.js";
    let firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  }
/*
  console.log('in create_vim_api_elements, firstScriptTag = ', tag)
  console.log('in init-inline-vimeo-embed, document elements created and placed')
*/
}

function waitForVimeo() {
  if(typeof Vimeo === 'undefined') {
    // console.log('vimeo not found, waiting')
    setTimeout(waitForVimeo, 100)
    return
  }

  let vimPlayerObj = vimPlayerObjects[vimPlayerObjects.length - 1]

  let options = {
    url: vimPlayerObj.playerUrl,
    width: vimPlayerObj.playerWidth,
    height: vimPlayerObj.playerHeight,
    autoplay: true,
    muted: true,
    responsive: true
  }

  let player = new Vimeo.Player(vimPlayerObj.playerId, options)

  // console.log('in waitForVimeo, player = ', player)

  vimPlayers.push(player)

  vimPlayers[vimPlayers.length - 1].on('play', onVimeoPlay)

  // console.log('in onVimeoPlay, playerId = ' + vimPlayerObj.playerId)
  let insertedIframe = document.querySelector('div#' + vimPlayerObj.playerId)
  // console.log('in onVimeoPlay, insertedIFrame =', insertedIframe)
  insertedIframe.classList.add("added")
}

function onVimeoPlay(event) {
  // console.log('in onVimeoPlay, event =', event)
  vimPlayers.forEach(function(player) {
    // console.log('in vimPlayer.forEach, player =', player)
    player.getPaused().then(function(paused) {
      if(!paused) {
        player.setVolume(1)
      }
    })
  })
}
