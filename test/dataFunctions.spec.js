import { filterData, sortData, computeStats } from '../src/lib/dataFunction.js';
import { data as fakeData } from './data.js';

const vArenal = {// 01_Volcán Arenal
  "id": "01_lugarTuristico",
  "name": "Volcán Arenal",
  "location": "Alajuela",
  "shortDescription": "Impresionante volcán activo con vistas panorámicas.",
  "tipoTurismo": "turismo de aventura",
  "gastoPromedio": 150,
}
const iTortuga = {//11_Isla Tortuga
  "id": "11_lugarTuristico",
  "name": "Isla Tortuga",
  "location": "Puntarenas",
  "shortDescription": "Isla paradisíaca con aguas cristalinas y zonas acuáticas.",
  "tipoTurismo": "turismo de playa",
  "gastoPromedio": 120,
}
const mAntonio = {//02_Parque Nacional Manuel Antonio
  "id": "02_lugarTuristico",
  "name": "Parque Nacional Manuel Antonio",
  "location": "Puntarenas",
  "shortDescription": "Reserva natural con playas prístinas y diversidad de vida silvestre.",
  "tipoTurismo": "turismo de playa",
  "gastoPromedio": 120,
}
const tNacional = {//07_Teatro Nacional de Costa Rica
  "id": "07_lugarTuristico",
  "name": "Teatro Nacional de Costa Rica",
  "location": "San José",
  "shortDescription": "Joyero arquitectónico y cultural en el corazón de San José.",
  "tipoTurismo": "turismo cultural",
  "gastoPromedio": 50,
}
const noPlaya = [tNacional, vArenal]
const noAventura = [iTortuga, tNacional]
const noCultura = [iTortuga, vArenal]

describe('test function `filterData`', () => {
  const expectedFilter = [vArenal,];
  it('devuelve `filterData` con array de objetos key:value', () => {
    expect(filterData(fakeData, 'location', 'Alajuela')).toEqual(expectedFilter);
  });

});

describe('test function `sortData`', () => {
  const sortNameAsc = [iTortuga, mAntonio, tNacional, vArenal];
  const sortNameDesc = [vArenal,tNacional,mAntonio,iTortuga];
  const sortPriceDesc = [vArenal, mAntonio, iTortuga, tNacional];
  const sortPriceAsc = [tNacional, mAntonio, iTortuga, vArenal];
  it('devuelve `SortOf` con un array ordenado de objetos key:value', () => {
    expect(sortData(fakeData, 'name', 'asc')).toEqual(sortNameAsc);
  });
  it('sortNameDesc', () => {
    expect(sortData(fakeData, 'name', 'desc')).toEqual(sortNameDesc);
  });
  it('sortPriceAsc', () => {
    expect(sortData(fakeData, 'gastoPromedio', 'asc')).toEqual(sortPriceAsc);
  });
  it('sortPriceDesc', () => {
    expect(sortData(fakeData, 'gastoPromedio', 'desc')).toEqual(sortPriceDesc);
  });
});

describe('test function `computeStats`', () => {
  const expectFakeData = [{
    "tipoTurismo": "turismo de aventura",
    "cantidad": 1,
    "porcentaje": 25,
  },
  {
    "tipoTurismo": "turismo de playa",
    "cantidad": 2,
    "porcentaje": 50,
  },
  {
    "tipoTurismo": "turismo cultural",
    "cantidad": 1,
    "porcentaje": 25,
  },];
  const expectnoAventura = [
    {
      "tipoTurismo": "turismo de playa",
      "cantidad": 1,
      "porcentaje": 50,
    },
    {
      "tipoTurismo": "turismo cultural",
      "cantidad": 1,
      "porcentaje": 50,
    },
    {
      "tipoTurismo": "turismo de aventura",
      "cantidad": 0,
      "porcentaje": 0,
    },
  ];
  const expectnoPlaya = [
    {
      "tipoTurismo": "turismo cultural",
      "cantidad": 1,
      "porcentaje": 50,
    },
    {
      "tipoTurismo": "turismo de aventura",
      "cantidad": 1,
      "porcentaje": 50,
    },
    {
      "tipoTurismo": "turismo de playa",
      "cantidad": 0,
      "porcentaje": 0,
    },
  ];
  const expectnoCultura = [
    {
      "tipoTurismo": "turismo de playa",
      "cantidad": 1,
      "porcentaje": 50,
    },
    {
      "tipoTurismo": "turismo de aventura",
      "cantidad": 1,
      "porcentaje": 50,
    },
    {
      "tipoTurismo": "turismo cultural",
      "cantidad": 0,
      "porcentaje": 0,
    },
  ];
  it('resolve `computeStats`4 items with 2 of the same type of tourism', () => {
    expect(computeStats(fakeData)).toEqual(expectFakeData);
  });
  it('resolve `computeStats` without adventure type of tourism', () => {
    expect(computeStats(noAventura)).toEqual(expectnoAventura);
  });
  it('resolve `computeStats` without beach type of tourism', () => {
    expect(computeStats(noPlaya)).toEqual(expectnoPlaya);
  });
  it('resolve `computeStats` without culture type of tourism', () => {
    expect(computeStats(noCultura)).toEqual(expectnoCultura);
  });
});
