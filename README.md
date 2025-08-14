# Harry Potter App - Frontend

Aplicação frontend desenvolvida em Angular que consome a API REST do serviço hp-personagens e interage com o Keycloak para autenticação via OAuth2/JWT.

## Funcionalidades

- Filtrar personagens de Harry Potter por nome ou casa.
- Fazer login/logout via Keycloak.
- Favoritar e desfavoritar personagens, com persistência no backend.

## Tecnologias Utilizadas

- Angular
- TypeScript
- Bootstrap
- Keycloak (OAuth2 + JWT)

--- 

## - Diagrama mostrando o fluxo de comunicação -
<img width="1338" height="588" alt="Image" src="https://github.com/user-attachments/assets/da5b37fd-b4e1-4c9f-9f80-4c453f77a0fd" />

## Como rodar o projeto

### Pré-requisitos

- Node.js 
- Angular CLI instalado globalmente:
```bash
npm install -g @angular/cli
```
- Backend hp-personagens rodando localmente
```bash
git clone https://github.com/Maysa0807/hp-personagens
```
- Servidor Keycloak configurado com o realm e client correspondentes

---

### Clonar o repositório
```bash
git clone https://github.com/Maysa0807/hp-frontend.git
cd hp-frontend
```
---

### Instalar dependências 
```bash 
npm install
```
---

### Rodar o projeto
```bash
ng serve
```
---

O app estará disponível em: 
``` http://localhost:4200 ```


