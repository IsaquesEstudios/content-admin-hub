

# Corrigir Deploy no Coolify — 410 em Todas as Páginas

## Problema Identificado

O site retorna **410 Gone** para todas as páginas, incluindo a raiz (`/`). Isso acontece por dois motivos:

1. **Caminho errado no Nginx**: A configuracao atual usa `root /app/dist;`, mas o Coolify coloca os arquivos em `/usr/share/nginx/html`. Como o Nginx nao encontra nenhum arquivo, ele cai no fallback `@gone` (410).

2. **Build sem SSG**: O `package.json` ainda usa `"build": "vite build"` (build padrao), que nao gera os arquivos HTML pre-renderizados que o Nginx espera. Precisa ser `"build": "vite-react-ssg build"`.

## Plano de Correcao

### 1. Atualizar `package.json` — Script de Build

Alterar o script `build` para usar o comando SSG:

```text
Antes:  "build": "vite build"
Depois: "build": "vite-react-ssg build"
```

Isso garante que o build gere um arquivo `.html` para cada rota (ex: `servicos/index.html`, `blog/index.html`, etc.).

### 2. Atualizar `nginx.conf` — Corrigir o `root`

Alterar a diretiva `root` para apontar para o diretorio correto do Coolify:

```text
Antes:  root /app/dist;
Depois: root /usr/share/nginx/html;
```

O restante da configuracao do Nginx permanece igual (try_files, cache, gzip, 410, etc.).

### 3. Apos o Deploy — Acao Manual no Coolify

Depois que as alteracoes forem aplicadas ao codigo:

1. **Copiar o conteudo atualizado do `nginx.conf`** para o campo "Custom Nginx Configuration" no Coolify (com o novo `root`)
2. Certificar que as **variaveis de ambiente** estao configuradas:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_PUBLISHABLE_KEY`
   - `VITE_SUPABASE_PROJECT_ID`
3. Clicar em **Redeploy**

### Resultado Esperado

- A rota `/` servira o `index.html` pre-renderizado com todo o conteudo HTML visivel
- Rotas validas como `/servicos`, `/blog`, `/contato` servirao seus respectivos HTMLs
- Rotas inexistentes continuarao retornando **410 Gone**
- `Ctrl+U` mostrara HTML completo ao inves de um `<div id="root"></div>` vazio

## Detalhes Tecnicos

Arquivos modificados:
- `package.json` — linha 8: `"build": "vite-react-ssg build"`
- `nginx.conf` — linha 3: `root /usr/share/nginx/html;`

