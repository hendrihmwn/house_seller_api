migrate_up :
	npx sequelize-cli db:migrate --config "config.json" --env "development"
migrate_down :
	npx sequelize-cli db:migrate:undo:all --config "config.json" --env "development"
npm_start :
	npm run start