const imgs = document.querySelector(".images");

export default function createImage(path) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement("img");
    img.setAttribute("src", path);
    img.onerror = () => {
      reject("error loading the image");
    };
    img.onload = () => {
      imgs.append(img)
      resolve(img);
    };
  });
}
