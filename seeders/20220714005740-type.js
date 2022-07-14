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
     await queryInterface.bulkInsert('master_types', 
     [
      {
        name: 'House',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Townhouse',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Apartment',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Room',
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
     await queryInterface.bulkDelete('master_types', null, { truncate: true, cascade: true });
  }
};
