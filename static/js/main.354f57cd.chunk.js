(this.webpackJsonpcurrency_exchange_wallet=this.webpackJsonpcurrency_exchange_wallet||[]).push([[0],{17:function(e,t,n){},19:function(e,t,n){e.exports=n(33)},24:function(e,t,n){},25:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(9),l=n.n(r),o=(n(24),n(25),n(26),n(27),n(2)),u=n(7),i=Object(u.b)({name:"exchange",initialState:{firstCurrency:"GBP",firstSign:"\xa3",secondCurrency:"USD",currencyRate:"",secondSign:"$"},reducers:{changeFirstCurrency:function(e,t){var n=t.payload,c=n.first,a=n.firstSign;e.firstCurrency=c,e.firstSign=a},changeSecondCurrency:function(e,t){var n=t.payload,c=n.second,a=n.secondSign;e.secondCurrency=c,e.secondSign=a},changeCurrencyRate:function(e,t){e.currencyRate=t.payload}}}),s=i.actions,m=s.changeFirstCurrency,d=s.changeSecondCurrency,f=s.changeCurrencyRate,y=function(e){return e.exchange.firstCurrency},g=function(e){return e.exchange.secondCurrency},b=function(e){return e.exchange.currencyRate},E=function(e){return e.exchange.firstSign},p=function(e){return e.exchange.secondSign},h=i.reducer,v=Object(u.b)({name:"wallet",initialState:{USD:40,GBP:50,EUR:60,firstAmount:"",secondAmount:"",firstWalletError:null},reducers:{changeFirstAmount:function(e,t){var n=t.payload.firstAmount;e.firstAmount=n},changeSecondAmount:function(e,t){var n=t.payload.secondAmount;e.secondAmount=n},checkFirstWalletError:function(e,t){var n=t.payload.error;e.firstWalletError=n},updateWallet:function(e,t){var n=t.payload,c=n.firstWalletType,a=n.firstAmount,r=n.secondWalletType,l=n.secondAmount;e[c]=a,e[r]=l,e.firstAmount="",e.secondAmount=""}}}),w=v.actions,j=w.changeFirstAmount,A=w.changeSecondAmount,x=w.updateWallet,N=w.checkFirstWalletError,C=function(e){return e.wallet.firstAmount},O=function(e){return e.wallet.secondAmount},S=function(e){return e.wallet.firstWalletError},F=v.reducer,R={USD:"$",GBP:"\xa3",EUR:"\u20ac"},W=function(e,t){var n=e.first,c=e.second,a="".concat("https://api.exchangeratesapi.io","/latest?base=").concat(n,"&symbols=").concat(c);return fetch(a).then((function(e){return e.json()})).then((function(e){if(e.error)throw new Error("There is something wrong with your request. Please try again!");t(f(e.rates[c].toFixed(4)))})).catch((function(e){alert(e)}))},k=function(){for(var e=setTimeout(";"),t=0;t<e;t++)clearTimeout(t)},U=function(e,t){if(Number.isInteger(Number(e)))Number(e)<0?t(N({error:"Your input must be a positive number"})):t(N({error:null}));else{var n=e.split(".")[1].length||0;t(N(n<3?{error:null}:{error:"Your input must have only two digits after comma"}))}},B=function(e){return function(t){k(),W(e,t),setInterval((function(){W(e,t)}),1e4)}},T=function(){var e=Object(o.c)(y),t=Object(o.c)(g),n=Object(o.c)(b),r=Object(o.c)(E),l=Object(o.c)(p),u=Object(o.b)();return Object(c.useEffect)((function(){u(B({first:e,second:t}))}),[e,t]),a.a.createElement("div",{className:"exchange-container"},a.a.createElement("span",{className:"currency"},r),"1=",a.a.createElement("span",{className:"currency"},l),n.slice(0,4),a.a.createElement("span",{className:"currency"},n.slice(4,6)))},P=n(34),D=function(e){var t=e.firstAmount,n=e.firstCurrency,c=e.secondCurrency,r=e.currencyRate,l=Object(o.c)((function(e){return e.wallet[n].toFixed(2)})),u=Object(o.c)((function(e){return e.wallet[c].toFixed(2)})),i=Object(o.c)(S),s=Boolean(+t>l||""===t||n===c||i),m=Object(o.b)();return a.a.createElement("div",{className:"header-container"},a.a.createElement(P.a,{type:"button",className:"header-button"},"Cancel"),a.a.createElement(T,null),a.a.createElement(P.a,{type:"button","data-testid":"exchangeButton",className:"header-button",disabled:s,onClick:function(){m(x({firstWalletType:n,secondWalletType:c,firstAmount:+l-t,secondAmount:+u+t*r}))}},"Exchange"))},G=(n(17),n(35)),Y=function(e){var t=e.currency,n=e.sign,c=e.secondCurrency,r=e.currencyRate,l=e.firstAmount,u=Object(o.b)(),i=Object(o.c)((function(e){return e.wallet[t].toFixed(2)})),s=Object(o.c)(S);return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"wallet-container background"},a.a.createElement("div",{className:"d-flex flex-column justify-content-between h-100"},a.a.createElement("div",{className:"d-flex justify-content-between align-items-center"},a.a.createElement(G.a,{type:"select","data-testid":"wallet-select",name:"select",className:"wallet-currency background",defaultValue:t,onChange:function(e){return t=e.target.value,u(m({first:t,firstSign:R[t]})),u(j({firstAmount:""})),void u(A({secondAmount:""}));var t}},a.a.createElement("option",null,"GBP"),a.a.createElement("option",null,"USD"),a.a.createElement("option",null,"EUR")),a.a.createElement("input",{type:"number","data-testid":"wallet-input-1",className:"wallet-input",value:l,onChange:function(e){return t=e.target.value,U(t,u),u(j({firstAmount:t})),void u(A({secondAmount:(t*r).toFixed(2)}));var t},disabled:t===c,min:"0"})),s&&a.a.createElement("p",{className:"wallet-error-message"},s),a.a.createElement("div",null,a.a.createElement("div",{className:"wallet-pocket"},"You Have ",n,i)))),a.a.createElement("div",{className:"arrow-down"}))},_=function(e){var t=e.firstSign,n=e.firstCurrency,c=e.currency,r=e.secondSign,l=e.currencyRate,u=Object(o.b)(),i=Object(o.c)(O),s=(1/l).toFixed(2),m=Object(o.c)((function(e){return e.wallet[c].toFixed(2)}));return a.a.createElement("div",{className:"wallet-container"},a.a.createElement("div",{className:"d-flex flex-column justify-content-between h-100"},a.a.createElement("div",{className:"d-flex justify-content-between align-items-center"},a.a.createElement(G.a,{type:"select","data-testid":"wallet-select",name:"select",className:"wallet-currency-second",defaultValue:c,onChange:function(e){return t=e.target.value,u(d({second:t,secondSign:R[t]})),u(j({firstAmount:""})),void u(A({secondAmount:""}));var t}},a.a.createElement("option",null,"GBP"),a.a.createElement("option",null,"USD"),a.a.createElement("option",null,"EUR")),a.a.createElement("input",{type:"number","data-testid":"wallet-input-2",className:"wallet-input-second",value:i,onChange:function(e){return function(e){var t=e*(1/l);U(e,u),u(j({firstAmount:t.toFixed(2)})),u(A({secondAmount:e}))}(e.target.value)},disabled:c===n,min:"0"})),a.a.createElement("div",{className:"d-flex justify-content-between"},a.a.createElement("div",{className:"wallet-pocket"},"You Have ",r,m),a.a.createElement("div",{className:"wallet-pocket"},"1",r,"=",t,s))))},I=function(){var e=Object(o.c)(y),t=Object(o.c)(g),n=Object(o.c)(E),c=Object(o.c)(p),r=Object(o.c)(C),l=Object(o.c)(b);return a.a.createElement("div",{className:"h-100 w-100"},a.a.createElement(D,{firstAmount:r,firstCurrency:e,secondCurrency:t,currencyRate:l}),a.a.createElement("div",{className:"wallets-container"},a.a.createElement(Y,{currency:e,firstAmount:r,secondCurrency:t,sign:n,currencyRate:l}),a.a.createElement(_,{currency:t,firstCurrency:e,firstSign:n,secondSign:c,currencyRate:l})))},H=Object(u.a)({reducer:{exchange:h,wallet:F}});l.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(o.a,{store:H},a.a.createElement(I,null))),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.354f57cd.chunk.js.map