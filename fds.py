from string import ascii_uppercase
lista = []
cont = 0
for i in ascii_uppercase:
    cont += 1
    if cont <= 2:
        lista.append([i, 'p'])
    else: 
        lista.append([i, 'b'])

print(lista)