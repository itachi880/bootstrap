/*files check*/
console.log("bootstrap javascript dev106 est actives :)");
const cssLinks = document.querySelectorAll("link");
let findIt = false;
const dev106Css = cssLinks.forEach((link, index) => {
  if (link.getAttribute("href").includes("dev106bootstrap")) {
    findIt = true;
    console.log("bootstrap css dev106 est actives :)");
  } else if (
    cssLinks.length - 1 == index &&
    !link.getAttribute("href").includes("dev106bootstrap") &&
    !findIt
  ) {
    console.log("bootstrap css dev106  pas actives :(");
  }
});
/*font size costume value*/
const fontSize = document.querySelectorAll(".font-size-c");
fontSize.forEach((element) => {
  let index = 0;
  console.log("in font-size");
  element.classList.forEach((classItem, key) => {
    if ("font-size-c" == classItem) {
      index = key + 1;
    }
  });
  let fontSize = element.classList[index];
  element.style.setProperty("--font-size", fontSize);
});
/*background color custume value*/
const bacgroundC = document.querySelectorAll(".bgc-c");
bacgroundC.forEach((element) => {
  let index = 0;
  element.classList.forEach((classItem, key) => {
    if ("bgc-c" == classItem) {
      index = key + 1;
    }
  });
  let bacgroundColor = element.classList[index];
  element.style.setProperty("--background-color", bacgroundColor);
});
/*text color*/
const textC = document.querySelectorAll(".textC-c");
textC.forEach((element) => {
  let index = 0;
  element.classList.forEach((classItem, key) => {
    if ("textC-c" == classItem) {
      index = key + 1;
    }
  });
  let font_color = element.classList[index];
  element.style.setProperty("--font-color", font_color);
});
/*font weight*/
const fontWeight = document.querySelectorAll(".font-weight-c");
fontWeight.forEach((element) => {
  let index = 0;
  element.classList.forEach((classItem, key) => {
    if ("font-weight-c" == classItem) {
      index = key + 1;
    }
  });
  let weight = element.classList[index];

  element.style.setProperty("--font-weight", weight);
});
