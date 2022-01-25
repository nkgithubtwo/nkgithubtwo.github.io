let videoContainer = document.querySelector(".video_container");
let btn_search = document.querySelector(".btn_submit");

(async () => {
  const res_pro = await fetch(
    "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=8&key=AIzaSyC4CqcDGpdJTg4oaBVCZBhkT-LgyqMFcd4"
  );
  const res_obj = await res_pro.json();

  display_video(res_obj);
})();

function display_video(data) {
  console.log(data);
  let video = data.items;
  video.forEach((ele) => {
    let iframe = document.createElement("iframe");
    iframe.setAttribute("allowfullscreen", "");
    iframe.setAttribute("frameborder", "0");
    iframe.setAttribute(
      "src",
      `https://www.youtube.com/embed/${ele.id.videoId}`
    );

    videoContainer.append(iframe);
  });
}

async function fetchVideo() {
  let search_item = document.querySelector("#search_items").value;
  console.log(search_item);
  const res_pro = await fetch(
    `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=8&q=${search_item}&key=AIzaSyC4CqcDGpdJTg4oaBVCZBhkT-LgyqMFcd4`
  );
  const res_obj = await res_pro.json();
  videoContainer.innerHTML = "";
  display_video(res_obj);
}

btn_search.addEventListener("click", fetchVideo);
