(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"+XCp":function(e,t,a){"use strict";var n=a("q1tI"),c=a.n(n);t.a=function(e){var t=e.price,a=e.cls;return c.a.createElement("h5",{dir:"rtl",className:"text-left m-0 p-0 ml-4 "+a},t.toLocaleString("ar-EG"),c.a.createElement("span",{className:"mr-2",style:{fontWeight:"lighter"}},"تومان"))}},"/u6c":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAABmJLR0QA/wD/AP+gvaeTAAAAu0lEQVR4nO3asQ1CMRAFwQ+V0gQhESFN0CnkjhCWbiWYya0XbHbycQAAAAAA/IPTtw8vt8drZ/h5v360/Ws7q/POKPsEiAkQEyAmQEyAmAAxAWICxASICRATICZATICYAAAAAMAgP+OGd1ZuQTEBYgLEBIgJEBMgJkBMgJgAMQFiAsQEiAkQEyAmAAAAADDIz7jhnZVbUEyAmAAxAWICxASICRATICZATICYADEBYgLEBIgJAAAAAADAgDcNXyRe36k/zAAAAABJRU5ErkJggg=="},"6Zs1":function(e,t,a){"use strict";var n=a("q1tI"),c=a.n(n),r=a("9eSz"),i=a.n(r),l=a("Wbzz"),o=a("sc9X"),s=a.n(o),m=a("+XCp");t.a=function(e){var t=e.title,a=e.price,n=e.img;return c.a.createElement(l.a,{key:t,to:"/product/"+t},c.a.createElement("div",{className:s.a.item},c.a.createElement("div",{className:"d-flex justify-content-center"},c.a.createElement("div",{className:"mt-5"},"string"==typeof n?c.a.createElement("img",{className:"img-fluid "+s.a.itemImg,alt:"img",src:n}):c.a.createElement(i.a,{fluid:n,className:s.a.itemImg}))),c.a.createElement("p",{className:"text-right mr-3 mt-3 "+s.a.itemp},t),c.a.createElement(m.a,{cls:"pb-3",price:a})))}},LhzT:function(e,t,a){"use strict";a.r(t),a.d(t,"query",(function(){return E}));var n=a("q1tI"),c=a.n(n),r=a("Wbzz"),i=a("cr+I"),l=a.n(i),o=a("W9HT"),s=a("NUBc"),m=a("ye1Q"),u=a("yBb5"),A=a("oord"),g=a("6Zs1"),d=a("OOZM"),f=c.a.createElement(m.a,{style:{fontSize:24},spin:!0}),p=a("VjyN").createClient({space:"qkwv5aiilkmk",accessToken:"re8h-XobCUwnj9YZuaW4brUKME9Rps12KgrsH67T8UU"}),E="3380715957";t.default=function(e){var t=Object(n.useState)([]),a=t[0],i=t[1],m=Object(n.useState)(1),E=m[0],h=m[1],b=Object(n.useState)(!1),v=b[0],y=b[1],C=e.pageContext.numberOfPages*e.pageContext.limit,I=l.a.parse(e.location.search),N="console"===e.data.allContentfulProduct.edges[0].node.category?"کنسول گیمینگ":"لوازم جانبی",x=e.data.allContentfulProduct.edges[0].node.category,O=function(e,t){var a;a="1"===t?0:6*JSON.parse(t-1),y(!0),p.getEntries({content_type:"product","fields.category":x,order:e,skip:a,limit:6}).then((function(e){i(e.items),h(e.total),y(!1)})).catch((function(e){console.log(e.message),y(!1)}))};return Object(n.useEffect)((function(){"desc"===I.sort&&O("-fields.price",I.page),"asc"===I.sort&&O("fields.price",I.page)}),[e.location.search]),c.a.createElement(u.a,{title:N},c.a.createElement(A.a,{srch:e.location.search,url:"/category/"+x,location:e.location,handleSort:function(e){"expensive"===e?Object(r.c)("/category/"+x+"?sort=desc&page=1"):Object(r.c)("/category/"+x+"?sort=asc&page=1")}}),c.a.createElement(o.a,{size:"large",spinning:v,indicator:f},c.a.createElement(d.a,null,e.location.search?a.map((function(e){var t=e.fields.title.content[0].content[0].value;return c.a.createElement(g.a,{key:t,title:t,img:e.fields.img[0].fields.file.url,price:e.fields.price})})):e.data.allContentfulProduct.edges.map((function(e){var t=e.node.title.content[0].content[0].value;return c.a.createElement(g.a,{key:t,title:t,img:e.node.img[0].fluid,price:e.node.price})})))),c.a.createElement("div",{className:"container d-flex justify-content-center"},e.location.search?c.a.createElement(s.a,{current:JSON.parse(I.page),pageSize:6,total:E,onChange:function(e){return Object(r.c)("/category/"+x+"?sort="+I.sort+"&page="+e)},className:"mt-3"}):c.a.createElement(s.a,{current:e.pageContext.humanPageNumber,pageSize:6,total:C,onChange:function(e){1===e?Object(r.c)("/category/"+x):Object(r.c)("/category/"+x+"/"+e)},className:"mt-3"})))}},OOZM:function(e,t,a){"use strict";var n=a("q1tI"),c=a.n(n),r=a("eifv"),i=a.n(r);t.a=function(e){var t=e.children;return c.a.createElement("div",{className:"container mt-2 justify-content-center "+i.a.cont},t)}},eifv:function(e,t,a){e.exports={cont:"ShopItemContainer-module--cont--3zvqQ"}},kn7u:function(e,t,a){e.exports={btns:"Filter-module--btns--1X_sx",active:"Filter-module--active--52K7-",activetwo:"Filter-module--activetwo--2kEv-",filtertext:"Filter-module--filtertext--3ws2e"}},oord:function(e,t,a){"use strict";var n=a("q1tI"),c=a.n(n),r=a("Wbzz"),i=a("/u6c"),l=a.n(i),o=a("kn7u"),s=a.n(o),m=a("cr+I"),u=a.n(m);t.a=function(e){var t=e.handleSort,a=e.location,i=e.url,o=e.srch,m=u.a.parse(a.search),A=Object(n.useState)("null"),g=A[0],d=A[1],f=Object(n.useState)("null"),p=f[0],E=f[1];return Object(n.useEffect)((function(){"desc"===m.sort&&(E(s.a.activetwo),d("null")),"asc"===m.sort&&(d(s.a.active),E("null"))}),[o]),c.a.createElement(n.Fragment,null,c.a.createElement("div",{dir:"rtl",className:"container d-flex align-items-center mt-4"},c.a.createElement("img",{alt:"filter-icon",style:{width:"26px"},className:"img-fluid",src:l.a}),c.a.createElement("h5",{className:"p-0 m-0 mr-2 ml-2 "+s.a.filtertext},"فیلتر :"),c.a.createElement("button",{className:s.a.btns+"  "+g+" ",onClick:function(){return t("cheap")}},"ارزان ترین"),c.a.createElement("button",{className:s.a.btns+" "+p+" ",onClick:function(){return t("expensive")}},"گران ترین"),c.a.createElement("button",{className:s.a.btns,onClick:function(){Object(r.c)(i),d("null"),E("null")}},"حذف فیلتر")),c.a.createElement("div",{className:"container"},c.a.createElement("hr",{style:{background:"#FFFFFF",height:"1px"}})))}},sc9X:function(e,t,a){e.exports={item:"EachShopItem-module--item--1u8u-",itemImg:"EachShopItem-module--itemImg--o9zYU",itemp:"EachShopItem-module--itemp--2zCeM"}}}]);
//# sourceMappingURL=component---src-components-category-category-js-ff5313d511a486471d88.js.map