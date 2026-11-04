# Feito em Forma — v6.2: coleções e categorias

## Configuração obrigatória
1. Faça backup dos arquivos e do Supabase.
2. Abra o Supabase > SQL Editor e execute `supabase-categorias-v6.2.sql` uma única vez. Ele importa as categorias dos produtos já cadastrados sem apagá-los.
3. Envie o conteúdo desta pasta para a raiz do repositório GitHub Pages.
4. Abra o ADM > **Coleções e categorias**. Cadastre novas coleções, renomeie existentes ou exclua categorias vazias.
5. Ao editar um produto, escolha uma categoria da lista. O filtro do catálogo se atualiza automaticamente com as categorias dos produtos ativos.

## Regras de segurança
- Apenas usuários autorizados no painel ADM podem criar, renomear ou excluir categorias.
- Renomear altera também a categoria de todos os produtos associados.
- Não é possível excluir categoria com produtos: primeiro edite os produtos e mova-os para outra categoria.
- As categorias existentes são importadas automaticamente na primeira execução do SQL.
- As categorias da aba Encomendas realizadas são independentes e não são modificadas.
