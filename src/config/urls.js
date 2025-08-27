import AuthKeys from '../constants/AuthKeys';

const BASE_URL = 'https://api.weatherapi.com/v1';

export const getApiUrl = endpoints => BASE_URL + endpoints;
export const Current_Api = lat_long =>
  getApiUrl(`/current.json?q=${lat_long}&key=${AuthKeys.Weather_API_Key}`);

export const Forecast_Api = (lat_long, days) =>
  getApiUrl(
    `/forecast.json?q=${lat_long}&days=${days}&key=${AuthKeys.Weather_API_Key}`,
  );
