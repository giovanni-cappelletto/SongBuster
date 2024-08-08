## Legenda

### Modificare le informazioni relative agli album

Innanzitutto, trova l'album che vuoi modificare (magari aiutati utilizzando _Ctrl+F_). Successivamente, modifica le proprietà a tuo piacimento rispettando le regole qui sotto e mantenendo il formato JSON (tutte le stringhe devono essere all'interno delle **virgolette** "". Ricordati anche la **virgola** finale tra una proprietà e l'altra):

```javascript
{
    "title": "<string>",
    "artist": "<string>",
    "year": <int>,
    "type": "<CD || Vinile>"
    "url": "<string>",
    "owned": <bool>
}
```

**Nota!** Non cancellare per nessun motivo le parentesi quadre e grafe.

**Nota!** Per via delle CORS policies, alcune immagini potrebbero generare degli errori relativi all'algoritmo che permette di trovare il colore primario al loro interno. Prima di inserire un'immagine, assicurarti che tutto funzioni utilizzando la card preview.

### Aggiungere album

Se non vuoi utilizzare il form apposito, puoi utilizzare questa sezione anche per aggiungere nuovi album. La posizione non è importante, ma per semplicità scendi fino alla fine del file. A questo punto, posizione il cursore tra l'ultima parentesi "}" e la parentesi "]". Aggiungi quindi una virgola e apri nuovamente le parentesi grafe. Ora non ti basta che rispettare tutto il formato già descritto precedentemente.
