// @todo: напишите здесь код парсера

function parsePage() {
  // meta
  const lang = document.querySelector("html").getAttribute("lang");

  const title = document
    .querySelector("title")
    .textContent.split("—")[0]
    .trim();

  const metas = document.getElementsByTagName("meta");
  let keywords = [];
  let description = "";
  let openGraph = {};

  for (let meta of metas) {
    const name = meta.getAttribute("name");
    const property = meta.getAttribute("property");

    if (name === "keywords") {
      keywords = meta.content.split(",").map((k) => k.trim());
    }

    if (name === "description") {
      description = meta.content;
    }
    if (property && property.startsWith("og:")) {
      const key = property.slice(3);
      openGraph[key] = meta.content;
    }
  }

  // Данные карточки товара
  const productid = document.querySelector(".product").dataset.id;

  
  return {
    meta: { lang, title, keywords, description, openGraph },
    product: {},
    suggested: [],
    reviews: [],
  };
}

window.parsePage = parsePage;
