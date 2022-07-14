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
     await queryInterface.bulkInsert('master_statuses', 
     [
      {
        name: 'Rent',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Buy',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Auction',
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
     await queryInterface.bulkDelete('master_statuses', null, { truncate: true, cascade: true });
  }
};
