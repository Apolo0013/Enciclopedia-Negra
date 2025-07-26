from fpdf import FPDF

# Criar um PDF com perguntas e respostas
pdf = FPDF()
pdf.add_page()
pdf.set_auto_page_break(auto=True, margin=15)
pdf.set_font("Arial", size=10)

# Conteúdo
conteudo = [
    ("1°) Qual a natureza do batimento cardíaco e como esses batimentos são regulados?",
     "O batimento cardíaco é a contração rítmica e coordenada do músculo cardíaco. Ele é regulado por impulsos elétricos gerados no nó sinoatrial (nó SA), localizado no átrio direito do coração. Esses impulsos controlam a sequência de contrações dos átrios e ventrículos, promovendo o fluxo sanguíneo. O sistema nervoso autônomo (simpático e parassimpático) também influencia a frequência cardíaca, aumentando ou diminuindo conforme a necessidade do corpo."),

    ("2°) Como está dividido o coração humano, quais os vasos de entrada e saída e que tipo de sangue cada um conduz?",
     "O coração humano é dividido em quatro câmaras: dois átrios (direito e esquerdo) e dois ventrículos (direito e esquerdo). O átrio direito recebe sangue pobre em oxigênio pelas veias cavas (superior e inferior), enquanto o átrio esquerdo recebe sangue rico em oxigênio pelas veias pulmonares. O ventrículo direito envia o sangue pobre em oxigênio para os pulmões pela artéria pulmonar, e o ventrículo esquerdo envia sangue rico em oxigênio para o corpo pela artéria aorta."),

    ("3°) O que são sístole e diástole? Como esses processos se revezam no coração?",
     "A sístole é a fase de contração do coração, quando o sangue é bombeado para fora das câmaras cardíacas. A diástole é a fase de relaxamento, quando o coração se enche de sangue. Esses processos se revezam de forma contínua: primeiro os átrios se contraem (sístole atrial), depois os ventrículos (sístole ventricular), seguidos pelo relaxamento geral (diástole), permitindo o enchimento para o próximo ciclo."),

    ("4°) Quais as diferenças estruturais e funcionais entre veias e artérias? Por que as artérias têm parede mais grossa?",
     "As artérias possuem paredes mais grossas e elásticas, pois transportam o sangue sob alta pressão que sai diretamente do coração. As veias, por outro lado, têm paredes mais finas e válvulas internas para evitar o refluxo, já que transportam sangue de volta ao coração sob baixa pressão. As artérias precisam de resistência para suportar e manter a pressão do sangue bombeado pelo coração, por isso suas paredes são espessas e musculosas."),

    ("5°) Em relação à fisiologia do exercício físico o que ocorre com os batimentos cardíacos e a pressão sanguínea em um indivíduo saudável em plena atividade física e após os exercícios? E em um indivíduo com hipertensão, taquicárdico ou com arritmia cardíaca?",
     "Durante o exercício físico, os batimentos cardíacos e a pressão sanguínea aumentam para atender à maior demanda de oxigênio nos músculos. Após o exercício, esses valores voltam ao normal gradualmente. Em indivíduos com hipertensão, taquicardia ou arritmia, esse ajuste pode ser ineficiente ou exagerado, representando riscos. Por isso, é importante o acompanhamento médico para prática segura de atividades físicas nesses casos.")
]

# Adicionar conteúdo ao PDF
for pergunta, resposta in conteudo:
    pdf.set_font("Arial", "B", 10)
    pdf.multi_cell(0, 4, pergunta, ln=True)
    pdf.ln(3)
    pdf.set_font("Arial", size=10)
    pdf.multi_cell(0, 4 , resposta, ln=True)
    pdf.ln(12)

# Salvar PDF
caminho_arquivo = "Sistema_Cardiovascular.pdf"
pdf.output(caminho_arquivo)
