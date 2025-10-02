# Chronicles Backend

## Users

```
user@bbcag.ch //  user1234
admin@bbcag.ch // admin1234
```

## URLS

- http://localhost:8080/swagger-ui/index.html

## Build und Start der Container

Um die Docker-Container zu erstellen und das Projekt neu zu bauen:

`docker compose up -d --build`
Erstellt und startet die Container und erzwingt einen neuen Build der Images, selbst wenn keine Änderungen festgestellt werden. (Falls Source Code geändert hat, sonst kann --build weggelassen werden)

Um die Docker-Container zu stoppen und zu entfernen:
`docker compose down --remove-orphans`

remove-orphans entfernt auch alle nicht verwendeten Container, die nicht in der docker-compose.yml definiert sind.

## Datenbank neu erstellen

`docker volume rm chronicles-backend-data`
Docker Image darf dabei nicht gestartet sein.
