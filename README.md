# 🌍 GiordanoTranslator

**GiordanoTranslator** è un'applicazione web di traduzione multilingua sviluppata con HTML, CSS e JavaScript.  
Supporta 9 lingue principali: inglese, italiano, spagnolo, francese, tedesco, giapponese, cinese, arabo e russo.

🧠 Progetto ideato per imparare a integrare un'interfaccia frontend con un servizio di traduzione automatica tramite API.

> ⚠️ **Nota importante:**  
> Attualmente la traduzione **non funziona in modo stabile** perché l'app si appoggia a un'API esterna gratuita (LibreTranslate) **senza un backend proprio**.  
> Questo può causare errori di rete o limiti di utilizzo. Per una versione realmente funzionante, si consiglia di collegare il progetto a un server affidabile o a un servizio API come Google Cloud Translation.

---

## ✨ Caratteristiche

- Tema scuro con dettagli in giallo ocra
- UI reattiva e ottimizzata per dispositivi mobili
- Effetto *pop-up* su tutti i pulsanti cliccabili
- Switch istantaneo tra lingua di origine e destinazione senza perdere il testo
- Struttura modulare pronta per essere collegata a una API reale

---

## 🚀 Come usarlo

1. Clona il repository o apri la pagina GitHub Pages:
2. Inserisci il testo da tradurre
3. Seleziona la lingua di origine e quella di destinazione
4. Clicca su "Traduci"

---

## 🔧 Come collegare una vera API

Per rendere il traduttore realmente funzionante, è necessario:

- Usare un server proxy backend per comunicare con un'API come:
- [Google Translate API](https://cloud.google.com/translate)
- [LibreTranslate (self-hosted o con chiave privata)](https://libretranslate.com/)
- Implementare CORS correttamente (se auto-hostato)
- Aggiungere autenticazione e limiti di richiesta per evitare blocchi

---

## 🛠 Tecnologie usate

- **HTML5**, **CSS3 (custom dark theme)**  
- **JavaScript (vanilla)**  
- API REST via `fetch()` (LibreTranslate)

---

## 📜 Licenza

Progetto open-source rilasciato sotto licenza **MIT**.  
Se lo modifichi, lasciami un *credit* da qualche parte 😉

---

## 🙋🏻‍♂️ Autore

Realizzato da **Giordano (alias Francesco)** –  
_19 anni, appassionato di informatica, sempre in formazione._

> 💡 Contattami per collaborazioni, consigli o suggerimenti!
