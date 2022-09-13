export interface IExchange {
  id: string;
  name: string;
  year_established: number;
  country: string;
  image: string;
  trust_score: number;
  trade_volume_24h_btc: number;
}

export default function getExchangesData(page: number): Promise<IExchange[]> {
  return fetch(
    `https://api.coingecko.com/api/v3/exchanges/?per_page=100&page=${page}`
  ).then(resp => resp.json());
}
