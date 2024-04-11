import { filterData, sortData, computeStats } from '../src/lib/dataFunction.js';
import { data as fakeData } from './data.js';


describe('test function `filterData`', () => {
  const expectedFilter = [{// 01_Volcán Arenal
    "id": "01_lugarTuristico",
    "name": "Volcán Arenal",
    "location": "Alajuela",
    "shortDescription": "Impresionante volcán activo con vistas panorámicas.",
    "tipoTurismo": "turismo de aventura",
    "gastoPromedio": 150,
  },];
  it('devuelve `filterData` con array de objetos key:value', () => {
    expect(filterData(fakeData, 'location', 'Alajuela')).toEqual(expectedFilter);
  });

});

describe('test function `sortData`', () => {
  const sortNameAsc = [{//02_Parque Nacional Manuel Antonio
    "id": "02_lugarTuristico",
    "name": "Parque Nacional Manuel Antonio",
    "location": "Puntarenas",
    "shortDescription": "Reserva natural con playas prístinas y diversidad de vida silvestre.",
    "tipoTurismo": "turismo de playa",
    "gastoPromedio": 120,
  },
  {//07_Teatro Nacional de Costa Rica
    "id": "07_lugarTuristico",
    "name": "Teatro Nacional de Costa Rica",
    "location": "San José",
    "shortDescription": "Joyero arquitectónico y cultural en el corazón de San José.",
    "tipoTurismo": "turismo cultural",
    "gastoPromedio": 50,
  },
  {// 01_Volcán Arenal
    "id": "01_lugarTuristico",
    "name": "Volcán Arenal",
    "location": "Alajuela",
    "shortDescription": "Impresionante volcán activo con vistas panorámicas.",
    "tipoTurismo": "turismo de aventura",
    "gastoPromedio": 150,
  },];
  const sortNameDesc = [{// 01_Volcán Arenal
    "id": "01_lugarTuristico",
    "name": "Volcán Arenal",
    "location": "Alajuela",
    "shortDescription": "Impresionante volcán activo con vistas panorámicas.",
    "tipoTurismo": "turismo de aventura",
    "gastoPromedio": 150,
  },
  {//07_Teatro Nacional de Costa Rica
    "id": "07_lugarTuristico",
    "name": "Teatro Nacional de Costa Rica",
    "location": "San José",
    "shortDescription": "Joyero arquitectónico y cultural en el corazón de San José.",
    "tipoTurismo": "turismo cultural",
    "gastoPromedio": 50,
  },
  {//02_Parque Nacional Manuel Antonio
    "id": "02_lugarTuristico",
    "name": "Parque Nacional Manuel Antonio",
    "location": "Puntarenas",
    "shortDescription": "Reserva natural con playas prístinas y diversidad de vida silvestre.",
    "tipoTurismo": "turismo de playa",
    "gastoPromedio": 120,
  },
  ];
  const sortPriceDesc = [{// 01_Volcán Arenal
    "id": "01_lugarTuristico",
    "name": "Volcán Arenal",
    "location": "Alajuela",
    "shortDescription": "Impresionante volcán activo con vistas panorámicas.",
    "tipoTurismo": "turismo de aventura",
    "gastoPromedio": 150,
  },
  {//02_Parque Nacional Manuel Antonio
    "id": "02_lugarTuristico",
    "name": "Parque Nacional Manuel Antonio",
    "location": "Puntarenas",
    "shortDescription": "Reserva natural con playas prístinas y diversidad de vida silvestre.",
    "tipoTurismo": "turismo de playa",
    "gastoPromedio": 120,
  },
  {//07_Teatro Nacional de Costa Rica
    "id": "07_lugarTuristico",
    "name": "Teatro Nacional de Costa Rica",
    "location": "San José",
    "shortDescription": "Joyero arquitectónico y cultural en el corazón de San José.",
    "tipoTurismo": "turismo cultural",
    "gastoPromedio": 50,
  },
  ];
  const sortPriceAsc = [{//07_Teatro Nacional de Costa Rica
    "id": "07_lugarTuristico",
    "name": "Teatro Nacional de Costa Rica",
    "location": "San José",
    "shortDescription": "Joyero arquitectónico y cultural en el corazón de San José.",
    "tipoTurismo": "turismo cultural",
    "gastoPromedio": 50,
  },
  {//02_Parque Nacional Manuel Antonio
    "id": "02_lugarTuristico",
    "name": "Parque Nacional Manuel Antonio",
    "location": "Puntarenas",
    "shortDescription": "Reserva natural con playas prístinas y diversidad de vida silvestre.",
    "tipoTurismo": "turismo de playa",
    "gastoPromedio": 120,
  },
  {// 01_Volcán Arenal
    "id": "01_lugarTuristico",
    "name": "Volcán Arenal",
    "location": "Alajuela",
    "shortDescription": "Impresionante volcán activo con vistas panorámicas.",
    "tipoTurismo": "turismo de aventura",
    "gastoPromedio": 150,
  },];
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
  const expectCompute = [{
    "tipoTurismo": "turismo de playa",
    "cantidad": 1,
    "porcentaje": 33.333333333333336,
  },
  {
    "tipoTurismo": "turismo cultural",
    "cantidad": 1,
    "porcentaje": 33.333333333333336,
  },
  {
    "tipoTurismo": "turismo de aventura",
    "cantidad": 1,
    "porcentaje": 33.333333333333336,
  },];
  it('devuelve `computeStats` con un array de tipo turismo', () => {
    expect(computeStats(fakeData)).toEqual(expectCompute);
  });
});