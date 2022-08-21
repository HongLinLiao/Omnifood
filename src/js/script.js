//#region Header nav open

const headerEle = document.querySelector(".header");
const btnEle = document.querySelector(".btn-mobile-nav");

btnEle.addEventListener("click", () => {
  headerEle.classList.toggle("nav-open");
});

//#endregion

//#region Scroll smooth

const allLinks = document.querySelectorAll("a:link");

for (let item of allLinks) {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    const href = item.getAttribute("href");

    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else if (href.startsWith("#")) {
      const ele = document.querySelector(href);
      ele.scrollIntoView({ behavior: "smooth" });
    }

    if (item.classList.contains("main-nav-link")) {
      headerEle.classList.toggle("nav-open");
    }
  });
}

//#endregion

//#region Header Sticky

const sectionHeroEle = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
  (entries) => {
    const ent = entries[0];
    if (!ent.isIntersecting) {
      document.body.classList.add("header-sticky");
    } else {
      document.body.classList.remove("header-sticky");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);

obs.observe(sectionHeroEle);

//#endregion
