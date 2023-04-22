import axios from 'axios';
import { GetOwnedGamesResponse, OwnedGames } from '../types';

const getOwnedGames = async (): Promise<OwnedGames> => {
  const url = 'http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/';

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
