(self.webpackChunkzent_docs=self.webpackChunkzent_docs||[]).push([[7481],{97481:(n,a,s)=>{"use strict";s.r(a),s.d(a,{default:()=>y});var t=s(73450),e=s(73118),p=s(27378),o=s(57318),c=s(86233),l=s(82285),u=s(96681),i=s(24246);function r(n,a){var s=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(n,a).enumerable}))),s.push.apply(s,t)}return s}function k(n){for(var a=1;a<arguments.length;a++){var s=null!=arguments[a]?arguments[a]:{};a%2?r(Object(s),!0).forEach((function(a){(0,t.Z)(n,a,s[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(s)):r(Object(s)).forEach((function(a){Object.defineProperty(n,a,Object.getOwnPropertyDescriptor(s,a))}))}return n}var m=function(){function n(){var n=p.useState(!0),a=(0,e.Z)(n,2),s=a[0],t=a[1],o=p.useState("ime"),r=(0,e.Z)(o,2),k=r[0],m=r[1],d=n=>{m(n.target.value)};return(0,i.jsxs)("div",{className:"ime-composition-demo",children:[(0,i.jsxs)(c.g,{enable:s,children:[(0,i.jsx)(l.I,{value:k,onChange:d}),(0,i.jsx)(l.I,{value:k,onChange:d,type:"textarea"})]}),(0,i.jsxs)(u.z,{type:"primary",onClick:()=>t(!s),children:[s?"Disable":"Enable"," IMEComposition"]})]})}return(0,i.jsx)(n,{})};function d(n){return(0,i.jsx)(n.tag,k(k({},n.attributes),{},{dangerouslySetInnerHTML:{__html:n.html}}))}function h(n){return(0,i.jsx)(d,{tag:"section",html:n.html,attributes:{className:"zandoc-react-markdown"}})}function g(n){return(0,i.jsx)(d,{tag:"style",html:n.style})}function b(n,a){for(;n;)return n.offsetTop&&"static"!==getComputedStyle(n).position&&(a+=n.offsetTop),b(n.parentNode,a);return a}class f extends p.Component{constructor(...n){super(...n),(0,t.Z)(this,"state",{showCode:!1}),(0,t.Z)(this,"toggle",(()=>{this.setState({showCode:!this.state.showCode})}))}render(){var n=this.state.showCode,a=this.props,s=a.title,t=a.src,e=a.children;return(0,i.jsxs)("div",{className:"zandoc-react-demo",children:[(0,i.jsx)("div",{className:"zandoc-react-demo__preview",children:e}),(0,i.jsxs)("div",{className:"zandoc-react-demo__bottom",onClick:this.toggle,children:[(0,i.jsx)("div",{className:"zandoc-react-demo__title",children:(0,i.jsx)("p",{children:s||""})}),(0,i.jsx)("i",{className:"zenticon zenticon-caret-up zandoc-react-demo__toggle ".concat(n?"zandoc-react-demo__toggle-on":"zandoc-react-demo__toggle-off")})]}),n&&(0,i.jsx)("pre",{className:"zandoc-react-demo__code",children:(0,i.jsx)(d,{tag:"code",html:t,attributes:{className:"language-jsx"}})})]})}}class y extends p.Component{componentDidMount(){var n=location.hash;if(n){var a=document.querySelector('a[href="'.concat(n,'"]'));a&&(0,o.l)(document.documentElement,0,b(a,-9))}}render(){return p.createElement("div",{className:"zandoc-react-container"},p.createElement(g,{style:".ime-composition-demo {\n\tdisplay: inline-flex;\n\tflex-direction: column;\n}\n\n.ime-composition-demo > * {\n\tmargin-bottom: 10px;\n}"}),p.createElement(h,{html:'<h2 class="anchor-heading"><a href="#imecomposition">¶</a><a href="javascript:void(0)" id="imecomposition" class="anchor-point"></a>IMEComposition</h2>\n<p><code>IMEComposition</code>\'s <code>Input</code> child component will emit <code>onChange</code> event after IME complete input string instead of every time you press keyboard.</p>\n<p>PS：Only controlled component will be handled.</p>\n<h3 class="anchor-heading"><a href="#demos">¶</a><a href="javascript:void(0)" id="demos" class="anchor-point"></a>Demos</h3>'}),p.createElement(f,{title:"Basic Usage",id:"Demobasic",src:'<span class="token keyword module">import</span> <span class="token imports"><span class="token punctuation">{</span> <span class="token maybe-class-name">IMEComposition</span><span class="token punctuation">,</span> <span class="token maybe-class-name">Input</span><span class="token punctuation">,</span> <span class="token maybe-class-name">Button</span> <span class="token punctuation">}</span></span> <span class="token keyword module">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">function</span> <span class="token function"><span class="token maybe-class-name">Simple</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> <span class="token punctuation">[</span>enable<span class="token punctuation">,</span> setEnable<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token maybe-class-name">React</span><span class="token punctuation">.</span><span class="token method function property-access">useState</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">const</span> <span class="token punctuation">[</span>text<span class="token punctuation">,</span> setText<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token maybe-class-name">React</span><span class="token punctuation">.</span><span class="token method function property-access">useState</span><span class="token punctuation">(</span><span class="token string">\'ime\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">const</span> <span class="token function-variable function">onInputChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token arrow operator">=></span> <span class="token punctuation">{</span>\n    <span class="token function">setText</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span><span class="token property-access">target</span><span class="token punctuation">.</span><span class="token property-access">value</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token keyword control-flow">return</span> <span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ime-composition-demo<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">IMEComposition</span></span> <span class="token attr-name">enable</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>enable<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Input</span></span> <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>text<span class="token punctuation">}</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onInputChange<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Input</span></span> <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>text<span class="token punctuation">}</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onInputChange<span class="token punctuation">}</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>textarea<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">IMEComposition</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token arrow operator">=></span> <span class="token function">setEnable</span><span class="token punctuation">(</span><span class="token operator">!</span>enable<span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n        <span class="token punctuation">{</span>enable <span class="token operator">?</span> <span class="token string">\'Disable\'</span> <span class="token operator">:</span> <span class="token string">\'Enable\'</span><span class="token punctuation">}</span> <span class="token maybe-class-name">IMEComposition</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token maybe-class-name">ReactDOM</span><span class="token punctuation">.</span><span class="token method function property-access">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Simple</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'},p.createElement(m)),p.createElement(h,{html:'<h3 class="anchor-heading"><a href="#api">¶</a><a href="javascript:void(0)" id="api" class="anchor-point"></a>API</h3>\n<table class="table">\n<thead>\n<tr>\n<th>Property</th>\n<th>Description</th>\n<th>Type</th>\n<th>Required</th>\n<th>Default</th>\n<th>Alternative</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>enable</td>\n<td>is enable ime composition</td>\n<td>bool</td>\n<td>No</td>\n<td>false</td>\n<td></td>\n</tr>\n</tbody>\n</table>'}))}}},86233:(n,a,s)=>{"use strict";s.d(a,{g:()=>c});var t=s(59312),e=s(24246),p=s(27378),o=s(38841),c=function(n){var a=n.enable,s=void 0===a||a,c=n.children,l=(0,p.useMemo)((function(){return{enable:s}}),[s]);return(0,e.jsx)(o.B.Provider,(0,t.pi)({value:l},{children:c}),void 0)}}}]);