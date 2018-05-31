import http.client
import time
import random
import math
import json

ServerIP = "localhost"


while True:
	conn = http.client.HTTPConnection(ServerIP, '3000')
	food = round(random.random() * 200)
	conn.request("GET", "/api/ok?food={0}".format(food))
	res = conn.getresponse()
	data = res.read().decode('utf-8')
	print(data)
	data_parsed = json.loads(data)
	print(data_parsed['feed'])
	print(data_parsed['amount'])
	conn.close()
	time.sleep(5)
