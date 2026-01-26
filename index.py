import os

# Caminho da pasta
PASTA = "public/imagens/renomear"

# Extensões de imagem permitidas
EXTENSOES = (".jpg", ".jpeg", ".png", ".webp", ".gif")

# Lista e ordena os arquivos
arquivos = sorted([
    f for f in os.listdir(PASTA)
    if f.lower().endswith(EXTENSOES)
])

for index, nome_arquivo in enumerate(arquivos, start=1):
    extensao = os.path.splitext(nome_arquivo)[1]
    novo_nome = f"galeria-{index}{extensao}"

    caminho_antigo = os.path.join(PASTA, nome_arquivo)
    caminho_novo = os.path.join(PASTA, novo_nome)

    os.rename(caminho_antigo, caminho_novo)
    print(f"{nome_arquivo} → {novo_nome}")

print("✅ Renomeação concluída!")
