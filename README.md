# SongBuster

Una semplice applicazione scritta in React che permette di gestire il proprio catalogo di musica.

## Come avviare l'applicazione | Server

Apri un terminale e recati nella directory _SongBuster_. A questo punto, utilizza il comando `npm install` per scaricare tutte le dependencies necessarie all'avvio del server. Terminato il download, utilizza il comando `npm run dev` per avviare il server.

## Come avviare l'applicazione | Client

Una volta avviato il server, apri un'altra tab nel terminale (non chiudere quella in cui è attivo il server!) ed esegui i seguenti comandi:

```
cd frontend

npm install

npm run dev
```

Una volta fatto tutto ciò, l'applicazione può essere utilizzata in `http://localhost:5173`.

## Sezioni

### Home

La pagina principale (`http://localhost:5173` oppure `http://localhost:5173/home`) permette di vedere tutti gli album presenti nel catalogo, di filtrarli e di cercare direttamente il nome di un artista, un album o la data di uscita.

### Aggiungi

In questa sezione (`http://localhost:5173/add`) è possibile aggiungere un nuovo album con le rispettive informazioni, guardando anche direttamente una preview di come verrà salvato all'interno dell'applicazione.

### PDF

In questa sezione (`http://localhost:5173/pdf`) è possibile scaricare un pdf con una tabella contenente tutti gli album "desiderati", cioè che non si possiedono ancora ma in un futuro verranno acquistati.
