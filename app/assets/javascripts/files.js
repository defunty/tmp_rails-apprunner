console.log('test');
const fileInput = document.querySelector('.js-file-input')

fileInput.addEventListener('change', (e) => {
  files = e.target.files
  for (let i = 0; i < files.length; i++) {
    validateFile(files[i])
  }
})

const validateFile = (file) => {
  maxSize = 10000000000
  console.log(file.size);
  if (file.size > maxSize) {
    alert(`${file.name}\n容量が${maxSize}を超えるファイルはアップロードできません`);
    return;
  }
  switch(fileType(file.name)){
    case "video":
      previewVideo(file);
      break

    default:
      alert(`${file.name}\nアップロードできないファイルです`);
      break;
  }
}

const fileType = (fileName) => {
  fileName = fileName.substring(fileName.lastIndexOf('.'))
  if (fileName.toUpperCase().match(/\.(mp4|mov|wmv)$/i)) {
    return "video"
  }
  if (fileName.toUpperCase().match(/\.(jpe?g|png)$/i)){
    return "image"
  }
  return "undefined"
}

const previewVideo = (file) => {
  const url = URL.createObjectURL(file);
  const video = document.createElement("video");
  video.src = url;

  video.addEventListener('error', () => {
    alert('動画が読み込めません')
  })
  video.addEventListener('loadedmetadata', () => {
    const movieLength = video.duration;
    if(30 <= movieLength){
      alert(`30秒以上の動画はアップロードできません`);
      return
    }
    // const video = document.createElement('video')
    // const preview = document.createElement('video')

    // videoPreviewThumbnail.addEventListener('load', () => {
    //   preview.appendChild(videoPreviewThumbnail);
    // })
  })
}

/*
$(video).one("loadedmetadata", function () {
  const movieLength = video.duration;
  if(maxMovieLegnth <= movieLength){
    alert(`1分以上の動画はアップロードできません`);
    resetOffshot();
    return;
  }

  const preview = document.getElementById('preview');
  const li = document.createElement('li');

  const videoPreviewThumbnail = document.createElement('img');
  videoPreviewThumbnail.src = '/images/video_preview_thumbnail.png';

  if (isHereSelectOffshotPage()) {
    $(videoPreviewThumbnail).one('load', function () {
      li.appendChild(videoPreviewThumbnail);
      preview.appendChild(li);
      resolve();
    });
  } else {
    resolve();
  }
})
*/