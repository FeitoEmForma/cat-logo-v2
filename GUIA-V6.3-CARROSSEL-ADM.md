# Feito em Forma — v6.3 — Carrossel controlado pelo ADM

## O que mudou
Na aba **Carrossel da página inicial** do painel ADM, escolha quais produtos publicados devem aparecer na seção **Descubra o que podemos criar**. Defina também a ordem (0 primeiro, depois 1 etc.). Clique em **Salvar seleção do carrossel**. Produtos desmarcados continuam normalmente no catálogo, mas saem do carrossel. Produtos ocultos não podem ser selecionados.

## Publicação
1. Faça backup do GitHub e do banco Supabase.
2. No Supabase > SQL Editor, execute `supabase-carrossel-v6.3.sql`.
3. Extraia o ZIP e envie o conteúdo da pasta FeitoEmForma-New-Page-main à raiz do repositório.
4. Entre no ADM > **Carrossel da página inicial**, marque os produtos, escolha a ordem e salve.
5. Abra a página inicial em uma janela anônima e confira as fotos, ordem, navegação e o carrossel automático.

**Atenção:** inicialmente nenhum produto estará selecionado; a página inicial mostrará uma mensagem com link para o catálogo até você escolher os destaques. Se o SQL ainda não foi executado, a página usa uma imagem local temporária.

Sem alterações em carrinho, avaliações, categorias, estoque ou WhatsApp. Também foi corrigida uma variável de prazo indefinida no formulário de solicitação de peça.
