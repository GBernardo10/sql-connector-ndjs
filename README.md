<!-- markdownlint-enable MD000 -->

# Nodejs APIResfull servidor HTTP comunicação com base PostgreeSQL

## Tarefas

-   **Servidor HTTP**

-   Schemas
-   Models
-   Relacionamento Obejto Relacional
-   CRUD
-   Socket.io

---

Servidor HTTP utilizando o node para construir esse sistema REST.

Conexão com o Postgre e persistindo dados na base de dados.

## A Requisição

---

Header (Cabeçalho)
A requisição é um **“documento”** em texto plano composto por um cabeçalho (que define a comunicação, requerido) e os dados (opcional, depende da aplicação).

O cabeçalho é bem simples, a primeira linha contém a informação principal da requisição, ou seja, qual a sua solicitação (método), o que está sendo solicitado (arquivo/página/recurso a ser acessado) e padrão de comunicação que no nosso caso é o HTTP/1.1, a segunda linha é o endereço de host do servidor que irá responder a sua solicitação, veja o exemplo:.

    GET /index.html HTTP/1.1
    Host: google.com
