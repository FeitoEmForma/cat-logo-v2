/* v6.4 — CTA de detalhes nos cards compactos, inclusive carregados pelo Supabase */
(()=>{
 const products=document.querySelector('.catalog-page .products');
 if(!products)return;
 function enhance(){
   products.querySelectorAll('.new-product').forEach(card=>{
     if(card.querySelector('.catalog-mobile-details'))return;
     const info=card.querySelector('.info');if(!info)return;
     const button=document.createElement('button');
     button.type='button';button.className='catalog-mobile-details';
     button.textContent='Ver detalhes';
     button.setAttribute('aria-label','Ver detalhes de '+(card.dataset.name||card.querySelector('h3')?.textContent||'produto'));
     button.addEventListener('click',()=>{
       const expand=card.querySelector('.expand');
       if(expand)expand.click();
       else card.querySelector('.visual')?.click();
     });
     info.append(button);
   });
 }
 enhance();
 new MutationObserver(enhance).observe(products,{childList:true,subtree:false});
})();