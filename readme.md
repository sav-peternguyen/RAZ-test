# RAZ Test Nodejs

## Installation

App requires
 - [Node.js](https://nodejs.org/)
 - [Mysql](https://www.mysql.com/) 


Install the dependencies start the server.

```sh
npm i
```

Config environments

```sh
DB_USERNAME="MYSQL_USERNAME"
DB_PASSWORD="MYSQL_PASSWORD"
DB_NAME="MYSQL_DATABASE_NAME"
DB_HOST="MYSQL_HOST"
JWT_SECRET="JSONWEBTOKEN_SECRET_KEY"
```

Config migrate (config/config.json)

```sh
"username": "MYSQL_USERNAME",
"password": "MYSQL_PASSWORD",
"database": "MYSQL_DATABASE_NAME",
"host": "MYSQL_HOST",
"dialect": "mysql"
```

## Development
Run app:

```sh
npm run start
```