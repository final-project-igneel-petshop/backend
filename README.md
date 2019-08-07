# BoWowMeow Backend with Node.js, Express, Sequelize, Heroku

The backend is live on <https://bowwowmeow-api.herokuapp.com>.
<hr>

## Setup

Run the `yarn add sequelize` script first, and run `sequelize init` to initialize sequelize.


```sh
$ yarn add sequelize
$ sequelize init
```


Then install the packages. <br>
These are our package
```
$ yarn add bcrypt body-parser cors dotenv express fs handlebars jsonwebtoken mysql2 nodemailer sequelize-cli nodemon
```

After installation complete, you can insert new file `.env` then fill the env variables.

```txt
# change these
DB_HOST=127.0.0.1
DB_NAME=bowwowmeow
SECRET=secret
```
<hr>

## Development

```sh
yarn start
```

Then open `http://localhost:3000`.

<hr>

## Deploying

You can use Heroku or Google Cloud Platform to deploy. Remember to change the environment variables as well.

```txt
DB_HOST=
DB_NAME=
SECRET=
```
<hr>

## Project Development Steps

```sh
mkdir projectname-backend
cd projectname-backend

yarn init -y

sequelize init
```

First we need to create database using this script
```
$ sequelize db:create
```
sequelize will automatically create database name use `DB_NAME`.
<br>
after database created, we need to make tables or models .
```
$ sequelize model:generate --name create-user --attributes fullName:string,email:string,password:string,phoneNumber:string,street:string,city:string,zipcode:integer
```
after adding new migration for adding user table. use this code for migrating user table to database
```
$ sequelize db:migrate
```
use same code to create `products` with a different attributes and `carts` table.
<br>
then use `db:migrate` to migrate new table to database.
<hr>

## License

MIT License