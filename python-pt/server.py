import socket

serversocket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

host = socket.gethostbyname()
port = 444

serversocket.bind(host, port)

serversocket.listen(1)

while True:
    clientsocket, address = serversocket.accept()

    print('Received connection from ' % str(address))

    message = 'Hello! Thank you for connecting to the server' + '\r\n'
    clientsocket.send(message)

    clientsocket.close()
