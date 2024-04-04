export const filterData = (data, filterBy, value) => {
  return data.filter(tour => tour[filterBy] === value);
};

export const sortData = (data, sortBy, sortOrder) => {
  if (sortBy === 'name') {
    if (sortOrder === 'asc') {
      return data.sort((a, b) => a.name.localeCompare(b.name));
    } else {
      return data.sort((a, b) => b.name.localeCompare(a.name));
    }
  }
  else {
    if (sortOrder === 'asc') {
      return data.sort((a, b) => a[sortBy] - b[sortBy]);
    } else {
      return data.sort((a, b) => b[sortBy] - a[sortBy]);
    }
  }
};

export const computeStats = (data) => {//data completa 24, o data filtrada 2 50% 50%
  const computeTurismo = data.reduce((num, item) => {
    if (num[item.tipoTurismo]) {
      num[item.tipoTurismo] += 1;
    } else {
      num[item.tipoTurismo] = 1;
    }
    return num;
  }, {});
  const arrayTurismo = Object.entries(computeTurismo).map(([tipo, cantidad]) => ({
    tipoTurismo: tipo,
    cantidad,
    porcentaje: ((Number(cantidad) * 100) / data.length),
  }));
  if (!arrayTurismo.some(typeTour => typeTour.tipoTurismo === "turismo de playa")) {
    arrayTurismo.push({ tipoTurismo: "turismo de playa", cantidad: 0, porcentaje: 0 });
  }
  if (!arrayTurismo.some(typeTour => typeTour.tipoTurismo === "turismo de aventura")) {
    arrayTurismo.push({ tipoTurismo: "turismo de aventura", cantidad: 0, porcentaje: 0 });
  }
  if (!arrayTurismo.some(typeTour => typeTour.tipoTurismo === "turismo cultural")) {
    arrayTurismo.push({ tipoTurismo: "turismo cultural", cantidad: 0, porcentaje: 0 });
  }
  return arrayTurismo;
};