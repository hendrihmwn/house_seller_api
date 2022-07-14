# Test Juragan Material

Mockup follow [this](https://xd.adobe.com/view/f3384423-ec6b-4b96-46b9-e424600fa82b-8509/screen/cc625826-f900-4c11-a6c7-b65ab1268cfb/)

## Installation

I build this rest API using node js with framework Express, for database using Mysql. How to run:

1. First install all dependencies

```bash
npm install
```
2. Create mysql database, named `juragan_material`. After that migrate table by:
```bash
npx sequelize-cli db:migrate --config "config.json" --env "development"
```
3. Seed the database
```bash
npx sequelize-cli db:seed:all --config "config.json" --env "development"
```
4. Setting the environment by creating file .env base on .env.example
5. Run the server, basically it is running on http://localhost:3000
```bash
npm run start
```

## Test
```bash
npm run test
```


## Usage

1. query houses/product\
`GET /houses` - query all houses/products\
`GET /houses/{id}` - query houses/products by id\
`GET /houses?location={location_id}&status={status_id}&type={type_id}` - query houses/products by filter location id, status id, and type id
\
`GET /houses?sort=asc` - sort data ascending\
`GET /houses?limit={number}` - limit data by number

2. query location\
`GET /location` - query all location\
`GET /location?name={string}` - query location base on name

3. query status\
`GET /status` - query all status\
`GET /status?name={string}` - query status base on name

4. query type\
`GET /type ` - query all location\
`GET /type?name={string}` - query type base on name

