(this.webpackJsonpclone=this.webpackJsonpclone||[]).push([[0],{28:function(e,t,n){},47:function(e,t,n){},70:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(18),r=n.n(a),i=(n(28),n(4)),o=n.n(i),s=n(6),l=n(5),u=n(19),d=n.n(u).a.create({baseURL:"https://api.themoviedb.org/3"}),h=(n(47),n(20)),v=n(23),b=n.n(v),j=n(0);var f=function(e){var t=e.title,n=e.fetchUrl,a=e.isLargeRow,r=Object(c.useState)([]),i=Object(l.a)(r,2),u=i[0],v=i[1],f=Object(c.useState)(""),p=Object(l.a)(f,2),m=p[0],g=p[1];return Object(c.useEffect)((function(){function e(){return(e=Object(s.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.get(n);case 2:return t=e.sent,v(t.data.results),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[n]),Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("h2",{children:t})," ",Object(j.jsx)("div",{className:"row_posters",children:u.map((function(e){return Object(j.jsx)("img",{onClick:function(){return function(e){m?g(""):b()((null===e||void 0===e?void 0:e.name)||"").then((function(e){var t=new URLSearchParams(new URL(e).search);g(t.get("v"))})).catch((function(e){return console.log(e)}))}(e)},className:"row_poster ".concat(a&&"row_posterlarge"),src:(t=a?e.poster_path:e.backdrop_path,"https://image.tmdb.org/t/p/w500/".concat(t)),alt:e.name},e.id);var t}))}),m&&Object(j.jsx)(h.a,{videoId:m,opts:{height:"390",width:"100%",playerVars:{autoplay:1}}})]})},p="cabb87c8153e5b29cd062e923e51506c",m={fetchTrending:"/trending/all/week?api_key=".concat(p,"&language=en-US"),fetchNetflixOriginals:"/discover/tv?api_key=".concat(p,"&with_newtworks=213"),fetchTopRated:"/movie/top_rated?api_key=".concat(p,"&language=en-US"),fetchActionMovies:"/discover/movie?api_key=".concat(p,"&with_genres=28"),fetchComedyMovies:"/discover/movie?api_key=".concat(p,"&with_genres=35"),fetchHorrorMovies:"/discover/movie?api_key=".concat(p,"&with_genres=27"),fetchRomanceMovies:"/discover/movie?api_key=".concat(p,"&with_genres=10749"),fetchDocumentaries:"/discover/movie?api_key=".concat(p,"&with_genres=99")};n(70);var g=function(){var e,t,n=Object(c.useState)([]),a=Object(l.a)(n,2),r=a[0],i=a[1];return Object(c.useEffect)((function(){function e(){return(e=Object(s.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.get(m.fetchNetflixOriginals);case 2:return t=e.sent,i(t.data.results[Math.floor(Math.random()*t.data.results.length-1)]),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),console.log(r),Object(j.jsxs)("header",{className:"banner",style:{backgroundSize:"cover",backgroundImage:"url(https://image.tmdb.org/t/p/w500/".concat(null===r||void 0===r?void 0:r.backdrop_path,")"),backgroundPosition:"center center"},children:[Object(j.jsxs)("div",{className:"banner_content",children:[Object(j.jsx)("h1",{className:"banner_title",children:(null===r||void 0===r?void 0:r.title)||(null===r||void 0===r?void 0:r.name)||(null===r||void 0===r?void 0:r.original_name)}),Object(j.jsxs)("div",{className:"banner_buttons",children:[Object(j.jsx)("button",{className:"banner_button",children:"Play"}),Object(j.jsx)("button",{className:"banner_button",children:"List"})]}),Object(j.jsx)("h1",{className:"banner_description",children:(e=null===r||void 0===r?void 0:r.overview,t=150,(null===e||void 0===e?void 0:e.length)>t?e.substr(0,t-1)+"...":e)})]}),Object(j.jsx)("div",{className:"banner--fadebottom"})]})};n(71);var O=function(){var e=Object(c.useState)(!1),t=Object(l.a)(e,2),n=t[0],a=t[1];return Object(c.useEffect)((function(){return window.addEventListener("scroll",(function(){window.scrollY>100?a(!0):a(!1)})),function(){window.removeEventListener("scroll")}}),[]),Object(j.jsxs)("div",{className:"nav ".concat(n&&"nav_black"),children:[Object(j.jsx)("img",{className:"nav_logo",src:"https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg",alt:"Netflix-logo"}),Object(j.jsx)("img",{className:"nav_avatar",src:"https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png",alt:"avatar"})]})};var w=function(){return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(O,{}),Object(j.jsx)(g,{}),Object(j.jsx)(f,{title:"NETFLIX ORGINALS",fetchUrl:m.fetchNetflixOriginals,isLargeRow:!0}),Object(j.jsx)(f,{title:"Trending Now",fetchUrl:m.fetchTrending}),Object(j.jsx)(f,{title:"Top Rated",fetchUrl:m.fetchTopRated}),Object(j.jsx)(f,{title:"Action Movies",fetchUrl:m.fetchActionMovies}),Object(j.jsx)(f,{title:"Comedy Movies",fetchUrl:m.fetchComedyMovies}),Object(j.jsx)(f,{title:"Horror Movies",fetchUrl:m.fetchHorrorMovies}),Object(j.jsx)(f,{title:"Romantic Movies",fetchUrl:m.fetchRomanceMovies}),Object(j.jsx)(f,{title:"Documentaries",fetchUrl:m.fetchDocumentaries})]})};r.a.render(Object(j.jsx)(w,{}),document.getElementById("root"))}},[[72,1,2]]]);
//# sourceMappingURL=main.951015d9.chunk.js.map