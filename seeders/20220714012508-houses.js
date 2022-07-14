'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     await queryInterface.bulkInsert('houses', 
     [
      {
        name: 'Rumah Tipe 68 Jalan Petukangan Jakarta Selatan',
        location_id: 2,
        type_id: 1,
        status_id: 1,
        room: 2,
        bathroom: 1,
        square: 250,
        contact_name: "Budi Hasian",
        price: 800,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Apartemen Tipe 68 Asik',
        location_id: 6,
        type_id: 3,
        status_id: 1,
        room: 2,
        bathroom: 1,
        square: 50,
        contact_name: "Tomi",
        price: 500,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Rumah Tipe 50 Mantap',
        location_id: 7,
        type_id: 2,
        status_id: 2,
        room: 2,
        bathroom: 1,
        square: 50,
        contact_name: "Hendri",
        price: 600,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('houses', null, { truncate: true, cascade: true });
  }
};
