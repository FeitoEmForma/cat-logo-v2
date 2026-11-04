# Avaliações dos clientes — v5.6

## Instalação
1. Faça backup do site e do Supabase.
2. No Supabase Dashboard > SQL Editor, execute o arquivo `supabase-avaliacoes-v5.6.sql` (somente este arquivo para este recurso).
3. Confira em Table Editor a tabela `customer_reviews` e em Storage o bucket `customer-review-images`.
4. Extraia este ZIP e publique o conteúdo da pasta `FeitoEmForma-New-Page-main` na raiz do repositório GitHub Pages.
5. Atualize a página sem cache. Na seção Histórias que ganham forma, envie uma avaliação de teste.
6. Entre no painel `admin.html`, faça login, abra **Avaliações** e clique **Aprovar**. Volte ao catálogo e confira se ela aparece.
7. Teste também **Ocultar** e **Excluir**. Exclua as avaliações de teste.

## Como funciona
- Cliente escolhe 1–5 estrelas, informa nome, produto e comentário e pode anexar **uma foto** JPG/PNG/WebP de até 3 MB.
- Avaliação é salva como `pending`. Só avaliações `approved` aparecem no catálogo.
- O ADM pode aprovar, ocultar ou excluir. Ao excluir, tenta apagar também a foto.
- Não foram inventados depoimentos ou notas.

## Segurança e limites importantes
- O bucket de imagens é público para facilitar a exibição: **a foto de uma avaliação pendente não aparece no catálogo, mas quem souber sua URL direta pode acessá-la**. Não use este modelo para imagens privadas.
- A interface tem um campo antirrobô simples, mas **não oferece proteção robusta contra spam**. Antes de divulgação ampla, recomendo adicionar Cloudflare Turnstile e validação em uma Supabase Edge Function, com rate limiting por IP. Sem backend, não é seguro guardar segredos do captcha no GitHub Pages.
- A aprovação é editorial, não comprovação de compra. Para avaliações verificadas, integre um código único de pedido.
- A exibição pública não exige login; a moderação exige conta cadastrada em `admins`.
- O formulário exige autorização de publicação. Se um cliente pedir remoção, exclua a avaliação pelo ADM.
- A nova funcionalidade depende de executar o SQL no projeto Supabase já configurado.
