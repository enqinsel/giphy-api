import { httpService } from "./baseUrl"

export const getData = async (id) => {
  const getdata = await httpService(`search?api_key=TWKS9r7pyCHu12Zvbup60mPHIweITBZv&q=${id}&limit=25&offset=0&rating=g&lang=en`).then(response => response.data)
  return getdata;
}