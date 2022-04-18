import socket

s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
s.settimeout(5)

host = input('Please enter the IP you want to scan: ')
port = int(input('Please enter the port you want to scan: '))


def port_scanner(p):
    if s.connect_ex((host, p)):
        print('The port is closed')
    else:
        print('The port is open')


port_scanner(port)
