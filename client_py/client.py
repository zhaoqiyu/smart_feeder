import http.client
import time

ServerIP = "192.241.249.116"


while True:
	conn = http.client.HTTPConnection(ServerIP, '3000')
	conn.request("GET", "/api/ok")
	res = conn.getresponse()
	print(res.read().decode('utf-8'))
	conn.close()
	time.sleep(5)
