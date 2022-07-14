function relations(sequelize) {
	const { 
		houses, 
		master_location, 
		master_status, 
		master_type
	} = sequelize.models;

	houses.hasOne(master_location, {
		foreignKey: 'location_id',
		targetKey: 'id'
	 });
	 houses.hasOne(master_status, {
		foreignKey: 'status_id',
		targetKey: 'id'
	 });
	 houses.hasOne(master_type, {
		foreignKey: 'type_id',
		targetKey: 'id'
	 });
}

module.exports = { relations };
