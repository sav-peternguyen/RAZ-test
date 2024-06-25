# RAZ Test Nodejs

## Installation

App requires
 - [Node.js](https://nodejs.org/)
 - [Mysql](https://www.mysql.com/) 


Install the dependencies & devDependencies start the server.

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

Config sequelize-cli (config/config.json)

```sh
"username": "MYSQL_USERNAME",
"password": "MYSQL_PASSWORD",
"database": "MYSQL_DATABASE_NAME",
"host": "MYSQL_HOST",
"dialect": "mysql"
```

Init data example

```sh
npm run db:seed
```

Data example in seeders/

## Development
Run app:

```sh
npm run start
```