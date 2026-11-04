# Feito em Forma — Avaliações v5.6

## Publicação
1. Faça backup do GitHub e do Supabase.
2. No Supabase, abra SQL Editor e execute `supabase-avaliacoes-v5.6.sql` **uma única vez** no projeto usado pelo catálogo. Esse arquivo cria a tabela `customer_reviews`, as regras de acesso e o bucket de imagens. Não substitua seu banco atual.
3. No GitHub, extraia o ZIP e envie o conteúdo da pasta `FeitoEmForma-New-Page-main` para a raiz do repositório, substituindo arquivos antigos.
4. Aguarde o GitHub Pages publicar e recarregue sem cache.
5. Faça um envio de teste com uma foto e confirme que ele aparece como pendente no painel ADM; aprove e confirme que passa a aparecer no catálogo público. Teste ocultar e excluir.

## Como administrar
No `admin.html`, faça login e abra a aba **Avaliações**. Ali você aprova, oculta ou exclui cada envio.

## Importante — privacidade e segurança
As avaliações só aparecem na listagem pública após aprovação. **Mas o bucket de fotos é público:** se alguém tiver o link direto de uma imagem pendente, poderá abri-la antes da aprovação. Para moderação privada de mídia é necessário mudar o fluxo para um bucket privado e liberar imagens somente após aprovação por um backend seguro. Por isso, instrua clientes a enviar apenas fotos que autorizam divulgar e sem rostos, endereços, placas ou dados pessoais. A opção de envio público também está sujeita a spam; para alto volume recomendamos CAPTCHA e rate limit em backend/Edge Function.

Não há integração automática com pedidos realizados; o cliente informa o nome do produto manualmente. Verifique a autenticidade das avaliações antes de aprová-las.
