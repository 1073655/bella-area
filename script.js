let title ＝ document.getElementById("title");
let content = document.getElementById("content");
let btn = document.getElementById("btn"):
let list = document.getElementById("list");
btn.addEventListener("click", news);
function news(){
  list.innerHTML = list.innerHTML +
    <div class="news">
      <h2>${title.value}</h2>
      <p>${content.value}</p><hr>
</div>
  ;
}
let i=0, imgArr=nem Array(); //宣告使用變數i 及 陣列imgArr
imgArr[0] = "https://www.ncyu.edu.tw/files/site_content/ncyu/emblem.jpg";
imgArr[1] = "https://www.ncyu.edu.tw/files/site_content/ncyu/ncyulogo2.bmp";
imgArr[2] = "https://www.ncyu.edu.tw/newsite/images/opening.jpg";

function shoeImg(){
  document.getElementById('ico').src=imgArr[i];//指定img的src
  i=(1+1)%3;//把i加1之後，除以3（因有三張圖輪播），將餘數在放回變數i裡
}

function show() {
  setInterval (showImg， 1000);//每隔2秒呼叫一次showImg函數
}