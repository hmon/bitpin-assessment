export interface Markets {
  id: number;
  currency1: Currency;
  currency2: Currency;
  tradable: boolean;
  for_test: boolean;
  otc_sell_percent: string;
  otc_buy_percent: string;
  otc_max_buy_amount: string;
  otc_max_sell_amount: string;
  order_book_info: PriceInfo;
  internal_price_info: PriceInfo;
  price_info: PriceInfo;
  price: string;
  title: string;
  code: string;
  title_fa: string;
  trading_view_source: TradingViewSource;
  trading_view_symbol: string;
  otc_market: boolean;
  text: string;
  volume_24h: string;
  market_cap: string;
  circulating_supply: string;
  all_time_high: string;
}

export interface Currency {
  id: number;
  title: string;
  title_fa: string;
  code: string;
  tradable: boolean;
  for_test: boolean;
  image: string;
  decimal: number;
  decimal_amount: number;
  decimal_irt: number;
  color: string;
  high_risk: boolean;
  show_high_risk: boolean;
  withdraw_commission: string;
  tags: Tag[];
  etf: boolean;
  for_binvest: boolean;
}

export interface Tag {
  name: TagName;
}

export enum TagName {
  STABLE_COIN = 'استیبل کوین',
  NFT = 'ان اف تی',
  FAN_TOKEN = 'توکن هواداری',
  DEFI = 'دیفای',
  METAVERSE = 'متاورس',
  MEME_COIN = 'میم کوین',
  WEB3 = 'وب ۳',
}

export interface PriceInfo {
  created_at: number | null;
  price: null | string;
  change: number | null;
  min: null | string;
  max: null | string;
  time: null | string;
  mean: null | string;
  value: null | string;
  amount: null | string;
}

export enum TradingViewSource {
  Binance = 'BINANCE',
  Gateio = 'GATEIO',
  Kraken = 'KRAKEN',
  Kucoin = 'KUCOIN',
}
