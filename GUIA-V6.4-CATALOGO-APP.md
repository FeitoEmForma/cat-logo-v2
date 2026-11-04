# Feito em Forma v6.4 — Catálogo mobile + instalação como aplicativo

## O que mudou
- No celular, o catálogo exibe **2 produtos por linha** (e **3 por linha** entre 600 e 767 pixels).
- Cards compactos com imagem, título, preço, estoque e botão **Ver detalhes**.
- Ao tocar em **Ver detalhes**, abre a visualização completa, com descrição, opções e carrinho.
- A página inicial, o painel ADM, as avaliações e o Supabase permanecem preservados.
- Instalação como aplicativo PWA: ícone, nome, tela sem barra do navegador e cache básico de arquivos estáticos.

## Publicação no GitHub Pages
1. Faça backup do repositório.
2. Extraia este ZIP e envie o conteúdo da pasta `FeitoEmForma-New-Page-main` para a raiz do repositório.
3. Confira `catalog-mobile.js`, `manifest.webmanifest`, `pwa-register.js`, `sw.js`, `icon-192.png`, `icon-512.png`.
4. Aguarde a publicação e atualize o navegador. Se já tiver instalado uma versão antiga, feche/reabra o app ou reinstale.
5. Teste abertura de detalhes, estoque, quantidade, carrinho, WhatsApp, filtros e painel ADM.

## Instalar no Android
Abra o site no Chrome > menu de três pontos > **Instalar app** (ou **Adicionar à tela inicial**) > confirme.

## Instalar no iPhone
Abra o site no Safari > botão Compartilhar > **Adicionar à Tela de Início** > Adicionar.

## Importante
- Não precisa de extensão de navegador, Play Store, App Store ou novo banco de dados.
- É um PWA (site instalável), não aplicativo nativo.
- A conexão com a internet continua necessária para carregar produtos, preços, estoque, avaliações e finalizar pedidos.
- Cache não inclui dados do Supabase nem o painel ADM.
- Requer GitHub Pages via HTTPS, que já é fornecido pelo serviço.
