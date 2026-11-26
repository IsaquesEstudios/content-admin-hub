# Eclipse LED

1. Design e ConteúdoPágina "Início" (Institucional): O layout, o esquema de cores e o estilo visual da página de referência (https://eclipseled.com.br/teste/) serão aplicados integralmente para a página inicial do projeto, garantindo uma identidade visual coesa.Conteúdo das Páginas: Aguardarei o fornecimento dos arquivos de texto (conteúdo) para as demais páginas (login, blog, etc.) para integrá-los ao design.Foco em SEO: A estrutura HTML será desenvolvida pensando em acessibilidade e performance para otimizar os rastreamentos de SEO.2. Rota de Administração e AutenticaçãoA rota de administração será configurada conforme solicitado, de forma discreta e segura.DetalheConfiguraçãoBackend (Supabase)Rota Secreta/user (Não será visível no menu principal)Configuração de Middleware (Frontend) para redirecionamento.Email de Acessoadmim@isaquesestudios.comSupabase Auth: Será o identificador único para permissão.Senha de AcessoYMP243GP6ofrB9ekaSupabase Auth: Credencial de login.PermissãoAdmin/SEO ManagerSupabase RLS (Row Level Security): Acesso total às tabelas de Blog e SEO, e acesso limitado (somente leitura ou nada) aos Treinos de usuários.3. Funcionalidades do Painel Admin (/user)O painel será dividido em duas áreas principais, ambas dependentes da configuração de permissão Admin no Supabase.A) Gerenciamento de SEO (Meta Tags)Para gerenciar o SEO das páginas institucionais existentes, será necessário criar uma tabela dedicada no Supabase.Tabela SupabaseCampos PrincipaisFuncionalidadeseo_metadatapage_slug (e.g., '/', '/blog', '/login')Identificador da página.meta_titleTítulo da página para SEO (tag <title>).meta_descriptionDescrição da página (meta tag description).og_image_url (Opcional)URL da imagem para compartilhamento social.No Painel Admin, você terá:Uma lista das páginas atuais do site.Para cada página, a opção de Visualizar e Editar os campos meta_title, meta_description e og_image_url, garantindo o controle total sobre a otimização de busca.B) Criação e Gerenciamento do BlogO sistema terá a funcionalidade CRUD (Create, Read, Update, Delete) completa para a gestão de postagens do blog.Tabela SupabaseCampos PrincipaisRelação com a Páginablog_poststitleTítulo da postagem.slugURL amigável (/blog/titulo-da-postagem).contentO corpo da postagem (em formato Rich Text/Markdown).is_publishedFlag para publicar/despublicar.created_at, updated_atTimestamps automáticos.No Painel Admin, você poderá:Criar uma Nova Postagem com título, conteúdo e a opção de publicar imediatamente.Ver a lista de Todas as Postagens (publicadas e rascunhos) e ter as opções de editar, excluir e alterar o status de publicação.4. Página Pública "Blog"A página /blog (visível para todos) fará uma consulta no Supabase para buscar somente as postagens onde is_published é verdadeiro.Cada postagem listada terá seu próprio link (e.g., /blog/como-comecar-treino) que fará uma busca pelo campo slug na tabela blog_posts. Gere as imagens de acordo com o conteúdo delas

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://seo-blog-nexus.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/7cb03fa4-ce0d-4e21-a3b4-0881258a2d4a).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
