export const fetchGeolocation = async (ipAddress?: string) => {
  const url = `https://geo.ipify.org/api/v2/country,city?apiKey=${process.env.NEXT_PUBLIC_GEOLOCATION_TOKEN}`;
  const formattedUrl = ipAddress ? url + `&ipAddress=${ipAddress}` : url;

  const response = await fetch(formattedUrl);
  const data = await response.json();

  return data;
};
