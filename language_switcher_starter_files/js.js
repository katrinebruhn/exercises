const texts = {
  da: {
    texts: [
      { text: "Café Nord", location: ".title" },
      {
        text: "Hyggelig café i hjertet af København",
        location: ".subtitle",
      },
      {
        text: "Velkommen til Café Nord",
        location: ".hero-title",
      },
      {
        text: "Vi serverer frisk kaffe, hjemmelavet kage og lækker brunch hver dag.",
        location: ".hero-text",
      },
      {
        text: "Se menu",
        location: ".button-text",
      },
      {
        text: "Om os",
        location: ".about-title",
      },
      {
        text: "Café Nord er et hyggeligt sted, hvor du kan mødes med venner, arbejde eller bare nyde en god kop kaffe.",
        location: ".about-text",
      },
      {
        text: "Vi glæder os til at se dig!",
        location: ".footer-text",
      },
    ],
  },

  en: {
    texts: [
      { text: "Café Nord", location: ".title" },
      {
        text: "A cozy café in the heart of Copenhagen",
        location: ".subtitle",
      },
      {
        text: "Welcome to Café Nord",
        location: ".hero-title",
      },
      {
        text: "We serve fresh coffee, homemade cake and delicious brunch every day.",
        location: ".hero-text",
      },
      {
        text: "View menu",
        location: ".button-text",
      },
      {
        text: "About us",
        location: ".about-title",
      },
      {
        text: "Café Nord is a cozy place where you can meet friends, work or simply enjoy a good cup of coffee.",
        location: ".about-text",
      },
      {
        text: "We look forward to seeing you!",
        location: ".footer-text",
      },
    ],
  },

  de: {
    texts: [
      { text: "Café Nord", location: ".title" },
      {
        text: "Ein gemütliches Café im Herzen von Kopenhagen",
        location: ".subtitle",
      },
      {
        text: "Willkommen im Café Nord",
        location: ".hero-title",
      },
      {
        text: "Wir servieren jeden Tag frischen Kaffee, hausgemachten Kuchen und leckeren Brunch.",
        location: ".hero-text",
      },
      {
        text: "Menü ansehen",
        location: ".button-text",
      },
      {
        text: "Über uns",
        location: ".about-title",
      },
      {
        text: "Café Nord ist ein gemütlicher Ort, an dem du Freunde treffen, arbeiten oder einfach eine gute Tasse Kaffee genießen kannst.",
        location: ".about-text",
      },
      {
        text: "Wir freuen uns auf deinen Besuch!",
        location: ".footer-text",
      },
    ],
  },
};

const locale = "da";

const languageSelect = document.querySelector("#language");

texts[locale].texts.forEach((item) => {
  document.querySelector(item.location).textContent = item.text;
});

languageSelect.addEventListener("change", (event) => {
  const selectedLanguage = event.target.value;

  texts[selectedLanguage].texts.forEach((item) => {
    document.querySelector(item.location).textContent = item.text;
  });
});
