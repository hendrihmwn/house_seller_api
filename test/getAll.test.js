const { housesLogic, locationLogic, statusLogic, typeLogic } = require('../logics/index');

/* global jest, describe, test, expect */
describe('How to get houses list', () => {
  test('CASE-01 : [Success] Get All list houses', async () => {
    expect(await housesLogic.queryHouse({ name: '' },{ sort: 'ASC' })).toEqual(
        expect.arrayContaining([
          expect.objectContaining({id: 1}),
          expect.objectContaining({id: 2})
        ])
    );
  })
  test('CASE-02 : [Success] Get list houses by id 1', async () => {
    expect(await housesLogic.getHouseById(1)).toEqual(
        expect.objectContaining({id: 1}),
    )
  })
  test('CASE-03 : [Success] Get All list houses by filter', async () => {
    expect(await housesLogic.queryHouse({ name: '', location: 2, status: 1, type: 1 },{ sort: 'ASC' })).toEqual(
        expect.arrayContaining([
          expect.objectContaining({location_id: 2, status_id: 1, type_id: 1})
        ])
    );
  })
})

describe('How to get location list', () => {
    test('CASE-01 : [Success] Get All list location', async () => {
      expect(await locationLogic.queryLocation({ name: '' },{ sort: 'ASC' })).toEqual(
          expect.arrayContaining([
            expect.objectContaining({id: 1}),
            expect.objectContaining({id: 2})
          ])
      );
    })
    test('CASE-02 : [Success] Get list location by id 1', async () => {
      expect(await locationLogic.getLocationById(1)).toEqual(
          expect.objectContaining({id: 1}),
      )
    })
})

describe('How to get status list', () => {
    test('CASE-01 : [Success] Get All list status', async () => {
      expect(await statusLogic.queryStatus({ name: '' },{ sort: 'ASC' })).toEqual(
          expect.arrayContaining([
            expect.objectContaining({id: 1}),
            expect.objectContaining({id: 2})
          ])
      );
    })
    test('CASE-02 : [Success] Get list status by id 1', async () => {
      expect(await statusLogic.getStatusById(1)).toEqual(
          expect.objectContaining({id: 1}),
      )
    })
})

describe('How to get type list', () => {
    test('CASE-01 : [Success] Get All list type', async () => {
      expect(await typeLogic.queryType({ name: '' },{ sort: 'ASC' })).toEqual(
          expect.arrayContaining([
            expect.objectContaining({id: 1}),
            expect.objectContaining({id: 2})
          ])
      );
    })
    test('CASE-02 : [Success] Get list type by id 1', async () => {
      expect(await typeLogic.getTypeById(1)).toEqual(
          expect.objectContaining({id: 1}),
      )
    })
})