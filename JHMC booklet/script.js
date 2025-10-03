const pageFlip = new St.PageFlip(
  document.getElementById("flipbook"),
  {
    width: 1684,
    height: 1190,
    size: "stretch",
    drawShadow: true,
    showCover: true
  }
);


pageFlip.loadFromImages([
  "pages/cover-front.jpg",
  "pages/page1.jpg",
  "pages/page2.jpg",
  "pages/page3.jpg",
  "pages/page4.jpg",
  "pages/page5.jpg",
  "pages/page6.jpg",
  "pages/page7.jpg",
  "pages/page8.jpg",
  "pages/page9.jpg",
  "pages/page10.jpg",
  "pages/page11.jpg",
  "pages/page12.jpg",
  "pages/page13.jpg",
  "pages/page14.jpg",
  "pages/page15.jpg",
  "pages/cover-back.jpg",
]);
