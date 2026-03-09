# Full Stack Open - Parte 0

Repositorio dedicado a los ejercicios del curso Full Stack Open de la Universidad de Helsinki.

## Ejercicios 0.4 - 0.6 (Diagramas)

### 0.4: Nuevo diagrama de nota
sequenceDiagram
    participant browser
    participant server

    Note over browser: El usuario escribe la nota y hace clic en "Save"

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
    activate server
    Note left of server: El servidor guarda la nueva nota en la base de datos
    server-->>browser: HTTP status code 302 (Redirección a /notes)
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes
    activate server
    server-->>browser: Documento HTML
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server-->>browser: Archivo CSS
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
    activate server
    server-->>browser: Archivo JavaScript
    deactivate server

    Note right of browser: El JS solicita los datos actualizados al servidor

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->>browser: [{ "content": "Nueva nota", "date": "2026-03-09" }, ... ]
    deactivate server

    Note right of browser: El navegador ejecuta el callback y renderiza las notas

### 0.5: Diagrama de aplicación de una sola página (SPA)
sequenceDiagram
    participant browser
    participant server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa
    activate server
    server-->>browser: Documento HTML (SPA)
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server-->>browser: Archivo CSS
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa.js
    activate server
    server-->>browser: Archivo JavaScript (spa.js)
    deactivate server

    Note right of browser: El JS solicita el JSON con los datos

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->>browser: [{ "content": "SPA es diferente", "date": "2026-03-09" }, ... ]
    deactivate server

    Note right of browser: El navegador renderiza las notas dinámicamente

### 0.6: Nueva nota en diagrama de aplicación de una sola página
sequenceDiagram
    participant browser
    participant server

    Note over browser: El usuario escribe y hace clic en "Save"
    Note right of browser: El JS añade la nota a la lista local y la re-renderiza en el DOM

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    Note left of server: El servidor recibe el JSON y guarda la nota
    server-->>browser: HTTP 201 Created (Confirmación)
    deactivate server

    Note right of browser: No hay más peticiones; la página se mantiene igual