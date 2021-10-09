from binance import Client
from config import APIKey, SecretKey

client  = Client(APIKey, SecretKey)

prices = client.get_all_tickers()

# for price in prices:
#     print(price["symbol"])

candles = client.get_klines(symbol='ADABTC', interval=Client.KLINE_INTERVAL_15MINUTE)
print(candles)