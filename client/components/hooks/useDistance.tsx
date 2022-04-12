import { round } from '@turf/helpers';

const useDistance = (coords1: number[], coords2: number[]): number => {
  const [lng1, lat1] = coords1;
  const [lng2, lat2] = coords2;

  if (lat1 == lat2 && lng1 == lng2) {
    return 0;
  } else {
    const radlat1: number = (Math.PI * lat1) / 180;
    const radlat2: number = (Math.PI * lat2) / 180;
    const theta: number = lng1 - lng2;
    const radtheta: number = (Math.PI * theta) / 180;
    let dist: number =
      Math.sin(radlat1) * Math.sin(radlat2) +
      Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
    if (dist > 1) {
      dist = 1;
    }
    dist = Math.acos(dist);
    dist = (dist * 180) / Math.PI;
    dist = dist * 60 * 1.1515;
    dist = dist * 1.609344;
    return round(dist, 1);
  }
};

export { useDistance };
