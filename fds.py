import json
import pyperclip
with open(r'src\dados.json', mode='r', encoding="UTF-8") as file:
    dados = json.loads(file.read())

lista = []
for c,fds in dados.items():
    if c not in ('A','B'):
        for n in fds:
            lista.append(n['Nome'])

print(lista)

string = ''

for fds in lista:
    string += f'- {fds}\n'
pyperclip.copy(string)