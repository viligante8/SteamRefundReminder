export interface GetOwnedGamesResponse {
  response: OwnedGames;
}

export interface OwnedGames {
  game_count: number;
  games:      Game[];
}

export interface Game {
  appid:                    number;
  playtime_forever:         number;
  playtime_windows_forever: number;
  playtime_mac_forever:     number;
  playtime_linux_forever:   number;
  rtime_last_played:        number;
  playtime_2weeks?:         number;
}
