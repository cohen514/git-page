"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[119],{4474:(e,t,a)=>{a.d(t,{Z:()=>p});var l=a(9301),n=a(7780),r=a(7113),i=a(278),s=a(7352),o=a(6028);const c={sidebar:"sidebar_cSAj",sidebarItemTitle:"sidebarItemTitle_cwiD",sidebarItemList:"sidebarItemList_BuOG",sidebarItem:"sidebarItem_CiHV",sidebarItemLink:"sidebarItemLink_iORv",sidebarItemLinkActive:"sidebarItemLinkActive_MeAq"};function m(e){let{sidebar:t}=e;return l.createElement("aside",{className:"col col--3"},l.createElement("nav",{className:(0,n.Z)(c.sidebar,"thin-scrollbar"),"aria-label":(0,o.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},l.createElement("div",{className:(0,n.Z)(c.sidebarItemTitle,"margin-bottom--md")},t.title),l.createElement("ul",{className:(0,n.Z)(c.sidebarItemList,"clean-list")},t.items.map((e=>l.createElement("li",{key:e.permalink,className:c.sidebarItem},l.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:c.sidebarItemLink,activeClassName:c.sidebarItemLinkActive},e.title)))))))}var u=a(9347);function d(e){let{sidebar:t}=e;return l.createElement("ul",{className:"menu__list"},t.items.map((e=>l.createElement("li",{key:e.permalink,className:"menu__list-item"},l.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active"},e.title)))))}function g(e){return l.createElement(u.Zo,{component:d,props:e})}function h(e){let{sidebar:t}=e;const a=(0,i.i)();return t?.items.length?"mobile"===a?l.createElement(g,{sidebar:t}):l.createElement(m,{sidebar:t}):null}function p(e){const{sidebar:t,toc:a,children:i,...s}=e,o=t&&t.items.length>0;return l.createElement(r.Z,s,l.createElement("div",{className:"container margin-vert--lg"},l.createElement("div",{className:"row"},l.createElement(h,{sidebar:t}),l.createElement("main",{className:(0,n.Z)("col",{"col--7":o,"col--9 col--offset-1":!o}),itemScope:!0,itemType:"http://schema.org/Blog"},i),a&&l.createElement("div",{className:"col col--2"},a))))}},8891:(e,t,a)=>{a.d(t,{Z:()=>R});var l=a(9301),n=a(7780),r=a(9532),i=a(5250);function s(e){let{children:t,className:a}=e;const{frontMatter:n,assets:s}=(0,r.C)(),{withBaseUrl:o}=(0,i.C)(),c=s.image??n.image;return l.createElement("article",{className:a,itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},c&&l.createElement("meta",{itemProp:"image",content:o(c,{absolute:!0})}),t)}var o=a(7352);const c={title:"title_4q3B"};function m(e){let{className:t}=e;const{metadata:a,isBlogPostPage:i}=(0,r.C)(),{permalink:s,title:m}=a,u=i?"h1":"h2";return l.createElement(u,{className:(0,n.Z)(c.title,t),itemProp:"headline"},i?m:l.createElement(o.Z,{itemProp:"url",to:s},m))}var u=a(6028),d=a(8812);const g={container:"container_q4mw"};function h(e){let{readingTime:t}=e;const a=function(){const{selectMessage:e}=(0,d.c)();return t=>{const a=Math.ceil(t);return e(a,(0,u.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}}();return l.createElement(l.Fragment,null,a(t))}function p(e){let{date:t,formattedDate:a}=e;return l.createElement("time",{dateTime:t,itemProp:"datePublished"},a)}function E(){return l.createElement(l.Fragment,null," \xb7 ")}function b(e){let{className:t}=e;const{metadata:a}=(0,r.C)(),{date:i,formattedDate:s,readingTime:o}=a;return l.createElement("div",{className:(0,n.Z)(g.container,"margin-vert--md",t)},l.createElement(p,{date:i,formattedDate:s}),void 0!==o&&l.createElement(l.Fragment,null,l.createElement(E,null),l.createElement(h,{readingTime:o})))}function f(e){return e.href?l.createElement(o.Z,e):l.createElement(l.Fragment,null,e.children)}function v(e){let{author:t,className:a}=e;const{name:r,title:i,url:s,imageURL:o,email:c}=t,m=s||c&&`mailto:${c}`||void 0;return l.createElement("div",{className:(0,n.Z)("avatar margin-bottom--sm",a)},o&&l.createElement(f,{href:m,className:"avatar__photo-link"},l.createElement("img",{className:"avatar__photo",src:o,alt:r})),r&&l.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},l.createElement("div",{className:"avatar__name"},l.createElement(f,{href:m,itemProp:"url"},l.createElement("span",{itemProp:"name"},r))),i&&l.createElement("small",{className:"avatar__subtitle",itemProp:"description"},i)))}const N={authorCol:"authorCol_Bo5f",imageOnlyAuthorRow:"imageOnlyAuthorRow_sZ4N",imageOnlyAuthorCol:"imageOnlyAuthorCol_Mtql"};function _(e){let{className:t}=e;const{metadata:{authors:a},assets:i}=(0,r.C)();if(0===a.length)return null;const s=a.every((e=>{let{name:t}=e;return!t}));return l.createElement("div",{className:(0,n.Z)("margin-top--md margin-bottom--sm",s?N.imageOnlyAuthorRow:"row",t)},a.map(((e,t)=>l.createElement("div",{className:(0,n.Z)(!s&&"col col--6",s?N.imageOnlyAuthorCol:N.authorCol),key:t},l.createElement(v,{author:{...e,imageURL:i.authorsImageUrls[t]??e.imageURL}})))))}function Z(){return l.createElement("header",null,l.createElement(m,null),l.createElement(b,null),l.createElement(_,null))}var P=a(8294),k=a(5191);function C(e){let{children:t,className:a}=e;const{isBlogPostPage:i}=(0,r.C)();return l.createElement("div",{id:i?P.blogPostContainerID:void 0,className:(0,n.Z)("markdown",a),itemProp:"articleBody"},l.createElement(k.Z,null,t))}var w=a(4872),T=a(8298),I=a(7079);function y(){return l.createElement("b",null,l.createElement(u.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))}function L(e){const{blogPostTitle:t,...a}=e;return l.createElement(o.Z,(0,I.Z)({"aria-label":(0,u.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t})},a),l.createElement(y,null))}const B={blogPostFooterDetailsFull:"blogPostFooterDetailsFull__kJt"};function F(){const{metadata:e,isBlogPostPage:t}=(0,r.C)(),{tags:a,title:i,editUrl:s,hasTruncateMarker:o}=e,c=!t&&o,m=a.length>0;return m||c||s?l.createElement("footer",{className:(0,n.Z)("row docusaurus-mt-lg",t&&B.blogPostFooterDetailsFull)},m&&l.createElement("div",{className:(0,n.Z)("col",{"col--9":c})},l.createElement(T.Z,{tags:a})),t&&s&&l.createElement("div",{className:"col margin-top--sm"},l.createElement(w.Z,{editUrl:s})),c&&l.createElement("div",{className:(0,n.Z)("col text--right",{"col--3":m})},l.createElement(L,{blogPostTitle:i,to:e.permalink}))):null}function R(e){let{children:t,className:a}=e;const i=function(){const{isBlogPostPage:e}=(0,r.C)();return e?void 0:"margin-bottom--xl"}();return l.createElement(s,{className:(0,n.Z)(i,a)},l.createElement(Z,null),l.createElement(C,null,t),l.createElement(F,null))}},4872:(e,t,a)=>{a.d(t,{Z:()=>m});var l=a(9301),n=a(6028),r=a(858),i=a(7079),s=a(7780);const o={iconEdit:"iconEdit_VBpH"};function c(e){let{className:t,...a}=e;return l.createElement("svg",(0,i.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,s.Z)(o.iconEdit,t),"aria-hidden":"true"},a),l.createElement("g",null,l.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}function m(e){let{editUrl:t}=e;return l.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:r.k.common.editThisPage},l.createElement(c,null),l.createElement(n.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},4952:(e,t,a)=>{a.d(t,{Z:()=>i});var l=a(9301),n=a(7780),r=a(7352);function i(e){const{permalink:t,title:a,subLabel:i,isNext:s}=e;return l.createElement(r.Z,{className:(0,n.Z)("pagination-nav__link",s?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},i&&l.createElement("div",{className:"pagination-nav__sublabel"},i),l.createElement("div",{className:"pagination-nav__label"},a))}},5933:(e,t,a)=>{a.d(t,{Z:()=>s});var l=a(9301),n=a(7780),r=a(7352);const i={tag:"tag_DxlJ",tagRegular:"tagRegular_Mhl2",tagWithCount:"tagWithCount_oR7Z"};function s(e){let{permalink:t,label:a,count:s}=e;return l.createElement(r.Z,{href:t,className:(0,n.Z)(i.tag,s?i.tagWithCount:i.tagRegular)},a,s&&l.createElement("span",null,s))}},8298:(e,t,a)=>{a.d(t,{Z:()=>o});var l=a(9301),n=a(7780),r=a(6028),i=a(5933);const s={tags:"tags_Zvk8",tag:"tag_VzQs"};function o(e){let{tags:t}=e;return l.createElement(l.Fragment,null,l.createElement("b",null,l.createElement(r.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),l.createElement("ul",{className:(0,n.Z)(s.tags,"padding--none","margin-left--sm")},t.map((e=>{let{label:t,permalink:a}=e;return l.createElement("li",{key:a,className:s.tag},l.createElement(i.Z,{label:t,permalink:a}))}))))}},9532:(e,t,a)=>{a.d(t,{C:()=>s,n:()=>i});var l=a(9301),n=a(5037);const r=l.createContext(null);function i(e){let{children:t,content:a,isBlogPostPage:n=!1}=e;const i=function(e){let{content:t,isBlogPostPage:a}=e;return(0,l.useMemo)((()=>({metadata:t.metadata,frontMatter:t.frontMatter,assets:t.assets,toc:t.toc,isBlogPostPage:a})),[t,a])}({content:a,isBlogPostPage:n});return l.createElement(r.Provider,{value:i},t)}function s(){const e=(0,l.useContext)(r);if(null===e)throw new n.i6("BlogPostProvider");return e}},8812:(e,t,a)=>{a.d(t,{c:()=>c});var l=a(9301),n=a(7826);const r=["zero","one","two","few","many","other"];function i(e){return r.filter((t=>e.includes(t)))}const s={locale:"en",pluralForms:i(["one","other"]),select:e=>1===e?"one":"other"};function o(){const{i18n:{currentLocale:e}}=(0,n.Z)();return(0,l.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:i(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),s}}),[e])}function c(){const e=o();return{selectMessage:(t,a)=>function(e,t,a){const l=e.split("|");if(1===l.length)return l[0];l.length>a.pluralForms.length&&console.error(`For locale=${a.locale}, a maximum of ${a.pluralForms.length} plural forms are expected (${a.pluralForms.join(",")}), but the message contains ${l.length}: ${e}`);const n=a.select(t),r=a.pluralForms.indexOf(n);return l[Math.min(r,l.length-1)]}(a,t,e)}}}}]);