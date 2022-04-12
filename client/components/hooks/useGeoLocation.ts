import { useState, useEffect } from 'react';

export interface location {
  loaded: boolean;
  coordinates: {
    lat: string;
    lng: string;
  };
}

const useGeoLocation = (): location => {
  const [location, setLocation] = useState<location>({
    loaded: false,
    coordinates: { lat: '', lng: '' },
  });

  const onSuccess = (location: {
    coords: { latitude: any; longitude: any };
  }) => {
    setLocation({
      loaded: true,
      coordinates: {
        lat: location.coords.latitude,
        lng: location.coords.longitude,
      },
    });
  };

  const onError = (error) => {
    setLocation({ ...location, loaded: false });
  };

  useEffect(() => {
    if (!('geolocation' in navigator)) {
      onError({
        code: 0,
        message: 'Geolocation not supported',
      });
    }

    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  }, []);

  return location;
};

export default useGeoLocation;
