  document.body.addEventListener('click', () => {
    video.muted = false;
  }, { once: true });

  
  const video = document.getElementById('myVideo');
  const button = document.getElementById('audio-control')

  button.addEventListener('click', () => {
    if (video.muted) {
      video.muted = false ;
      button.textContent = 'Mute' ;
    }
    else {
      video.muted = true ;
      button.textContent = 'Démute' ;
    }
  })