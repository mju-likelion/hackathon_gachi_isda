import { atom } from 'recoil';

export const startStation = atom({
  key: 'startStation',
  default: '서울',
});

export const arrivalStation = atom({
  key: 'arrivalStation',
  default: '부산',
});

export const manyPerson = atom({
  key: 'manyPerson',
  default: 0,
});

export const startDate = atom({
  key: 'startDate',
  default: [],
});

export const seatName = atom({
  key: 'seatName',
  default: '',
});
