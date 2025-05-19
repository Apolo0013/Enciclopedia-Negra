from string import ascii_uppercase
fds = '{imgFoto}'
fds2 = '{Scroll}'
lista = []
lista2 = []
for w in ascii_uppercase:
    lista2.append(w)

for letra in ascii_uppercase:
    lista.append('Ref'+letra+'')

for i, letra in enumerate(ascii_uppercase):
    print(f'<Card refe={lista[i]} Nome="Apolonio Guilherme Lima da Silva." img={fds} letra="{letra}"></Card>')
print('\n')
for i in lista:
    print(f'const {i} = useRef()')