function generateRandomText() {
  let result = "";
  for (i = 0; i < 20; i++) {
    randomNum = Math.floor(Math.random() * (122 - 97 + 1) + 97);
    result += String.fromCharCode(randomNum);
  }
  return result;
}
function handleOnlineNews() {
  const onlineNews = document.querySelector(".online-news");
  const quick = document.querySelector(".online-news span:nth-child(2)");

  onlineNews.removeChild(quick);

  const span = document.createElement("span");
  span.innerHTML = generateRandomText();
  span.classList.add("online");
  onlineNews.children[0].insertAdjacentElement("afterend", span);
}

handleOnlineNews();
setInterval(handleOnlineNews, 2000);
