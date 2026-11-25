/* Markdown de questões: dados públicos e privados tratados como texto não confiável. */
(function(root){
 'use strict';
 const tags=new Set(['P','BR','STRONG','B','EM','I','DEL','S','CODE','PRE','UL','OL','LI','BLOCKQUOTE','A','H1','H2','H3','H4','H5','H6','TABLE','THEAD','TBODY','TR','TH','TD','HR']);
 function safeHref(value){
  try{const url=new URL(value,document.baseURI);return ['https:','http:','mailto:'].includes(url.protocol)?url.href:null;}catch{return null;}
 }
 function clean(node){
  if(node.nodeType===3)return document.createTextNode(node.textContent);
  if(node.nodeType!==1)return document.createDocumentFragment();
  const name=node.tagName.toUpperCase();
  if(['SCRIPT','STYLE','IFRAME','OBJECT','EMBED','SVG','MATH','TEMPLATE'].includes(name))return document.createDocumentFragment();
  const out=tags.has(name)?document.createElement(name.toLowerCase()):document.createDocumentFragment();
  if(name==='A'){
   const href=safeHref(node.getAttribute('href')||'');
   if(href&&node.hasAttribute('href'))out.setAttribute('href',href);
   out.setAttribute('rel','noopener noreferrer');
  }
  if(name==='OL'&&/^[0-9]+$/.test(node.getAttribute('start')||''))out.setAttribute('start',node.getAttribute('start'));
  for(const child of node.childNodes)out.append(clean(child));
  return out;
 }
 function render(target,value){
  const source=String(value??'');
  target.classList.add('study-markdown');
  target.textContent=source;
  if(!root.marked||typeof root.marked.parse!=='function')return target;
  try{
   const template=document.createElement('template');
   template.innerHTML=root.marked.parse(source,{gfm:true,breaks:true,async:false});
   const fragment=document.createDocumentFragment();
   for(const child of template.content.childNodes)fragment.append(clean(child));
   target.replaceChildren(fragment);
  }catch{target.textContent=source;}
  return target;
 }
 root.renderStudyMarkdown=render;
 root.studyMarkdownNode=(value,cls='')=>{const node=document.createElement('div');if(cls)node.className=cls;return render(node,value);};
})(window);
