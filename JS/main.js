  const video = document.getElementById('myVideo');
  document.body.addEventListener('click', () => {
    video.muted = false;
  }, { once: true });