document.querySelectorAll(".video-frame").forEach((frame) => {
  const video = frame.querySelector("video");
  const playButton = frame.querySelector(".video-play-button");

  if (!video || !playButton) return;

  const updateState = () => {
    const isPlaying = !video.paused && !video.ended;
    frame.classList.toggle("is-playing", isPlaying);
    playButton.tabIndex = isPlaying ? -1 : 0;
  };

  playButton.addEventListener("click", () => {
    video.play().catch(() => updateState());
  });
  video.addEventListener("play", updateState);
  video.addEventListener("pause", updateState);
  video.addEventListener("ended", updateState);
  updateState();
});
