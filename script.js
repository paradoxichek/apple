let colorText = document.querySelector(".color");

let all = document.querySelector("#all-iphones");

let naturalBox = document.querySelector("#natural-box");
let blueBox = document.querySelector("#blue-box");
let whiteBox = document.querySelector("#white-box");
let blackBox = document.querySelector("#black-box");

let naturalTitan = document.querySelector("#natural-titanium");
let bluelTitan = document.querySelector("#blue-titanium");
let whiteTitan = document.querySelector("#white-titanium");
let blackTitan = document.querySelector("#black-titanium");

let natural = document.querySelector("#natural");
let blue = document.querySelector("#blue");
let white = document.querySelector("#white");
let black = document.querySelector("#black");

naturalTitan.onmouseenter = () => {
  colorText.innerText = "Color - Natural Titamium";
};
naturalTitan.onmouseleave = () => {
  colorText.innerText = "Color";
};

bluelTitan.onmouseenter = () => {
  colorText.innerText = "Color - Blue Titamium";
};
bluelTitan.onmouseleave = () => {
  colorText.innerText = "Color";
};

whiteTitan.onmouseenter = () => {
  colorText.innerText = "Color - White Titamium";
};
whiteTitan.onmouseleave = () => {
  colorText.innerText = "Color";
};

blackTitan.onmouseenter = () => {
  colorText.innerText = "Color - Black Titamium";
};
blackTitan.onmouseleave = () => {
  colorText.innerText = "Color";
};


let open = document.querySelector(".open");
let close = document.querySelector(".cross");
let dialog = document.querySelector(".trade-in-bg");

open.onclick = () => {
  dialog.style.display = "flex";
  dialog.classList.add('activebg')
};
close.onclick = () => {
  dialog.style.display = "none";
};

let questions = document.querySelectorAll(".question");
let answers = document.querySelectorAll(".answer");
let arrows = document.querySelectorAll(".arrow-que");

questions.forEach((question, idx) => {
  question.onclick = () => {
    answers[idx].classList.toggle("active-answer");
    arrows[idx].classList.toggle("arrow-active");
  };
});

let images = {
  natural: [
    "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-naturaltitanium?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1692846363993",
    "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-7inch-naturaltitanium_AV1_GEO_US?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1692845699471",
    "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-7inch-naturaltitanium_AV2?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1692845702182",
    "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-naturaltitanium_AV3?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1693011636437",
  ],
  blue: [
    "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-bluetitanium?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1692846360609",
    "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-7inch-bluetitanium_AV1_GEO_US?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1692845698306",
    "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-7inch-bluetitanium_AV2?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1692845699408",
    "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-bluetitanium_AV3?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1693011636681",
  ],
  white: [
    "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-whitetitanium?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1692846367180",
    "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-7inch-whitetitanium_AV1_GEO_US?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1692845703044",
    "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-7inch-whitetitanium_AV2?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1692845705417",
    "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-whitetitanium_AV3?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1693011636748",
  ],
  black: [
    "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-blacktitanium?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1692846357018",
    "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-7inch-blacktitanium_AV1_GEO_US?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1692845694671",
    "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-7inch-blacktitanium_AV2?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1692845694625",
    "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-blacktitanium_AV3?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1693011636618",
  ],
};

let button = document.querySelectorAll(".color-item");
let btnLeft = document.querySelector("#change-slider1");
let btnRight = document.querySelector("#change-slider2");
let pic = document.querySelector(".iphone-img");
let temp;
let idx = 0
button.forEach((btn) => {
  btn.onclick = () => {
    temp = btn.getAttribute("data-color");
    console.log(temp);
    pic.setAttribute("src", images[temp][0]);
  };
});

btnRight.onclick = () => {
  let arr = images[temp];
  console.log(arr);
  if (idx !== arr.length - 1) {
    idx++;
  } else {
    idx = 0
      btnRight.style.display = "block";
      btnLeft.style.display = "block";
}

  pic.setAttribute("src", arr[idx]);
};

btnLeft.onclick = () => {
  let arr = images[temp];
  if (idx !== 0) {
    idx--;
   
  } else {
    idx = 3
    btnLeft.style.display = "block";
    btnRight.style.display = "block";
  }

  pic.setAttribute("src", arr[idx]);
};


let accorddd = document.querySelectorAll('.q')
let answerrr = document.querySelectorAll('.a')
let arrowss = document.querySelectorAll('.arrowss')
accorddd.forEach(item => {
    item.onclick = () => {
        let content = item.nextElementSibling;
        console.log(content);

        if (content.style.maxHeight) {
            answerrr.forEach(item => item.style.maxHeight = null) 
                
        } else{
            answerrr.forEach(item => item.style.maxHeight = null) 
                content.style.maxHeight = 'fit-content'
                content.classList.add = 'animm'
          
        }
    }
});