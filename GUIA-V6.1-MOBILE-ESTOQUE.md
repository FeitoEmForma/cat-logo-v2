# Feito em Forma v6.1 — mobile, formulário e estoque

## Mudanças
- Menu compacto no celular, sem sobreposição de links; contém Início, Catálogo, Encomendas, Solicitar peça e Instagram.
- Título Sua ideia merece ganhar forma corrigido para quebrar palavras normalmente.
- Formulário original preservado, com nome, telefone e prazo desejado (opcional), mais descrição, tamanho e quantidade.
- Painel ADM: campo quantidade em estoque por produto. Vazio significa sob encomenda; 0 significa sem unidades prontas.
- Catálogo mostra disponibilidade e impede adicionar mais do que a quantidade declarada ao carrinho. O checkout confere novamente o estoque.
- O estoque NÃO é baixado automaticamente: o carrinho envia pedido pelo WhatsApp e não confirma venda. Atualize manualmente no ADM após fechar a venda.

## Instalação
1. Faça backup dos arquivos no GitHub.
2. No Supabase, SQL Editor, execute o arquivo `supabase-estoque-v6.1.sql` UMA vez. Sem isso o campo novo não poderá ser salvo.
3. Extraia o ZIP e envie o conteúdo de `FeitoEmForma-New-Page-main` à raiz do GitHub Pages.
4. No ADM, edite produtos e preencha o estoque quando houver unidades prontas. Deixe em branco para produtos sob encomenda.
5. No celular, teste o menu, o formulário e o carrinho. Recarregue sem cache.

Observação: disponibilidade é informativa, não é reserva. Vendas simultâneas ou pedidos via WhatsApp podem alterar o estoque real antes de você atualizar o ADM.
