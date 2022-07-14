function relations(sequelize) {
	const { 
		houses, 
		master_location, 
		master_status, 
		master_type
	} = sequelize.models;

	houses.hasOne(master_location, {
		foreignKey: 'id',
		targetKey: 'location_id',
		as: 'location'
	 });
	 houses.hasOne(master_status, {
		foreignKey: 'id',
		targetKey: 'status_id',
		as: 'status'
	 });
	 houses.hasOne(master_type, {
		foreignKey: 'id',
		targetKey: 'type_id',
		as: 'type'
	 });
}

module.exports = { relations };
