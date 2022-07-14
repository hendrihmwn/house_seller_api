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
     await queryInterface.bulkInsert('master_locations', 
     [
      {
        name: 'Jakarta Pusat',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Jakarta Selatan',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Jakarta Timur',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Jakarta Barat',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Jakarta Utara',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Bekasi',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Depok',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Bogor',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Tangerang',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('master_locations', null, { truncate: true, cascade: true });
  }
};
