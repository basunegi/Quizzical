(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,a){},20:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(7),c=a.n(r),i=(a(18),a(1)),l=a(4),s=a.n(l),u=a(5),m=a.n(u);function p(e){return o.a.createElement("main",null,o.a.createElement("img",{src:s.a,className:"blob-top",alt:"blobTop"}),o.a.createElement("div",{className:"quizzical"},o.a.createElement("h1",null,"Quizzical"),o.a.createElement("h4",null,"Created by Vijaypal Singh Negi"),o.a.createElement("button",{className:"start",onClick:function(t){return e.handleStart(t,!0,!1)}},"Start quiz"),o.a.createElement("select",{className:"category",onChange:function(t){return e.handleStart(t,!1,!1)}},o.a.createElement("option",{value:"select"},"--Select category--"),o.a.createElement("option",{value:"art"},"Art"),o.a.createElement("option",{value:"geography"},"Geography"),o.a.createElement("option",{value:"history"},"History"),o.a.createElement("option",{value:"politics"},"Politics"),o.a.createElement("option",{value:"sports"},"Sports"))),o.a.createElement("img",{src:m.a,className:"blob-bottom",alt:"blobBottom"}))}var d=a(2),f=a(8);function b(e){var t="";return t=e.isCorrect?"option-held":e.isHeld&&!e.isCorrect?"option-wrong":"option",o.a.createElement("div",null,!e.isComplete&&o.a.createElement("div",{className:"option".concat(e.isHeld?"-held":""),onClick:e.optionClicked},e.value),e.isComplete&&o.a.createElement("div",{className:t},e.value))}var y=a(3);function v(e){var t=function(e){for(var t=3;t>0;t--){var a=Math.floor(t*Math.random()),n=e[t];e[t]=e[a],e[a]=n}return e}([e.question.correct_answer].concat(Object(f.a)(e.question.incorrect_answers))),a=o.a.useState(t.map(function(t){return{value:a=t,id:Object(y.a)(),isHeld:!1,isCorrect:a===e.question.correct_answer};var a})),n=Object(i.a)(a,2),r=n[0],c=n[1];o.a.useEffect(function(){var t=r.some(function(e){return e.isHeld&&e.isCorrect}),a=r.some(function(e){return e.isHeld});e.handleChange(e.question.qid,a,t)},[r]);var l=r.map(function(t){return o.a.createElement(b,{key:Object(y.a)(),value:t.value,isHeld:t.isHeld,isCorrect:t.isCorrect,isComplete:e.isComplete,optionClicked:function(){return e=t.id,void c(function(t){return t.map(function(t){return Object(d.a)({},t,{isHeld:!t.isHeld&&e===t.id})})});var e}})});return o.a.createElement("div",{className:"question"},o.a.createElement("p",null,e.question.question),o.a.createElement("div",{className:"options"},l))}function h(e){var t=o.a.useState([]),a=Object(i.a)(t,2),n=a[0],r=a[1],c=o.a.useState(!1),l=Object(i.a)(c,2),u=l[0],p=l[1],f={art:"https://opentdb.com/api.php?amount=7&category=25&difficulty=easy&type=multiple",politics:"https://opentdb.com/api.php?amount=7&category=24&difficulty=easy&type=multiple",geography:"https://opentdb.com/api.php?amount=7&category=22&difficulty=easy&type=multiple",history:"https://opentdb.com/api.php?amount=7&category=23&difficulty=easy&type=multiple",sports:"https://opentdb.com/api.php?amount=7&category=21&difficulty=easy&type=multiple"};o.a.useEffect(function(){fetch(f[e.category]).then(function(e){return e.json()}).then(function(e){return r(e.results.map(function(e){return Object(d.a)({},e,{qid:Object(y.a)(),isAttempted:!1,isCorrect:!1})}))})},[]);var b=n.map(function(e){return o.a.createElement(v,{key:e.qid,question:e,handleChange:h,isComplete:u})});function h(e,t,a){r(function(n){return n.map(function(n){return Object(d.a)({},n,{isAttempted:e===n.qid?t:n.isAttempted,isCorrect:e===n.qid?a:n.isCorrect})})})}return o.a.createElement("main",null,o.a.createElement("img",{src:s.a,className:"blob-top-questions",alt:"blobTop"}),o.a.createElement("div",{className:"question-list"},b,!u&&o.a.createElement("button",{className:"check-answers",onClick:function(){p(n.every(function(e){return e.isAttempted}))}},"Check Answers"),u&&o.a.createElement("div",{className:"footer"},o.a.createElement("div",{className:"result"},"You scored ",n.filter(function(e){return e.isCorrect}).length,"/",n.length," correct answers!"),o.a.createElement("button",{className:"play-again",onClick:e.handleStart},"Play Again"))),o.a.createElement("img",{src:m.a,className:"blob-bottom-questions",alt:"blobBottom"}))}function E(){var e=o.a.useState({isGameOn:!1,category:"select"}),t=Object(i.a)(e,2),a=t[0],n=t[1];function r(e,t,o){var r=e.target.value;n(function(n){return{isGameOn:!o&&("select"!==a.category&&t),category:o?"select":"click"===e.type?a.category:r}})}return o.a.createElement("div",null,!a.isGameOn&&o.a.createElement(p,{handleStart:r}),",",a.isGameOn&&o.a.createElement(h,{category:a.category,handleStart:function(e){return r(e,!1,!0)}}))}c.a.createRoot(document.getElementById("root")).render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(E,null)))},4:function(e,t,a){e.exports=a.p+"static/media/blobTop.cf29fe76.svg"},5:function(e,t,a){e.exports=a.p+"static/media/blobBottom.cce06133.svg"},9:function(e,t,a){e.exports=a(20)}},[[9,2,1]]]);
//# sourceMappingURL=main.d71630bf.chunk.js.map