export enum QUERY_KEY {}

export enum QUERY_CACHE_TIME {
  INFINITE = Infinity,
  HOUR_1 = 1000 * 60 * 60,
  MIN_10 = 1000 * 60 * 10,
  MIN_5 = 1000 * 60 * 5,
  MIN_1 = 1000 * 60 * 1,
  SEC_30 = 1000 * 30,
  SEC_10 = 1000 * 10,
  NO_CACHE = 0,
}
