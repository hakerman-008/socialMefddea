function downloadVideo() {
  var url = document.getElementById('videoUrl').value;
  if (url.trim() === '') {
    alert('Please enter a valid URL');
    return;
  }

  fetch(`https://tools.betabotz.eu.org/tools/tiktokdl?url=${url}`)
    .then(response => response.json())
    .then(data => {
      if (data && data.play) {
        var downloadLink = document.getElementById('downloadLink');
        downloadLink.innerHTML = `
          <video controls>
            <source src="${data.play}" type="video/mp4">
            Your browser does not support the video tag.
          </video>
          <a href="${data.play}" download>Download Video</a>
        `;
      } else {
        alert('Failed to fetch video. Please try again later.');
      }
    })
    .catch(error => console.error('Error:', error));
}
