(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{51:function(n,e,t){n.exports=t(78)},60:function(n,e,t){},78:function(n,e,t){"use strict";t.r(e);var a=t(0),o=t.n(a),r=t(18),i=t.n(r),l=t(13),c=t(16),u=t(38),m=t(39),d=(t(60),t(10)),f=t(14),s=t(1),p=t(2);function h(){var n=Object(s.a)(["\n  width: 100%;\n  display: inline-flex;\n  justify-content: center;\n  \n  > button:first-child {\n    margin-right: 8px;\n  }\n"]);return h=function(){return n},n}function E(){var n=Object(s.a)(["\n  border: 1px solid #ef5350;\n  width: 100%;\n  margin: 2px;\n  padding: 4px;  \n\n  a {\n    width: 100%;\n    text-decoration: none;\n    color: black;\n\n    height: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    \n  }\n  :hover {\n    background: #e94141;\n    a {\n      color: white;\n    }\n  }\n"]);return E=function(){return n},n}var v=p.a.div(E()),b=p.a.div(h());function k(){var n=Object(s.a)(["\n  background: #ef5350;\n  height: 32px;\n  min-width: 72px;\n  color: black;\n  border-radius: 20px;\n  outline: none;\n  border: 1px solid white;\n  \n  :hover {\n    background:#e94141;\n    cursor: pointer;\n  }\n"]);return k=function(){return n},n}var g=p.a.button(k()),y=function(n){var e=n.label,t=n.onClick,a=n.name;return o.a.createElement(g,{onClick:t,name:a},e)};y.defaultProps={label:"Click me",onClick:null,name:"buttonName"};var x=y;function P(){var n=Object(s.a)(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-size: 14px;\n  color: black;\n"]);return P=function(){return n},n}function O(){var n=Object(s.a)(["\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  font-size: 20px;\n\n  border-bottom: 1px solid #1b1c21;\n  padding-bottom: 8px;\n  margin-bottom: 8px;\n"]);return O=function(){return n},n}function C(){var n=Object(s.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  margin: auto;\n  padding: 36px;\n"]);return C=function(){return n},n}function j(){var n=Object(s.a)(["\n    display: inline-flex;\n    padding: 0 8px;\n    height: 100%;\n    align-items: center;\n    \n    :hover{\n      background: #e94141;\n    }\n\n    a{\n      width: 100%;\n      height: 100%;\n      color: white;\n      display: flex;\n      align-items: center;\n      text-decoration: none;\n      :hover {\n        text-decoration: underline;\n      }\n    }\n"]);return j=function(){return n},n}function w(){var n=Object(s.a)(["\n    margin-block-start: 0;\n    margin-block-end: 0;\n    height: 100%;\n    display: flex;\n    align-items: center;\n    cursor: pointer;\n    margin-left: 0;\n"]);return w=function(){return n},n}var S=p.a.ul(w()),_=p.a.li(j()),T=p.a.div(C()),L=p.a.div(O()),D=p.a.div(P()),N=function(n){var e=n.listOfPokemon,t=n.totalPokemon,r=n.getListOfPokemon,i=n.handleNextButton,l=n.handlePrevButton,c=n.handleDetailProfile,u=n.offset,m=n.limit,f=n.listMyPokemon;Object(a.useEffect)(function(){r(u,m)},[u]);var s=[];return f&&f.forEach(function(n){n.name in s?s[n.name]+=1:s[n.name]=1}),o.a.createElement(T,null,o.a.createElement(L,null,"List of Pokemon"),o.a.createElement(D,null,e&&e.map(function(n,e){return o.a.createElement(v,{key:e,onClick:function(){return c(n.url)}},o.a.createElement(d.b,{to:"/pokemonelisha/detail"},o.a.createElement("div",null,n.name),o.a.createElement("div",null,s[n.name]&&"owned : ".concat(s[n.name]))))}),"Total Pokemon: ",t,o.a.createElement(b,null,o.a.createElement(x,{label:"Prev",name:"prevButton",onClick:function(){u-m>=0&&l()}}),o.a.createElement(x,{label:"Next",name:"nextButton",onClick:function(){u+m<t&&i()}}))))};N.defaultProps={getListOfPokemon:function(){},totalPokemon:0,handleNextButton:function(){},handlePrevButton:function(){},handleDetailProfile:function(){}};var R=N,M=t(26),A=t.n(M),I=function(n){return{type:"SET_PAGE",payload:n}},G=function(n){return function(e){var t=n;return e({type:"SET_LOADING"}),A.a.get(t).then(function(n){e({type:"GET_DETAIL_PROFILE_SUCCESS",payload:n.data})}).catch(function(n){console.log(n),e({type:"SET_ERROR"})})}},B=function(n){return{type:"SET_CATCHED_POKEMON_SUCCESS",payload:n}},F=Object(l.b)(function(n){return{listOfPokemon:n.list.results,totalPokemon:n.list.count,offset:n.offset,limit:n.limit,listMyPokemon:n.myPokemonList}},function(n){return{getListOfPokemon:function(e,t){return n(function(n,e){return function(t){var a="https://pokeapi.co/api/v2/pokemon/?offset=".concat(n,"&limit=").concat(e);return t({type:"SET_LOADING"}),A.a.get(a).then(function(n){t({type:"GET_LIST_PAGE_SUCCESS",payload:n.data})}).catch(function(n){t({type:"SET_ERROR"})})}}(e,t))},handleNextButton:function(){return n(function(n,e){var t=e().offset,a=e().limit;n(I(t+a))})},handlePrevButton:function(){return n(function(n,e){var t=e().offset,a=e().limit;n(I(t-a))})},handleDetailProfile:function(e){return n(G(e))}}})(R),H=t(46);function K(){var n=Object(s.a)(["\n  padding-top: 24px;\n"]);return K=function(){return n},n}function U(){var n=Object(s.a)(["\n  width: 100%;\n  display: grid;\n  grid-column-gap: 8px;\n\n  @media screen and (min-width: 960px) { \n    grid-template-columns: auto auto auto auto;\n  }\n  @media screen and (max-width: 960px) and (min-width: 480px) { \n      grid-template-columns: auto auto auto;\n  }\n  @media screen and (max-width: 480px) { \n      grid-template-columns: auto auto;\n  }\n"]);return U=function(){return n},n}function z(){var n=Object(s.a)(["\n  display: inline-flex;\n  justify-content: flex-start;\n  width: 100%;\n\n  >button {\n    margin-left: 16px;\n  }\n"]);return z=function(){return n},n}function W(){var n=Object(s.a)(["\n  border: 1px solid white;\n  width: 80%;\n  margin: 2px;\n"]);return W=function(){return n},n}function J(){var n=Object(s.a)(["\n  background: pink;\n  height: 32px;\n  min-width: 72px;\n  color: black;\n  border-radius: 20px;\n  outline: none;\n  border: 1px solid red;\n  \n  :hover {\n    background: red;\n    cursor: pointer;\n  }\n"]);return J=function(){return n},n}function Y(){var n=Object(s.a)(["\n  width: 100%;\n"]);return Y=function(){return n},n}function $(){var n=Object(s.a)(["\n  display: inline-flex;\n  justify-content: flex-start;\n\n  > button {\n    margin-left: 16px;\n  }\n  border-bottom: 1px solid #1b1c21;\n  padding-bottom: 8px;\n  margin-bottom: 8px;\n"]);return $=function(){return n},n}var q=Object(p.a)(L)($()),Q=p.a.div(Y()),V=(p.a.button(J()),p.a.div(W()),p.a.div(z())),X=p.a.div(U()),Z=p.a.div(K());function nn(){var n=Object(s.a)(["\n    background: white;\n    border: 1px solid #D7D7D7;\n    color: black;\n    padding: 4px;\n    outline: none;\n    width: 100%;\n    box-sizing: border-box;\n"]);return nn=function(){return n},n}var en=p.a.input(nn()),tn=function(n){var e=n.placeholder,t=n.onChange,a=n.value,r=n.type;return o.a.createElement(en,{placeholder:e,onChange:t,value:a,type:r})};tn.defaultProps={placeholder:"Type something here",onChange:function(){},value:"",type:"text"};var an=tn,on=function(n){var e=n.pokemonName,t=n.pokemonMoves,r=n.pokemonTypes,i=n.pokemonSprites,l=n.failedCatch,c=n.succeedCatch,u=n.handleCatchPokemon,m=n.handleRenameNickname,d=Object(a.useState)(""),f=Object(H.a)(d,2),s=f[0],p=f[1];return o.a.createElement(T,null,o.a.createElement(L,null,"Detail Pokemon ",e),e?o.a.createElement(o.a.Fragment,null,o.a.createElement(q,null,o.a.createElement(x,{label:"Catch me!",onClick:function(){return u()}})),o.a.createElement(Q,null,l&&!c?o.a.createElement(V,null,"Failed catch the pokemon"):!l&&c?o.a.createElement(V,null,o.a.createElement(an,{placeholder:"insert nickname",onChange:function(n){return p(n.target.value)},value:s,type:"text"}),o.a.createElement(x,{label:"Insert!",onClick:function(){m(s),p("")}}),o.a.createElement("br",null)):o.a.createElement(V,null,"Catch your pokemon!"),o.a.createElement(Z,null,o.a.createElement(q,null,"Pokemon Image:"),o.a.createElement(X,null,Object.keys(i).map(function(n,e){return i[n]&&o.a.createElement("div",{key:"type-".concat(e)},o.a.createElement("div",null,n),o.a.createElement("div",null,o.a.createElement("img",{src:i[n],alt:n})))}))),o.a.createElement(Z,null,o.a.createElement(q,null,"Moves:"),o.a.createElement(X,null,t.map(function(n,e){return o.a.createElement("div",{key:"move-".concat(e)},n.move.name)}))),o.a.createElement(Z,null,o.a.createElement(q,null,"Types:"),o.a.createElement(X,null,r.map(function(n,e){return o.a.createElement("div",{key:"type-".concat(e)},n.type.name)}))))):o.a.createElement(D,null,"No data"))};on.defaultProps={handleCatchPokemon:function(){},handleRenameNickname:function(){}};var rn=on,ln=Object(l.b)(function(n){return{pokemonId:n.detailProfile.id,pokemonName:n.detailProfile.name,pokemonMoves:n.detailProfile.moves,pokemonTypes:n.detailProfile.types,pokemonSprites:n.detailProfile.sprites,failedCatch:n.failedCatch,succeedCatch:n.succeedCatch}},function(n){return{handleCatchPokemon:function(){return n(function(n){var e=Math.floor(Math.random()*Math.floor(100));n(e>=0&&e<=49?{type:"SET_CATCHED_POKEMON_FAILED"}:{type:"SET_CATCHED_POKEMON_RENAME"})})},handleRenameNickname:function(e){return n((t=e,function(n,e){var a=e().detailProfile.id,o=e().detailProfile.name,r="https://pokeapi.co/api/v2/pokemon/".concat(a),i=e().myPokemonList,l={urlPokemon:r,nicknamePokemon:t,name:o},c=i.concat(l);n(B(c))}));var t}}})(rn);function cn(){var n=Object(s.a)(["\n  border: 1px solid #ef5350;\n  width: 100%;\n  margin: 2px;\n  padding: 4px;  \n  display: inline-flex;\n  justify-content: space-between;\n  align-items: center;\n\n  a {\n    text-decoration: none;\n    color: black;\n\n    height: 100%;\n    display: flex;\n    align-items: center;\n\n    :nth-child(1) {\n      width: 80%;\n    }\n  }\n  :hover {\n    background: #e94141;\n    a {\n      color: white;\n    }\n  }\n"]);return cn=function(){return n},n}var un=p.a.div(cn()),mn=function(n){var e=n.listMyPokemon,t=n.handleDetailProfile,a=n.handleRemovePokemon;return o.a.createElement(T,null,o.a.createElement(L,null,"List My Pokemon"),o.a.createElement(D,null,e?e.map(function(n,e){return o.a.createElement(un,{key:e,onClick:function(){return t(n.urlPokemon)}},o.a.createElement(d.b,{to:"/pokemonelisha/detail"},n.name," - nickname: ",n.nicknamePokemon),o.a.createElement(d.b,{to:"/pokemonelisha/list"},o.a.createElement(x,{label:"Release pokemon",onClick:function(){return a(e)}}),o.a.createElement("br",null)))}):o.a.createElement(o.a.Fragment,null,"You have no pokemon")))};mn.defaultProps={handleDetailProfile:function(){},handleRemovePokemon:function(){}};var dn=mn,fn=Object(l.b)(function(n){return{listMyPokemon:n.myPokemonList}},function(n){return{handleDetailProfile:function(e){return n(G(e))},handleRemovePokemon:function(e){return n((t=e,function(n,e){var a=e().myPokemonList;a.splice(t,1),n(B(a))}));var t}}})(dn),sn=t(43),pn=t(44),hn=t(47),En=t(45),vn=t(48);function bn(){var n=Object(s.a)(["\n  padding-right: 48px;\n  display: inline-flex;\n  align-items: center;\n  -webkit-mask-image: linear-gradient(90deg,transparent,#000 20px,#000 90%,transparent);\n\n  div {\n    display: inline-flex;\n    align-items: center;\n\n    :not(:first-child) {\n      padding-left: 16px;\n    }\n  }\n"]);return bn=function(){return n},n}function kn(){var n=Object(s.a)(["\n  padding-left: 48px;\n  display: inline-flex;\n  align-items: center;\n\n  div {\n    display: inline-flex;\n    align-items: center;\n\n    :not(:last-child) {\n      padding-right: 16px;\n    } \n  }\n\n"]);return kn=function(){return n},n}function gn(){var n=Object(s.a)(["\n  position: relative;\n  min-height: 3rem;\n  width: 100%;\n  margin: 0 auto;\n  display: flex;\n  justify-content: space-between;\n  // align-items: stretch;\n  color: white;\n  background: #ef5350;\n"]);return gn=function(){return n},n}var yn=p.a.nav(gn()),xn=p.a.div(kn()),Pn=p.a.div(bn()),On=function(n){function e(){return Object(sn.a)(this,e),Object(hn.a)(this,Object(En.a)(e).apply(this,arguments))}return Object(vn.a)(e,n),Object(pn.a)(e,[{key:"render",value:function(){var n=this.props.children;return o.a.createElement(yn,null,n)}}]),e}(o.a.Component);On.defaultProps={children:[]},On.Left=function(n){var e=n.children,t=n.onClick;return o.a.createElement(xn,{onClick:t},e)},On.Right=function(n){var e=n.children,t=n.onClick;return o.a.createElement(Pn,{onClick:t},e)};var Cn=function(){return o.a.createElement(d.a,null,o.a.createElement(On,null,o.a.createElement(On.Left,null),o.a.createElement(On.Right,null,o.a.createElement(S,null,o.a.createElement(_,null,o.a.createElement(d.b,{to:"/pokemonelisha"},"List")),o.a.createElement(_,null,o.a.createElement(d.b,{to:"/pokemonelisha/detail"},"Detail")),o.a.createElement(_,null,o.a.createElement(d.b,{to:"/pokemonelisha/list"},"My Pokemon"))))),o.a.createElement(o.a.Fragment,null,o.a.createElement(f.a,{exact:!0,path:"/pokemonelisha",component:F}),o.a.createElement(f.a,{path:"/pokemonelisha/detail",component:ln}),o.a.createElement(f.a,{path:"/pokemonelisha/list",component:fn})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var jn=t(11),wn={list:{results:[],count:0,next:"",prev:""},isLoading:!1,isError:!1,offset:0,limit:20,detailProfile:{id:"",name:"",moves:[],types:[],sprites:{}},myPokemonList:[],failedCatch:!1,succeedCatch:!1},Sn=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:wn,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"SET_LOADING":return Object(jn.a)({},n,{isLoading:!0,isError:!1});case"GET_LIST_PAGE_SUCCESS":return Object(jn.a)({},n,{isLoading:!1,isError:!1,list:e.payload});case"SET_ERROR":return Object(jn.a)({},n,{isLoading:!1,isError:!0});case"SET_PAGE":return Object(jn.a)({},n,{offset:e.payload});case"GET_DETAIL_PROFILE_SUCCESS":return Object(jn.a)({},n,{isLoading:!1,isError:!1,detailProfile:e.payload});case"SET_CATCHED_POKEMON_SUCCESS":return Object(jn.a)({},n,{myPokemonList:e.payload,failedCatch:!1,succeedCatch:!1});case"SET_CATCHED_POKEMON_FAILED":return Object(jn.a)({},n,{failedCatch:!0,succeedCatch:!1});case"SET_CATCHED_POKEMON_RENAME":return Object(jn.a)({},n,{failedCatch:!1,succeedCatch:!0});default:return Object(jn.a)({},n)}},_n=Object(c.createStore)(Sn,Object(m.composeWithDevTools)(Object(c.applyMiddleware)(u.a)));i.a.render(o.a.createElement(function(){return o.a.createElement(l.a,{store:_n},o.a.createElement(Cn,null))},null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(n){n.unregister()})}},[[51,1,2]]]);
//# sourceMappingURL=main.c5a66d23.chunk.js.map