import axios from 'axios';
import { GetOwnedGamesResponse, OwnedGames } from '../types';

const getOwnedGames = async (): Promise<OwnedGames> => {
  const url = 'http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/';
  // '?key=E2DA8C65D7A79D392F89C609BA0CF86D&steamid=76561198025429116&format=json',

  const result = await axios.get<GetOwnedGamesResponse>(url, {
    params: {
      key: '',
      steamid: ''
    },
    maxBodyLength: Infinity
  });

  return result.data.response;
};

export default {
  getOwnedGames
}
