(self.webpackChunkzent_docs=self.webpackChunkzent_docs||[]).push([[8381],{63919:(e,n,t)=>{"use strict";t.d(n,{I:()=>W});var r=t(59312),o=t(24246),i=t(60042),a=t.n(i),l=t(27378),s=t(33806),c=t(52074),u=t(27036),p=t(68150),d=t(62593),h=t(82049).Z,v=t(50993);function f(e){return(0,o.jsx)("span",(0,r.pi)({className:"zent-cascader-v2__menu-item-label","data-zv":"9.12.5"},{children:e.label}),void 0)}function g(e){return e.label}var m=(0,s.ZP.withPopover)(function(e){function n(){var n=null!==e&&e.apply(this,arguments)||this;return n.closePopup=function(){var e;return null===(e=n.props.popover)||void 0===e?void 0:e.close()},n}return(0,r.ZT)(n,e),n.prototype.render=function(){return(0,o.jsx)("div",(0,r.pi)({className:"zent-cascader-v2__popup-inner zent-cascader-v2__popup-inner-menu","data-zv":"9.12.5"},{children:this.renderPanels()}),void 0)},n.prototype.getMenuItemIcon=function(e,n){var t=this.props.loading;if(e.loadChildrenOnExpand){var r=(0,d.Fd)(e);if(-1!==t.indexOf(r)&&n)return(0,o.jsx)("i",{className:"zent-cascader-v2__menu-item-loading zenticon","data-zv":"9.12.5"},void 0)}return e.children&&e.children.length>0||e.loadChildrenOnExpand?(0,o.jsx)(u.Z,{className:"zent-cascader-v2__menu-item-icon",type:"right"},void 0):null},n.prototype.renderCascaderItems=function(e,n,t){var i=this,l=this.props.i18n;if(!e||0===(null==e?void 0:e.length))return(0,o.jsx)("div",(0,r.pi)({className:"zent-cascader-v2__menu-empty","data-zv":"9.12.5"},{children:l.empty}),"menu-empty");var s=this.props,c=s.value,u=s.onOptionClick,f=s.onOptionHover,g=s.expandTrigger,m=s.scrollLoad,y=s.loadChildrenOnScroll,b=s.scrollable,C=s.multiple,w=s.selectionMap,x=s.renderItemContent,P=s.getItemTooltip,k=s.renderList,z=function(e,t){var l,s=e.value===c[n-1],h=a()("zent-cascader-v2__menu-item",{"zent-cascader-v2__menu-item--active":s,"zent-cascader-v2__menu-item--disabled":e.disabled,"zent-cascader-v2__menu-item--multiple":C,"zent-cascader-v2__menu-item--leaf":0===e.children.length&&!e.loadChildrenOnExpand});return C&&(l=w.get((0,d.Fd)(e))),(0,o.jsxs)("div",(0,r.pi)({className:h,title:P(e),onClick:e.disabled?void 0:function(){return u(e,i.closePopup)},onMouseEnter:e.disabled||"hover"!==g?void 0:function(){return f(e)},style:t,"data-zv":"9.12.5"},{children:[C&&(0,o.jsx)(p.ZP,{value:e.value,onChange:function(n){return i.props.onOptionToggle(e,n.target.checked)},checked:"on"===l,indeterminate:"partial"===l,disabled:e.disabled},void 0),x(e),i.getMenuItemIcon(e,s)]}),e.value)},S="menu-"+c.slice(0,n-1).join("-");if("function"==typeof k)return(0,o.jsx)("div",(0,r.pi)({className:"zent-cascader-v2__menu","data-zv":"9.12.5"},{children:k(e,z)}),S);var O=e.map((function(e){return z(e)})),T=null===t?y:t.loadChildrenOnScroll;return(0,o.jsx)("div",(0,r.pi)({className:"zent-cascader-v2__menu","data-zv":"9.12.5"},{children:b&&T?(0,o.jsx)(h,(0,r.pi)({className:"zent-cascader-v2__menu-scroller",hasMore:T,loader:(0,o.jsx)(v.Z,{height:32,iconSize:18,loading:!0,colorPreset:"grey",icon:"circle"},void 0),loadMore:function(){return m(t)},skipLoadOnMount:!0},{children:O}),void 0):O}),S)},n.prototype.renderPanels=function(){var e=[],n=this.props.value,t=this.props.options,r=1;if(e.push(this.renderCascaderItems(t,r,null)),(null==n?void 0:n.length)>0&&(null==t?void 0:t.length)>0)for(var o=function(o){r++;var a=t.find((function(e){return e.value===n[o]}));(t=(0,d.El)(t,n[o])).length>0&&e.push(i.renderCascaderItems(t,r,a))},i=this,a=0;a<n.length;a++)o(a);return e},n.defaultProps={renderItemContent:f,getItemTooltip:g},n}(l.Component)),y=t(74194),b=t(56717),C=t(33938),w=(0,s.ZP.withPopover)(function(e){function n(){var n=null!==e&&e.apply(this,arguments)||this;return n.closePopup=function(){var e;return null===(e=n.props.popover)||void 0===e?void 0:e.close()},n}return(0,r.ZT)(n,e),n.prototype.onOptionClick=function(e){(0,this.props.onOptionClick)(e,this.closePopup)},n.prototype.renderSearchingOrEmpty=function(){var e=this.props,n=e.isSearching,t=e.i18n;return(0,o.jsx)("div",(0,r.pi)({className:"zent-cascader-v2--search-empty","data-zv":"9.12.5"},{children:n?(0,o.jsx)(v.Z,{height:32,iconSize:18,loading:!0,colorPreset:"grey",icon:"circle"},void 0):t.searchEmpty}),void 0)},n.prototype.renderPanels=function(){var e=this,n=this.props,t=n.searchList,i=n.multiple,l=n.highlight,s=n.keyword,c=n.selectionMap;return(0,o.jsx)("ul",(0,r.pi)({className:"zent-cascader-v2--search-list","data-zv":"9.12.5"},{children:t.map((function(n){var t,u=n[n.length-1],p=a()("zent-cascader-v2--search-item",{"zent-cascader-v2--search-item--multiple":i});return i&&(t=c.get((0,d.Fd)(u))),(0,o.jsxs)("li",(0,r.pi)({className:p,onClick:u.disabled||i?void 0:function(){return e.onOptionClick(n)},"data-zv":"9.12.5"},{children:[i&&(0,o.jsx)(C.X,{value:u.value,onChange:function(t){return e.props.onOptionToggle(n,t.target.checked)},checked:"on"===t,disabled:u.disabled},void 0),l(s,n)]}),(0,y.aM)(n))}))}),void 0)},n.prototype.render=function(){var e=this.props,n=e.isSearching,t=e.searchList;return(0,o.jsx)("div",(0,r.pi)({className:"zent-cascader-v2__popup-inner zent-cascader-v2__popup-inner-search","data-zv":"9.12.5"},{children:n||!t.length?this.renderSearchingOrEmpty():this.renderPanels()}),void 0)},n}(l.Component)),x=t(49566),P=t(8327).L,k=t(1348),z=Object.prototype.hasOwnProperty;function S(e,n){return e===n?0!==e||1/e==1/n:e!=e&&n!=n}var O=t(64073),T=function(e){var n=e.path,t=e.renderValue,i=e.onRemove;return(0,o.jsxs)("div",(0,r.pi)({className:"zent-cascader-v2--tag","data-zv":"9.12.5"},{children:[t(n),(0,o.jsx)(u.Z,{type:"close",className:"zent-cascader-v2--tag-close",onClick:i},void 0)]}),void 0)},j=t(76187);function N(e,n){var t=new j.cp([]);return e.forEach((function(e){return t.insertPath(e)})),t.reduceNode((function(e,t){var r=(0,d.Fd)(t);return"on"===n.get(r)&&(t.children=[]),e}),null),t.reducePath((function(e,n){return e.push(n),e}),[])}var V=function(e){var n=e.list,t=e.renderValue,r=e.selectionMap,i=e.simplifyPaths,a=e.onRemove,l=i?N(n,r):n;return(0,o.jsx)(o.Fragment,{children:l.map((function(e){return(0,o.jsx)(T,{path:e,onRemove:function(n){n.stopPropagation(),a(e[e.length-1])},renderValue:t},(0,y.aM)(e))}))},void 0)},M=t(35061),_=function(e){function n(){var n=null!==e&&e.apply(this,arguments)||this;return n.searchInputRef=(0,l.createRef)(),n.onKeywordChange=function(e){n.props.onKeywordChange(e.target.value)},n}return(0,r.ZT)(n,e),n.prototype.focus=function(){var e;null===(e=this.searchInputRef.current)||void 0===e||e.focus()},n.prototype.render=function(){var e=this.props,n=e.className,t=e.visible,i=e.clearable,l=e.selectedPaths,s=e.keyword,c=e.disabled,u=e.i18n,p=e.searchable,d=e.placeholder,h=e.onClick,v=e.onClear,f=e.onKeywordChange,g=e.renderValue,m=e.renderTags,y=e.onRemove,b=e.selectionMap,C=e.simplifyPaths,w=l.length>0,x=t&&p;return(0,o.jsxs)(M.m,(0,r.pi)({placeholder:d,disabled:c,className:a()(n,"zent-cascader-v2--multiple"),clearable:i,visible:t,onClear:v,selectedPaths:l,keyword:s,onKeywordChange:f,onClick:h,i18n:u,renderValue:g,searchable:p,showLabels:!w&&!x},{children:[w&&("function"==typeof m?m({list:l,renderValue:g,onRemove:y}):(0,o.jsx)(V,{list:l,selectionMap:b,simplifyPaths:C,renderValue:g,onRemove:y},void 0)),x&&(0,o.jsx)(O.M,{placeholder:u.searchPlaceholder,value:s,onChange:this.onKeywordChange,ref:this.searchInputRef},void 0)]}),void 0)},n.defaultProps={selectedPaths:[]},n}(l.Component),Z=t(31092),L=t(42690),E=t(41925);function I(e){return e.multiple}function B(e){return!e.multiple}var R=function(e,n){return n.some((function(n){return n.label.toLowerCase().includes(e.toLowerCase())}))},A=function(e,n){return n.map((function(t,i){return(0,o.jsxs)("span",(0,r.pi)({"data-zv":"9.12.5"},{children:[(0,o.jsx)(P,{searchWords:[e],textToHighlight:t.label,highlightClassName:"zent-cascader-v2--highlight"},void 0),i!==n.length-1&&" / "]}),(0,y.aM)(n.slice(0,i+1)))}))};function F(e){var n=[];return I(e)&&e.value.length>0&&(n=e.value[0]),B(e)&&(n=e.value),n}function K(e,n){return(I(e)?e.value.map((function(e){return n.getPathByValue(e)})):[n.getPathByValue(e.value)]).filter((function(e){return 0!==e.length}))}function D(e,n,t){var r=-1!==e.indexOf(n);return t&&!r?e.concat(n):!t&&r?e.filter((function(e){return e!==n})):e}function Y(e){return"visible"in e&&"onVisibleChange"in e&&"function"==typeof e.onVisibleChange}function H(e,n){return Y(e)?!!e.visible:n.visible}var W=function(e){function n(n){var t=e.call(this,n)||this;t.tagsTriggerRef=(0,l.createRef)(),t.getSelectionMap=(0,E.Z)((function(e){return t.getSelectionMapImpl(e)})),t.simplify=function(e){return N(e,t.getSelectionMapImpl(e))},t.getSearchResultList=(0,E.Z)((function(e,n){return n.map((function(n){var t=n.map((function(e){return e.value}));return e.getPathByValue(t)}))})),t.onVisibleChange=function(e){var n=t.state.keyword;t.disabled||(t.setVisible(e),t.setState({keyword:!1===e?"":n}))},t.onKeywordChange=function(e){t.setState({keyword:e},t.filterOptions)},t.filterOptions=(0,x.Z)((function(){var e=t.state,n=e.keyword,r=e.options;if(n){var o=t.props,i=o.async,a=o.asyncFilter,l=o.filter,s=o.limit;if(i)t.setState({isSearching:!0}),a(n,s).then((function(e){t.setSearchState(e)})).finally((function(){t.setState({isSearching:!1})}));else{var c=r.reducePath((function(e,n){return e.push(n),e}),[]).filter((function(e){return l(n,e)}));t.setSearchState(c)}}}),200),t.setSearchState=function(e){var n=t.props.limit,r=e.length;t.setState({searchResultList:n<=r?e:e.slice(0,n)})},t.onMenuOptionHover=function(e){t.onMenuOptionSelect(e,L.Z,"hover")},t.onMenuOptionClick=function(e,n){t.onMenuOptionSelect(e,n,"click")},t.onMenuOptionSelect=function(e,n,r){var o=t.props,i=o.loadOptions,a=o.multiple,l=t.state.loading,s=e.loadChildrenOnExpand&&i,c=(0,y.$4)(e),u={activeValue:c.map((function(e){return e.value})),keyword:""},p=e.children&&e.children.length>0,h=!e.loadChildrenOnExpand&&!p&&!a&&"click"===r,v=(0,d.Fd)(e);s&&(u.loading=D(l,v,!0)),t.setState(u,(function(){if(s&&i(c,{action:b.N.LoadChildren}).finally((function(){t.setState((function(e){return{loading:D(e.loading,v,!1)}}))})),B(t.props)){var e=t.props.changeOnSelect;(h||void 0!==e&&e&&"click"===r)&&t.props.onChange(c.map((function(e){return e.value})),c,{action:b.f.Change})}h&&n()}))},t.toggleMenuOption=function(e,n){if(I(t.props)){var r=t.props.onChange,o=t.state,i=o.options,a=o.selectedPaths,l=i.getPaths(e,(function(e){return e.every((function(e){return!e.disabled}))})),s=n?(0,y.G0)(a,l):(0,y.e5)(a,l),c=(s=i.sort(s)).map((function(e){return e.map((function(e){return e.value}))}));t.setState({selectedPaths:s},(function(){var e;r(c,s,{action:b.f.Change,simplify:t.simplify}),t.props.searchable&&(null===(e=t.tagsTriggerRef.current)||void 0===e||e.focus())}))}},t.onSearchOptionClick=function(e,n){var r=e.map((function(e){return e.value}));t.setState({activeValue:r},(function(){t.onMenuOptionClick(e[e.length-1],n)}))},t.toggleSearchOption=function(e,n){t.toggleMenuOption(e[e.length-1],n)},t.onClear=function(){t.setVisible(!1),t.setState({activeValue:[],selectedPaths:[]},(function(){B(t.props)?t.props.onChange([],[],{action:b.f.Clear}):t.props.onChange([],[],{action:b.f.Clear,simplify:t.simplify})}))},t.scrollLoad=function(e){var n=t.props.loadOptions;return!1===(e?e.loadChildrenOnScroll:t.props.loadChildrenOnScroll)?Promise.resolve():n((0,y.$4)(e),{action:b.N.Scroll})},t.onRemove=function(e){t.disabled||t.toggleMenuOption(e,!1)},t.renderPopoverContent=function(e){var n=t.props,r=n.expandTrigger,i=n.scrollable,a=n.multiple,l=n.searchable,s=n.highlight,c=n.loadChildrenOnScroll,u=n.renderItemContent,p=n.getItemTooltip,d=n.renderList,h=t.state,v=h.options,f=h.activeValue,g=h.keyword,y=h.isSearching,b=h.searchResultList,C=h.loading,x=h.selectedPaths,P=t.getVisible(),k=t.getSelectionMap(x);return l&&P&&g?(0,o.jsx)(w,{i18n:e,multiple:a,isSearching:y,searchList:t.getSearchResultList(v,b),keyword:g,highlight:s,onOptionToggle:t.toggleSearchOption,onOptionClick:t.onSearchOptionClick,selectionMap:k},void 0):(0,o.jsx)(m,{value:f,options:v.getTrees(),expandTrigger:r,i18n:e,scrollable:i,loadChildrenOnScroll:c,multiple:a,onOptionClick:t.onMenuOptionClick,onOptionHover:t.onMenuOptionHover,scrollLoad:t.scrollLoad,onOptionToggle:t.toggleMenuOption,loading:C,selectionMap:k,renderItemContent:u,getItemTooltip:p,renderList:d},void 0)};var r=new j.cp(n.options);return t.state={options:r,activeValue:F(n),visible:!1,prevProps:n,selectedPaths:K(n,r),keyword:"",isSearching:!1,searchResultList:[],loading:[]},t}return(0,r.ZT)(n,e),n.getDerivedStateFromProps=function(e,n){var t=n.prevProps,r={prevProps:e},o=n.options,i=!1;return t.options!==e.options&&(o=new j.cp(e.options),r.options=o,i=!0),!i&&t.multiple===e.multiple&&function(e,n){if(S(e,n))return!0;if("object"!=typeof e||null===e||"object"!=typeof n||null===n)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(var o=0;o<t.length;o++)if(!z.call(n,t[o])||!S(e[t[o]],n[t[o]]))return!1;return!0}(t.value,e.value)||(r.selectedPaths=K(e,o)),H(e,n)||(r.activeValue=F(e)),r},Object.defineProperty(n.prototype,"disabled",{get:function(){var e=this.props.disabled;return void 0===e?this.context.value:e},enumerable:!1,configurable:!0}),n.prototype.isControlled=function(){return Y(this.props)},n.prototype.getVisible=function(){return H(this.props,this.state)},n.prototype.setVisible=function(e){this.isControlled()?this.props.onVisibleChange(e):this.setState({visible:e})},n.prototype.getSelectionMapImpl=function(e){return this.state.options.reduceNodeDfs((function(n,t){var r=(0,d.Fd)(t),o=t.value;if(0===t.children.length){var i=e.some((function(e){return e[e.length-1].value===o}));n.set(r,i?"on":"off")}else{var a=t.children.filter((function(e){return!e.disabled})),l=a.reduce((function(e,t){var r=(0,d.Fd)(t),o=n.get(r);return"on"===o?e.on+=1:"off"===o&&(e.off+=1),e}),{on:0,off:0}),s=a.length;l.on===s&&s>0?n.set(r,"on"):l.off===s?n.set(r,"off"):n.set(r,"partial")}return n}),new Map)},n.prototype.render=function(){var e=this,n=this.props,t=n.className,i=n.popupClassName,l=n.placeholder,u=n.searchable,p=n.clearable,d=n.renderValue,h=this.state,v=h.selectedPaths,f=h.keyword,g=this.getVisible(),m=v.length>0;return(0,o.jsx)(c.Z,(0,r.pi)({componentName:"Cascader"},{children:function(n){var c,h={placeholder:l,disabled:e.disabled,className:t,clearable:p,visible:g,keyword:f,searchable:u,i18n:n,renderValue:d,onClear:e.onClear,onKeywordChange:e.onKeywordChange};return(0,o.jsxs)(s.ZP,(0,r.pi)({className:a()("zent-cascader-v2__popup",i),position:s.ZP.Position.AutoBottomLeftInViewport,visible:g,onVisibleChange:e.onVisibleChange,cushion:4},{children:[(0,o.jsx)(s.ZP.Trigger.Click,(0,r.pi)({toggle:!u},{children:I(e.props)?(0,o.jsx)(_,(0,r.pi)({},h,{simplifyPaths:null!==(c=e.props.simplifySelection)&&void 0!==c&&c,selectedPaths:v,selectionMap:e.getSelectionMap(v),onRemove:e.onRemove,renderTags:e.props.renderTags,ref:e.tagsTriggerRef}),void 0):(0,o.jsx)(Z.B,(0,r.pi)({},h,{selectedPath:m?v[0]:[]}),void 0)}),void 0),(0,o.jsx)(s.ZP.Content,{children:e.renderPopoverContent(n)},void 0)]}),void 0)}}),void 0)},n.defaultProps={value:[],options:[],clearable:!1,multiple:!1,expandTrigger:"click",scrollable:!1,loadChildrenOnScroll:!1,searchable:!1,async:!1,limit:50,renderValue:y.kz,filter:R,highlight:A},n.contextType=k.d,n}(l.Component)},34365:(e,n,t)=>{"use strict";t.d(n,{c:()=>P});var r=t(59312),o=t(24246),i=t(27378),a=t(60042),l=t.n(a),s=t(33806),c=t(52074),u=t(1348),p=t(33420).Z,d=t(62593),h=p.TabPanel;function v(e){return e.label}function f(e){return e.label}var g=(0,s.ZP.withPopover)(function(e){function n(){var n=null!==e&&e.apply(this,arguments)||this;return n.closePopup=function(){var e;return null===(e=n.props.popover)||void 0===e?void 0:e.close()},n}return(0,r.ZT)(n,e),n.prototype.renderCascaderItems=function(e,n){var t=this,i=this.props.value[n-1],a=function(e,n){var a=e.value,s=l()("zent-cascader-v2__list-link",{"zent-cascader-v2__list-link--active":a===i});return(0,o.jsx)("div",(0,r.pi)({className:"zent-cascader-v2__list-item",style:n,"data-zv":"9.12.5"},{children:(0,o.jsx)("span",(0,r.pi)({className:s,title:t.props.getItemTooltip(e),onClick:function(){return t.props.onClick(e,t.closePopup)},"data-zv":"9.12.5"},{children:t.props.renderItemContent(e)}),void 0)}),a)},s=this.props.renderList;return(0,o.jsx)("div",(0,r.pi)({className:"zent-cascader-v2__list","data-zv":"9.12.5"},{children:"function"==typeof s?s(e,a):e.map((function(e){return a(e)}))}),void 0)},n.prototype.renderTabTitle=function(e,n){return n===this.props.loadingLevel?(0,o.jsxs)("div",(0,r.pi)({className:"zent-cascader-v2__loading","data-zv":"9.12.5"},{children:[(0,o.jsx)("div",(0,r.pi)({className:"zent-cascader-v2__loading-label","data-zv":"9.12.5"},{children:e}),void 0),(0,o.jsx)("div",{className:"zent-cascader-v2__loading-icon","data-zv":"9.12.5"},void 0)]}),void 0):e},n.prototype.renderPanels=function(e){for(var n,t,i=[],a=this.props,l=a.title,s=a.value,c=s.length+1,u=function(a,c){if(c&&c.length>0){var u=s[a],d=c.find((function(e){return e.value===u})),v=null!==(t=null!==(n=null==d?void 0:d.label)&&void 0!==n?n:l[a])&&void 0!==t?t:e.title,f=a+1;i.push((0,o.jsx)(h,(0,r.pi)({tab:p.renderTabTitle(v,f),id:f},{children:p.renderCascaderItems(c,f)}),"tab-"+s.slice(0,a).join("-")))}},p=this,v=0,f=this.props.options;v<c;v++,f=(0,d.El)(f,s[v-1]))u(v,f);return i},n.prototype.render=function(){var e=this.props,n=e.activeId,t=e.i18n,i=e.onTabsChange;return(0,o.jsx)("div",(0,r.pi)({className:"zent-cascader-v2__popup-inner","data-zv":"9.12.5"},{children:(0,o.jsx)(p,(0,r.pi)({activeId:n,onChange:i,type:"card",className:"zent-cascader-v2__tabs"},{children:this.renderPanels(t)}),void 0)}),void 0)},n.defaultProps={renderItemContent:v,getItemTooltip:f},n}(i.Component)),m=t(56717),y=t(74194),b=t(31092),C=t(76187);function w(e){return"visible"in e&&"onVisibleChange"in e&&"function"==typeof e.onVisibleChange}function x(e,n){return w(e)?e.visible:n.visible}var P=function(e){function n(n){var t=e.call(this,n)||this;t.onVisibleChange=function(e){t.disabled||t.setVisible(e)},t.onTabsChange=function(e){t.setState({activeTab:e})},t.onClick=function(e,n){var r=t.props,o=r.loadOptions,i=r.changeOnSelect,a=e.loadChildrenOnExpand&&o,l=(0,y.$4)(e),s={activeValue:l.map((function(e){return e.value}))},c=e.children&&e.children.length>0,u=!e.loadChildrenOnExpand&&!c,p=u||i,h=(0,d.YY)(e),v=h+1;a||u||(s.activeTab=v),t.setState(s,(function(){a&&(t.setState({loadingLevel:h}),o(l).then((function(){t.setState({activeTab:v,loadingLevel:null})}),(function(){t.setState({loadingLevel:null})}))),p&&t.props.onChange(l.map((function(e){return e.value})),l,{action:m.f.Change}),u&&n()}))},t.onClear=function(){t.setVisible(!1),t.setState({activeValue:[]},(function(){t.props.onChange([],[],{action:m.f.Clear})}))};var r=n.value;return t.state={options:new C.cp(n.options),activeValue:r,activeTab:r.length||1,visible:!1,prevProps:n,loadingLevel:null},t}return(0,r.ZT)(n,e),n.getDerivedStateFromProps=function(e,n){var t={prevProps:e},r=n.prevProps;if(!x(e,n)){var o=e.value;t.activeValue=o,t.activeTab=o.length||1}return e.options!==r.options&&(t.options=new C.cp(e.options)),t},Object.defineProperty(n.prototype,"disabled",{get:function(){var e;return null!==(e=this.props.disabled)&&void 0!==e?e:this.context.value},enumerable:!1,configurable:!0}),n.prototype.isControlled=function(){return w(this.props)},n.prototype.getVisible=function(){return x(this.props,this.state)},n.prototype.setVisible=function(e){this.isControlled()?this.props.onVisibleChange(e):this.setState({visible:e})},n.prototype.render=function(){var e=this,n=this.props,t=n.className,i=n.popupClassName,a=n.placeholder,u=n.renderValue,p=n.clearable,d=n.value,h=n.title,v=n.renderItemContent,f=n.getItemTooltip,m=n.renderList,y=this.state,C=y.activeValue,w=y.loadingLevel,x=y.activeTab,P=y.options,k=this.getVisible(),z=P.getPathByValue(d);return(0,o.jsx)(c.Z,(0,r.pi)({componentName:"Cascader"},{children:function(n){return(0,o.jsxs)(s.ZP,(0,r.pi)({className:l()("zent-cascader-v2__popup",i),position:s.ZP.Position.AutoBottomLeftInViewport,visible:k,onVisibleChange:e.onVisibleChange,cushion:4},{children:[(0,o.jsx)(s.ZP.Trigger.Click,(0,r.pi)({toggle:!0},{children:(0,o.jsx)(b.B,{className:t,placeholder:a,renderValue:u,disabled:e.disabled,selectedPath:z,visible:k,clearable:p,i18n:n,onClear:e.onClear},void 0)}),void 0),(0,o.jsx)(s.ZP.Content,{children:(0,o.jsx)(g,{i18n:n,value:C,loadingLevel:w,onClick:e.onClick,activeId:x,onTabsChange:e.onTabsChange,title:h,options:P.getTrees(),renderItemContent:v,getItemTooltip:f,renderList:m},void 0)},void 0)]}),void 0)}}),void 0)},n.defaultProps={value:[],options:[],changeOnSelect:!1,renderValue:y.kz,clearable:!1,title:[]},n.contextType=u.d,n}(i.Component)},76187:(e,n,t)=>{"use strict";t.d(n,{d9:()=>a,fv:()=>l,cp:()=>s});var r=t(59312),o=t(74194),i=t(62593);function a(e,n){for(var t=e.map((function(e){return{node:n(e,null),children:e.children}})),r=t.map((function(e){return e.node})),o=function(){var e=t.pop();if(!e)return"continue";var r=e.node,o=e.children;null==o||o.forEach((function(e){var o=n(e,r);t.push({node:o,children:e.children}),r.children.push(o)}))};t.length>0;)o();return r}function l(e,n,t){for(var r=[{parent:null,children:e,node:(n=n.slice()).shift()}],o=function(){var e=r.pop();if(!e)return"continue";var o=e.children,i=e.node;if(!i)return"break";var a=i.value,l=o.find((function(e){return e.value===a}));l||(l=t(i,e.parent),o.push(l)),r.push({parent:l,children:l.children,node:n.shift()})};r.length>0&&"break"!==o(););return e}var s=function(){function e(e){this.trees=this.build(e)}return e.prototype.build=function(e){return a(e,p)},e.prototype.reducePath=function(e,n){for(var t=c(this.trees),r=[],o=n,a=!1,l=function(){a=!0};t.length>0;){var s=t.pop();if(s){for(var p=(0,i.YY)(s);p<=r.length;)r.pop();if(r.push(s),s.children.length>0)u(t,s.children);else if(o=e(o,r.slice(),l),a)break}}return o},e.prototype.reduceNode=function(e,n){for(var t=c(this.trees),r=n,o=!1,i=function(){o=!0};t.length>0;){var a=t.pop();if(a){if(r=e(r,a,i),o)break;a.children.length>0&&u(t,a.children)}}return r},e.prototype.reduceNodeDfs=function(e,n){for(var t=this.trees.map((function(e){return{node:e,phase:"recurse"}})),r=n,o=!1,i=function(){o=!0};t.length>0;){var a=t.pop();if(a){var l=a.node,s=a.phase;if("recurse"===s)t.push({node:l,phase:"visit"}),l.children.forEach((function(e){t.push({node:e,phase:"recurse"})}));else if("visit"===s&&(r=e(r,l,i),o))break}}return r},e.prototype.sort=function(e){return this.reducePath((function(n,t){return e.some((function(e){return(0,o.h0)(e,t)}))&&n.push(t),n}),[])},e.prototype.clone=function(){return new e(this.trees)},e.prototype.insertPath=function(e){return l(this.trees,e,p),this},e.prototype.getTrees=function(){return this.trees},e.prototype.getPathByValue=function(e){return this.reducePath((function(n,t,r){if(e.length>t.length||0===e.length)return n;var o,i=e.length;for(o=0;o<i;o++)if(t[o].value!==e[o])return n;return r(),o===t.length?t:t.slice(0,i)}),[])},e.prototype.getPaths=function(e,n){var t=(0,i.YY)(e)-1,r=e.value;return this.reducePath((function(e,o){return o.length>t&&o[t].value===r&&(!n||n(o))&&e.push(o),e}),[])},e}();function c(e){var n=e.slice();return n.reverse(),n}function u(e,n){for(var t=n.length-1;t>=0;t--)e.push(n[t]);return e}function p(e,n){return(0,r.pi)((0,r.pi)({},e),{parent:n,children:[]})}},62593:(e,n,t)=>{"use strict";function r(e,n){if(e&&e.length>0){var t=e.find((function(e){return e.value===n}));if(t&&Array.isArray(t.children))return t.children}return null}function o(e){for(var n=e,t=[];n;)t.unshift(n.value),n=n.parent;return t.map((function(e,n){return n+"$"+e})).join("@")}function i(e){for(var n=1,t=e.parent;t;)t=t.parent,n++;return n}t.d(n,{El:()=>r,Fd:()=>o,YY:()=>i})},74194:(e,n,t)=>{"use strict";t.d(n,{h0:()=>o,G0:()=>i,e5:()=>a,$4:()=>l,kz:()=>s,aM:()=>c});var r=t(59312);function o(e,n){if(e.length!==n.length)return!1;for(var t=0;t<e.length;t++)if(e[t].value!==n[t].value)return!1;return!0}function i(e,n){return n.reduce((function(e,n){return e.some((function(e){return o(e,n)}))||e.push(n),e}),(0,r.ev)([],e))}function a(e,n){return e.filter((function(e){return n.every((function(n){return!o(e,n)}))}))}function l(e){for(var n=e,t=[];n;)t.unshift(n),n=n.parent;return t}var s=function(e){return e.map((function(e){return e.label})).join(" / ")},c=function(e){return e.map((function(e){return e.value})).join("-")}},35061:(e,n,t)=>{"use strict";t.d(n,{m:()=>s});var r=t(59312),o=t(24246),i=t(60042),a=t.n(i),l=t(27036),s=function(e){function n(){var n=null!==e&&e.apply(this,arguments)||this;return n.state={active:!1},n.onClearClick=function(e){e.preventDefault(),e.stopPropagation(),n.props.keyword?n.props.onKeywordChange(""):(n.setState({active:!1}),n.props.onClear())},n.onMouseEnter=function(){n.setState({active:!0})},n.onMouseLeave=function(){n.setState({active:!1})},n}return(0,r.ZT)(n,e),n.prototype.render=function(){var e,n=this.props,t=n.className,i=n.visible,s=n.clearable,c=n.selectedPaths,u=n.keyword,p=n.disabled,d=n.children,h=n.onClick,v=n.renderValue,f=n.searchable,g=n.i18n,m=n.placeholder,y=n.showLabels,b=this.state.active,C=c.length>0,w=a()("zent-cascader-v2",t,{"zent-cascader-v2--disabled":p,"zent-cascader-v2--active":i||b,"zent-cascader-v2--visible":i}),x=a()("zent-cascader-v2--text",{"zent-cascader-v2--placeholder":!C});e=C?v(c[0]):f?g.searchPlaceholder:m||g.placeholder;var P=s&&(i||b)&&(C||u)&&!p;return(0,o.jsxs)("div",(0,r.pi)({className:w,onClick:h,onMouseEnter:this.onMouseEnter,onMouseLeave:this.onMouseLeave,"data-zv":"9.12.5"},{children:[d,y&&(0,o.jsx)("span",(0,r.pi)({className:x,"data-zv":"9.12.5"},{children:e}),void 0),P?(0,o.jsx)(l.Z,{type:"close-circle",onClick:this.onClearClick},void 0):(0,o.jsx)(l.Z,{type:"down"},void 0)]}),void 0)},n}(t(27378).Component)},64073:(e,n,t)=>{"use strict";t.d(n,{M:()=>l});var r=t(24246),o=t(27378),i=t(79264),a=t(17127),l=(0,o.forwardRef)((function(e,n){var t=(0,o.useRef)(null),l=e.placeholder,s=e.value,c=e.onChange;return(0,o.useImperativeHandle)(n,(function(){return{focus:function(){(0,a.tA)((function(){var e;null===(e=t.current)||void 0===e||e.focus({preventScroll:!0})}))}}}),[t]),(0,i.L)((function(){t.current.focus({preventScroll:!0})}),[]),(0,r.jsx)("input",{ref:t,placeholder:l,className:"zent-cascader-v2--search",value:s,onChange:c,"data-zv":"9.12.5"},void 0)}));l.displayName="SearchInput"},31092:(e,n,t)=>{"use strict";t.d(n,{B:()=>c});var r=t(59312),o=t(24246),i=t(27378),a=t(35061),l=t(74194),s=t(64073),c=function(e){function n(){var n=null!==e&&e.apply(this,arguments)||this;return n.onKeywordChange=function(e){n.props.onKeywordChange(e.target.value)},n}return(0,r.ZT)(n,e),n.prototype.render=function(){var e=this.props,n=e.className,t=e.visible,i=e.clearable,c=e.selectedPath,u=e.keyword,p=e.disabled,d=e.i18n,h=e.searchable,v=e.placeholder,f=e.onClick,g=e.onClear,m=e.onKeywordChange,y=e.renderValue,b=t&&h,C=c.length>0,w=C?(0,l.kz)(c):d.searchPlaceholder,x=C?[c]:[];return(0,o.jsx)(a.m,(0,r.pi)({disabled:p,className:n,clearable:i,visible:t,onClear:g,selectedPaths:x,keyword:u,onKeywordChange:m,onClick:f,i18n:d,renderValue:y,showLabels:!b,placeholder:v,searchable:h},{children:b&&(0,o.jsx)(s.M,{placeholder:w,value:u,onChange:this.onKeywordChange},void 0)}),void 0)},n.defaultProps={selectedPath:[]},n}(i.Component)},56717:(e,n,t)=>{"use strict";var r,o;t.d(n,{f:()=>r,N:()=>o}),function(e){e.Clear="clear",e.Change="change"}(r||(r={})),function(e){e.LoadChildren="loadChildren",e.Scroll="scroll"}(o||(o={}))},33938:(e,n,t)=>{"use strict";t.d(n,{X:()=>d});var r=t(59312),o=t(24246),i=t(60042),a=t.n(i),l=t(27378),s=t(1535),c=t(23130),u=t(1348),p=t(4008);function d(e){var n=(0,l.useContext)(u.d),t=(0,l.useContext)(c.Z),i=(0,l.useRef)(e);i.current=e;var p,d=t&&t.onChange,h=(0,l.useCallback)((function(e){var n=i.current,t=n.value,o=n.onChange;if(d)d(t);else if(o){var a=Object.create(e);a.target=(0,r.pi)((0,r.pi)({},i.current),{type:"checkbox",checked:e.target.checked}),o(a)}}),[d]),v=(e.checked,e.className),f=e.style,g=(e.disabled,e.readOnly,e.children),m=e.indeterminate,y=e.width,b=(e.value,e.labelStyle),C=e.onMouseEnter,w=e.onMouseLeave,x=(0,r._T)(e,["checked","className","style","disabled","readOnly","children","indeterminate","width","value","labelStyle","onMouseEnter","onMouseLeave"]),P=function(e,n){return"boolean"==typeof n.readOnly?n.readOnly:!!e&&e.readOnly}(t,e),k=function(e,n,t){return"boolean"==typeof t.disabled?t.disabled:n?n.disabled:e.value}(n,t,e);if(t){var z=t.value,S=t.isValueEqual;p=-1!==z.findIndex((function(n){return S(n,e.value)}))}else p=!!e.checked;return(0,o.jsxs)("label",(0,r.pi)({className:a()("zent-checkbox-wrap",v,{"zent-checkbox-checked":!!p,"zent-checkbox-disabled":k||P,"zent-checkbox-indeterminate":m}),style:(0,r.pi)((0,r.pi)({},f),(0,s.Z)(y)),onMouseEnter:C,onMouseLeave:w,"data-zv":"9.12.5"},{children:[(0,o.jsxs)("span",(0,r.pi)({className:"zent-checkbox","data-zv":"9.12.5"},{children:[(0,o.jsx)("span",{className:"zent-checkbox-inner","data-zv":"9.12.5"},void 0),(0,o.jsx)("input",(0,r.pi)({},x,{type:"checkbox",checked:p&&!m,disabled:k,readOnly:P,onChange:h,"data-zv":"9.12.5"}),void 0)]}),void 0),null!=g&&!0!==g&&!1!==g?(0,o.jsx)("div",(0,r.pi)({className:"zent-checkbox-label",style:b,"data-zv":"9.12.5"},{children:g}),void 0):null]}),void 0)}d.Group=p.Z,n.Z=d},4008:(e,n,t)=>{"use strict";t.d(n,{c:()=>d});var r=t(59312),o=t(24246),i=t(27378),a=t(60042),l=t.n(a),s=t(41925),c=t(23130),u=t(1348),p=c.Z.Provider,d=function(e){function n(){var n=null!==e&&e.apply(this,arguments)||this;return n.getGroupContext=(0,s.Z)((function(e,t,r,o){return{value:Array.isArray(e)?e:[],disabled:t,readOnly:r,isValueEqual:o,onChange:n.onCheckboxChange}})),n.onCheckboxChange=function(e){var t=n.props,r=t.isValueEqual,o=t.onChange,i=t.value;if(o){var a=i?i.slice():[],l=a.findIndex((function(n){return r(n,e)}));-1!==l?a.splice(l,1):a.push(e),o(a)}},n}return(0,r.ZT)(n,e),n.prototype.render=function(){var e=this.props,n=e.className,t=e.style,i=e.children,a=e.value,s=e.disabled,c=void 0===s?this.context.value:s,u=e.readOnly,d=void 0!==u&&u,h=e.isValueEqual,v=l()("zent-checkbox-group",n);return(0,o.jsx)(p,(0,r.pi)({value:this.getGroupContext(a,c,d,h)},{children:(0,o.jsx)("div",(0,r.pi)({className:v,style:t,"data-zv":"9.12.5"},{children:i}),void 0)}),void 0)},n.defaultProps={isValueEqual:Object.is,value:[]},n.contextType=u.d,n}(i.Component);n.Z=d},23130:(e,n,t)=>{"use strict";var r=t(27378);n.Z=(0,r.createContext)(null)},68150:(e,n,t)=>{"use strict";var r=t(33938);n.ZP=r.Z},82049:(e,n,t)=>{"use strict";t.d(n,{S:()=>h});var r=t(59312),o=t(24246),i=t(60042),a=t.n(i),l=t(27378),s=t(50993),c=t(86446),u=t(79352),p=t(43239),d=(0,o.jsx)(s.Z,{height:60,loading:!0,icon:"circle"},void 0),h=(0,l.forwardRef)((function(e,n){var t,i=e.hasMore,s=void 0!==i&&i,h=e.loadMore,v=e.skipLoadOnMount,f=void 0!==v&&v,g=e.useWindow,m=void 0!==g&&g,y=e.loader,b=void 0===y?d:y,C=e.threshold,w=void 0===C?1:C,x=e.className,P=e.children,k=(0,l.useState)(!1),z=k[0],S=k[1],O=(0,p.s)(),T=(0,l.useCallback)((function(){O.current&&S(!1)}),[O]),j=(0,l.useCallback)((function(){"function"==typeof h&&(S(!0),h.length>0?h(T):h().then(T,T))}),[h,T]),N=(0,l.useCallback)((function(e){z||2===e.previousPosition&&j()}),[j,z]);return(0,l.useEffect)((function(){f||j()}),[]),(0,o.jsxs)("div",(0,r.pi)({className:a()("zent-infinite-scroller",x,(t={},t["zent-infinite-scroller-y"]=!m,t)),ref:n,"data-zv":"9.12.5"},{children:[P,s&&u.Z&&(0,o.jsx)(c.h,{scrollableAncestor:m?window:void 0,onEnter:N,bottomOffset:-w},void 0),z&&b]}),void 0)}));h.displayName="InfiniteScroller",n.Z=h},55978:(e,n,t)=>{"use strict";function r(e){for(var n=[],t=1;t<arguments.length;t++)n[t-1]=arguments[t];var r=setTimeout((function(){return e.apply(void 0,n)}),1);return{cancel:function(){clearTimeout(r)}}}t.d(n,{Z:()=>r})},1535:(e,n,t)=>{"use strict";function r(e){return"string"==typeof e||"number"==typeof e?{width:e}:{}}t.d(n,{Z:()=>r})},86446:(e,n,t)=>{"use strict";t.d(n,{h:()=>m});var r=t(59312),o=t(24246),i=t(27378),a=t(49744),l=t(19185);function s(e){return(0,l.isElement)(e)&&"string"==typeof e.type}function c(e){return e.viewportBottom-e.viewportTop==0?3:e.viewportTop<=e.waypointTop&&e.waypointTop<=e.viewportBottom||e.viewportTop<=e.waypointBottom&&e.waypointBottom<=e.viewportBottom||e.waypointTop<=e.viewportTop&&e.viewportBottom<=e.waypointBottom?1:e.viewportBottom<e.waypointTop?2:e.waypointTop<e.viewportTop?0:3}var u=t(79352),p=t(55978);function d(e){return f(e.toLowerCase())}function h(e,n,t){var r=f(e=e.toLowerCase());return null!==r?r:function(e,n,t){var r=g.exec(e);if(r){var o=parseFloat(r[1]);switch(r[2]){case"em":return null!==(i=n())?i*o:null;case"rem":var i;return null!==(i=t())?i*o:null;default:return null}}return null}(e,n,t)}var v=/(^-?\d*\.?\d+)(cm|mm|in|px|pt|pc)$/;function f(e){var n=v.exec(e);if(n){var t=parseFloat(n[1]);switch(n[2]){case"cm":return 9600*t/254;case"mm":return 960*t/254;case"in":return 96*t;case"pt":return 4*t/3;case"pc":return 16*t;case"px":return t;default:return null}}return null}var g=/(^-?\d*\.?\d+)(em|rem)$/,m=function(e){function n(){var n=null!==e&&e.apply(this,arguments)||this;return n.refElement=(0,i.createRef)(),n.previousPosition=4,n.handleScroll=function(e){if(n.refElement.current){var t=n.getBounds(),r=c(t),o=n.previousPosition,i=n.props,a=i.onPositionChange,l=i.onEnter,s=i.onLeave,u=i.fireOnRapidScroll;if(n.previousPosition=r,o!==r){var p={currentPosition:r,previousPosition:o,event:e,waypointTop:t.waypointTop,waypointBottom:t.waypointBottom,viewportTop:t.viewportTop,viewportBottom:t.viewportBottom};null==a||a(p),1===r?null==l||l(p):1!==o&&4!==o||null==s||s(p),u&&(2===o&&0===r||0===o&&2===r)&&(null==l||l({currentPosition:1,previousPosition:o,event:e,waypointTop:t.waypointTop,waypointBottom:t.waypointBottom,viewportTop:t.viewportTop,viewportBottom:t.viewportBottom}),null==s||s({currentPosition:r,previousPosition:1,event:e,waypointTop:t.waypointTop,waypointBottom:t.waypointBottom,viewportTop:t.viewportTop,viewportBottom:t.viewportBottom}))}}},n}return(0,r.ZT)(n,e),n.prototype.componentDidMount=function(){var e=this;u.Z&&(this.cancelOnNextTick=(0,p.Z)((function(){e.cancelOnNextTick=null,function(e,n){if(e&&!s(e)&&!n)throw new Error("<Waypoint> needs a DOM element to compute boundaries. The child you passed is neither a DOM element (e.g. <div>) nor does it use the innerRef prop.\n")}(e.props.children,e.refElement.current),e.scrollableAncestor=e.findScrollableAncestor(),e.scrollEventListenerUnsubscribe=(0,a.Oo)(e.scrollableAncestor,"scroll",e.handleScroll,{passive:!0}),e.resizeEventListenerUnsubscribe=(0,a.Oo)(window,"resize",e.handleScroll,{passive:!0}),e.handleScroll(null)})))},n.prototype.componentDidUpdate=function(){var e=this;u.Z&&this.scrollableAncestor&&(this.cancelOnNextTick||(this.cancelOnNextTick=(0,p.Z)((function(){e.cancelOnNextTick=null,e.handleScroll(null)}))))},n.prototype.componentWillUnmount=function(){var e,n,t;u.Z&&(null===(e=this.scrollEventListenerUnsubscribe)||void 0===e||e.call(this),null===(n=this.resizeEventListenerUnsubscribe)||void 0===n||n.call(this),null===(t=this.cancelOnNextTick)||void 0===t||t.cancel())},n.prototype.findScrollableAncestor=function(){var e=this.props,n=e.horizontal,t=e.scrollableAncestor;if(t)return t;for(var r=this.refElement.current;r.parentNode;){if((r=r.parentNode)===document.body)return window;var o=getComputedStyle(r),i=(n?o.getPropertyValue("overflow-x"):o.getPropertyValue("overflow-y"))||o.getPropertyValue("overflow");if("auto"===i||"scroll"===i)return r}return window},n.prototype.getBounds=function(){var e,n,t=this.props.horizontal,r=this.refElement.current.getBoundingClientRect(),o=r.left,i=r.top,a=r.right,l=r.bottom,s=t?o:i,c=t?a:l;if(this.scrollableAncestor===window)e=t?window.innerWidth:window.innerHeight,n=0;else{var u=this.scrollableAncestor.getBoundingClientRect();e=t?u.width:u.height,n=t?u.left:u.top}return{waypointTop:s,waypointBottom:c,viewportTop:n+this.getOffset("top",e),viewportBottom:n+e-this.getOffset("bottom",e)}},n.prototype.getOffset=function(e,n){var t,r,o=this.props.horizontal,i=e+"Offset",a="top"===e?"border"+(o?"Left":"Top")+"Width":"border"+(o?"Right":"Bottom")+"Width",l=this.props[i];if("auto"!==l)return function(e,n){var t=function(e){var n;if(n="number"==typeof e?e:parseFloat(e),!Number.isNaN(n)&&Number.isFinite(n))return n}(e);if("number"==typeof t)return t;if("string"==typeof e){var r=function(e){if("%"===e.slice(-1))return parseFloat(e.slice(0,-1))/100}(e);if("number"==typeof r)return r*n}}(l,n);if(this.scrollableAncestor===window){var s=getComputedStyle(document.documentElement),c=function(){return d(s.fontSize)};return null!==(t=h(s[a],c,c))&&void 0!==t?t:0}var u=getComputedStyle(this.scrollableAncestor);return c=function(){return d(u.fontSize)},null!==(r=h(u[a],c,(function(){return d(getComputedStyle(document.documentElement).fontSize)})))&&void 0!==r?r:0},n.prototype.render=function(){var e=this,n=this.props.children;if(!n)return(0,o.jsx)("span",{ref:this.refElement,style:{fontSize:0},className:"zent-waypoint-marker","data-zv":"9.12.5"},void 0);var t=i.Children.only(n);return s(t)||(0,l.isForwardRef)(t)?(0,i.cloneElement)(t,{ref:function(n){e.refElement.current=n;var r=t.ref;r&&("function"==typeof r?r(n):r.current=n)}}):(0,i.cloneElement)(t,{innerRef:this.refElement})},n.defaultProps={topOffset:0,bottomOffset:0,horizontal:!1,fireOnRapidScroll:!0},n}(i.PureComponent)}}]);