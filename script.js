// Elementi DOM
const fromLang = document.getElementById("from-lang");
const toLang = document.getElementById("to-lang");
const inputText = document.getElementById("input-text");
const outputText = document.getElementById("output-text");
const translateBtn = document.getElementById("translate-btn");
const clearBtn = document.getElementById("clear-btn");
const switchBtn = document.getElementById("switch-btn");

// Pulsante TRADUCI
translateBtn.addEventListener("click", () => {
  const text = inputText.value.trim();
  const source = fromLang.value;
  const target = toLang.value;

  if (!text) {
    outputText.value = "⚠️ Inserisci del testo da tradurre.";
    return;
  }

  // Funzione di traduzione simulata (sostituibile con API reale)
  translateWithLibreTranslate(text, source, target);
});

// Pulsante CANCELLA
clearBtn.addEventListener("click", () => {
  inputText.value = "";
  outputText.value = "";
});

// Pulsante SWITCH
switchBtn.addEventListener("click", () => {
  const tempLang = fromLang.value;
  fromLang.value = toLang.value;
  toLang.value = tempLang;

  // Inverti anche il contenuto se c'è testo
  if (outputText.value.trim()) {
    const tempText = inputText.value;
    inputText.value = outputText.value;
    outputText.value = tempText;
  }
});

// Simulazione di traduzione (sostituiscila con una vera API)
async function translateWithLibreTranslate(text, source, target) {
  outputText.value = "🔄 Traducendo...";

  try {
    const response = await fetch("https://libretranslate.com/translate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        q: text,
        source: source,
        target: target,
        format: "text"
      }),
    });

    const data = await response.json();

    if (data && data.translatedText) {
      outputText.value = data.translatedText;
    } else {
      outputText.value = "⚠️ Traduzione fallita.";
    }

  } catch (error) {
    console.error(error);
    outputText.value = "❌ Errore di rete o server.";
  }
}