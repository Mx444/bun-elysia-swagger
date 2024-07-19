# Elysia Prisma Swagger Project

Questo progetto utilizza [Elysia](https://elysiajs.com) come framework web, [Prisma](https://www.prisma.io) come ORM, [Swagger](https://swagger.io) per la documentazione delle API e [Bun](https://bun.sh) come runtime JavaScript/TypeScript.

## Sommario

- [Installazione](#installazione)
- [Configurazione del Database](#configurazione-del-database)
- [Uso](#uso)
- [Contribuire](#contribuire)
- [Licenza](#licenza)
- [Ringraziamenti](#ringraziamenti)

## Installazione

Per installare e configurare il progetto, segui questi passaggi:

1. **Clona il repository**

   ```bash
   git clone https://github.com/tuo-username/tuo-progetto.git
   ```

2. **Entra nella directory del progetto**

   ```bash
   cd tuo-progetto
   ```

3. **Installa le dipendenze usando Bun**
   ```bash
   bun install
   ```

## Configurazione del Database

Prima di eseguire le migrazioni, assicurati di avere un file `.env` nella root del progetto con la configurazione della connessione al database. Esempio di file `.env`:

```env
DATABASE_URL="postgresql://user:password@localhost:5432/mydatabase"
```

Esegui le migrazioni Prisma:

1. **Esegui le migrazioni Prisma**
   ```bash
   bun prisma migrate dev
   ```

## Uso

L'applicazione avvia un server sulla porta 3000. Puoi accedere ai seguenti endpoint:

- `GET /`: Endpoint di benvenuto.
- `GET /user`: Ottieni la lista di tutti gli utenti.
- `GET /user/:id`: Ottieni i dettagli di un utente specifico tramite ID.
- `POST /user`: Crea un nuovo utente.

### Esempio di Richiesta

**POST /user**

```bash
curl -X POST http://localhost:3000/user \
-H "Content-Type: application/json" \
-d '{"name": "John Doe", "email": "johndoe@example.com"}'
```

## Documentazione delle API

La documentazione delle API è disponibile all'indirizzo [http://localhost:3000/docs](http://localhost:3000/docs) grazie a Swagger.

## Contribuire

Se desideri contribuire al progetto, segui questi passaggi:

1. Fai un fork del progetto
2. Crea un branch per la tua feature (`git checkout -b feature/nome-feature`)
3. Esegui i test (`bun test`)
4. Committa le tue modifiche (`git commit -am 'Aggiungi una nuova feature'`)
5. Push del branch (`git push origin feature/nome-feature`)
6. Apri una pull request

## Licenza

Questo progetto è licenziato sotto la licenza MIT - vedi il file [LICENSE](LICENSE) per i dettagli.

## Ringraziamenti

- [Elysia](https://elysiajs.com) per il framework web.
- [Prisma](https://www.prisma.io) per l'ORM.
- [Swagger](https://swagger.io) per la documentazione delle API.
- [Bun](https://bun.sh) per il runtime JavaScript/TypeScript.
- [Altri progetti open-source](https://github.com/)

---

### Note:

1. **Installazione**:

   - Fornisce i dettagli su come clonare il repository e installare le dipendenze usando Bun.

2. **Configurazione del Database**:

   - Spiega come impostare il file `.env` per la configurazione del database e come eseguire le migrazioni Prisma.

3. **Uso**:

   - Spiega come utilizzare il progetto, con esempi di richieste e l'indirizzo della documentazione Swagger.

4. **Contribuire**:

   - Fornisce linee guida su come contribuire al progetto, creando un ambiente invitante per i contributori.

5. **Licenza**:

   - Specifica la licenza del progetto.

6. **Ringraziamenti**:
   - Menziona chi ha contribuito al progetto e le risorse utilizzate.
