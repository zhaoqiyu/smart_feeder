import http.client
import time
import serial


ServerIP = "192.241.249.116"

ser= serial.Serial('/dev/ttyACM0', 9600)

while True:
	raw_data = ser.readline()
	if raw_data is not None:
		data = float(raw_data)
		conn = http.client.HTTPConnection(ServerIP, '3000')
		conn.request("GET", "/api/ok?food={0}".format(data))
		res = conn.getresponse()
		res = res.read().decode('utf-8')
		data_parsed = json.loads(res)
		print(data_parsed['feed'])
		print(data_parsed['amount'])

		conn.close()
		time.sleep(5)

