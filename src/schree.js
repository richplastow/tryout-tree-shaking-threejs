!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.SHREE=e():t.SHREE=e()}(window,function(){return function(t){var e={};function r(i){if(e[i])return e[i].exports;var n=e[i]={i:i,l:!1,exports:{}};return t[i].call(n.exports,n,n.exports,r),n.l=!0,n.exports}return r.m=t,r.c=e,r.d=function(t,e,i){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(i,n,function(e){return t[e]}.bind(null,n));return i},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=1)}([function(t,e,r){"use strict";var i=Object.prototype.hasOwnProperty,n="~";function o(){}function s(t,e,r){this.fn=t,this.context=e,this.once=r||!1}function l(t,e,r,i,o){if("function"!=typeof r)throw new TypeError("The listener must be a function");var l=new s(r,i||t,o),h=n?n+e:e;return t._events[h]?t._events[h].fn?t._events[h]=[t._events[h],l]:t._events[h].push(l):(t._events[h]=l,t._eventsCount++),t}function h(t,e){0==--t._eventsCount?t._events=new o:delete t._events[e]}function _(){this._events=new o,this._eventsCount=0}Object.create&&(o.prototype=Object.create(null),(new o).__proto__||(n=!1)),_.prototype.eventNames=function(){var t,e,r=[];if(0===this._eventsCount)return r;for(e in t=this._events)i.call(t,e)&&r.push(n?e.slice(1):e);return Object.getOwnPropertySymbols?r.concat(Object.getOwnPropertySymbols(t)):r},_.prototype.listeners=function(t){var e=n?n+t:t,r=this._events[e];if(!r)return[];if(r.fn)return[r.fn];for(var i=0,o=r.length,s=new Array(o);i<o;i++)s[i]=r[i].fn;return s},_.prototype.listenerCount=function(t){var e=n?n+t:t,r=this._events[e];return r?r.fn?1:r.length:0},_.prototype.emit=function(t,e,r,i,o,s){var l=n?n+t:t;if(!this._events[l])return!1;var h,_,a=this._events[l],u=arguments.length;if(a.fn){switch(a.once&&this.removeListener(t,a.fn,void 0,!0),u){case 1:return a.fn.call(a.context),!0;case 2:return a.fn.call(a.context,e),!0;case 3:return a.fn.call(a.context,e,r),!0;case 4:return a.fn.call(a.context,e,r,i),!0;case 5:return a.fn.call(a.context,e,r,i,o),!0;case 6:return a.fn.call(a.context,e,r,i,o,s),!0}for(_=1,h=new Array(u-1);_<u;_++)h[_-1]=arguments[_];a.fn.apply(a.context,h)}else{var c,f=a.length;for(_=0;_<f;_++)switch(a[_].once&&this.removeListener(t,a[_].fn,void 0,!0),u){case 1:a[_].fn.call(a[_].context);break;case 2:a[_].fn.call(a[_].context,e);break;case 3:a[_].fn.call(a[_].context,e,r);break;case 4:a[_].fn.call(a[_].context,e,r,i);break;default:if(!h)for(c=1,h=new Array(u-1);c<u;c++)h[c-1]=arguments[c];a[_].fn.apply(a[_].context,h)}}return!0},_.prototype.on=function(t,e,r){return l(this,t,e,r,!1)},_.prototype.once=function(t,e,r){return l(this,t,e,r,!0)},_.prototype.removeListener=function(t,e,r,i){var o=n?n+t:t;if(!this._events[o])return this;if(!e)return h(this,o),this;var s=this._events[o];if(s.fn)s.fn!==e||i&&!s.once||r&&s.context!==r||h(this,o);else{for(var l=0,_=[],a=s.length;l<a;l++)(s[l].fn!==e||i&&!s[l].once||r&&s[l].context!==r)&&_.push(s[l]);_.length?this._events[o]=1===_.length?_[0]:_:h(this,o)}return this},_.prototype.removeAllListeners=function(t){var e;return t?(e=n?n+t:t,this._events[e]&&h(this,e)):(this._events=new o,this._eventsCount=0),this},_.prototype.off=_.prototype.removeListener,_.prototype.addListener=_.prototype.on,_.prefixed=n,_.EventEmitter=_,t.exports=_},function(t,e,r){"use strict";r.r(e);var i,n=function(){function t(){this._el=new Float32Array(16),this.identity()}return Object.defineProperty(t.prototype,"el",{get:function(){return this._el},enumerable:!0,configurable:!0}),t.prototype.identity=function(){return this._el[0]=1,this._el[1]=0,this._el[2]=0,this._el[3]=0,this._el[4]=0,this._el[5]=1,this._el[6]=0,this._el[7]=0,this._el[8]=0,this._el[9]=0,this._el[10]=1,this._el[11]=0,this._el[12]=0,this._el[13]=0,this._el[14]=0,this._el[15]=1,this},t.prototype.multiply=function(t){return this.multiplyMatrices(this,t),this},t.prototype.multiplyMatrices=function(t,e){var r=t.el,i=e.el,n=r[0],o=r[1],s=r[2],l=r[3],h=r[4],_=r[5],a=r[6],u=r[7],c=r[8],f=r[9],p=r[10],d=r[11],y=r[12],b=r[13],m=r[14],g=r[15],v=i[0],x=i[1],O=i[2],E=i[3],w=i[4],j=i[5],P=i[6],R=i[7],A=i[8],M=i[9],T=i[10],S=i[11],L=i[12],U=i[13],F=i[14],B=i[15];return this._el[0]=v*n+x*h+O*c+E*y,this._el[1]=v*o+x*_+O*f+E*b,this._el[2]=v*s+x*a+O*p+E*m,this._el[3]=v*l+x*u+O*d+E*g,this._el[4]=w*n+j*h+P*c+R*y,this._el[5]=w*o+j*_+P*f+R*b,this._el[6]=w*s+j*a+P*p+R*m,this._el[7]=w*l+j*u+P*d+R*g,this._el[8]=A*n+M*h+T*c+S*y,this._el[9]=A*o+M*_+T*f+S*b,this._el[10]=A*s+M*a+T*p+S*m,this._el[11]=A*l+M*u+T*d+S*g,this._el[12]=L*n+U*h+F*c+B*y,this._el[13]=L*o+U*_+F*f+B*b,this._el[14]=L*s+U*a+F*p+B*m,this._el[15]=L*l+U*u+F*d+B*g,this},t.prototype.scale=function(t){return this._el[0]=this._el[0]*t[0],this._el[1]=this._el[1]*t[0],this._el[2]=this._el[2]*t[0],this._el[3]=this._el[3]*t[0],this._el[4]=this._el[4]*t[1],this._el[5]=this._el[5]*t[1],this._el[6]=this._el[6]*t[1],this._el[7]=this._el[7]*t[1],this._el[8]=this._el[8]*t[2],this._el[9]=this._el[9]*t[2],this._el[10]=this._el[10]*t[2],this._el[11]=this._el[11]*t[2],this},t.prototype.translate=function(t){return this._el[12]=this._el[0]*t[0]+this._el[4]*t[1]+this._el[8]*t[2]+this._el[12],this._el[13]=this._el[1]*t[0]+this._el[5]*t[1]+this._el[9]*t[2]+this._el[13],this._el[14]=this._el[2]*t[0]+this._el[6]*t[1]+this._el[10]*t[2]+this._el[14],this._el[15]=this._el[3]*t[0]+this._el[7]*t[1]+this._el[11]*t[2]+this._el[15],this},t.prototype.rotate=function(t,e){var r=Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]);if(r){var i=e[0],n=e[1],o=e[2];1!==r&&(i*=r=1/r,n*=r,o*=r);var s=Math.sin(t),l=Math.cos(t),h=1-l,_=this._el[0],a=this._el[1],u=this._el[2],c=this._el[3],f=this._el[4],p=this._el[5],d=this._el[6],y=this._el[7],b=this._el[8],m=this._el[9],g=this._el[10],v=this._el[11],x=i*i*h+l,O=n*i*h+o*s,E=o*i*h-n*s,w=i*n*h-o*s,j=n*n*h+l,P=o*n*h+i*s,R=i*o*h+n*s,A=n*o*h-i*s,M=o*o*h+l;return this._el[0]=_*x+f*O+b*E,this._el[1]=a*x+p*O+m*E,this._el[2]=u*x+d*O+g*E,this._el[3]=c*x+y*O+v*E,this._el[4]=_*w+f*j+b*P,this._el[5]=a*w+p*j+m*P,this._el[6]=u*w+d*j+g*P,this._el[7]=c*w+y*j+v*P,this._el[8]=_*R+f*A+b*M,this._el[9]=a*R+p*A+m*M,this._el[10]=u*R+d*A+g*M,this._el[11]=c*R+y*A+v*M,this}},t.prototype.lookAt=function(t,e,r){var i,n,o,s,l,h,_,a,u,c,f=t.x,p=t.y,d=t.z,y=r.x,b=r.y,m=r.z,g=e.x,v=e.y,x=e.z;if(f!==g||p!==v||d!==x)return _=f-e.x,a=p-e.y,u=d-e.z,i=b*(u*=c=1/Math.sqrt(_*_+a*a+u*u))-m*(a*=c),n=m*(_*=c)-y*u,o=y*a-b*_,(c=Math.sqrt(i*i+n*n+o*o))?(i*=c=1/c,n*=c,o*=c):(i=0,n=0,o=0),s=a*o-u*n,l=u*i-_*o,h=_*n-a*i,(c=Math.sqrt(s*s+l*l+h*h))?(s*=c=1/c,l*=c,h*=c):(s=0,l=0,h=0),this._el[0]=i,this._el[1]=s,this._el[2]=_,this._el[3]=0,this._el[4]=n,this._el[5]=l,this._el[6]=a,this._el[7]=0,this._el[8]=o,this._el[9]=h,this._el[10]=u,this._el[11]=0,this._el[12]=-(i*f+n*p+o*d),this._el[13]=-(s*f+l*p+h*d),this._el[14]=-(_*f+a*p+u*d),this._el[15]=1,this;this.identity()},t.prototype.perspective=function(t,e,r,i){var n=r*Math.tan(t*Math.PI/360),o=2*(n*e),s=2*n,l=i-r;return this._el[0]=2*r/o,this._el[1]=0,this._el[2]=0,this._el[3]=0,this._el[4]=0,this._el[5]=2*r/s,this._el[6]=0,this._el[7]=0,this._el[8]=0,this._el[9]=0,this._el[10]=-(i+r)/l,this._el[11]=-1,this._el[12]=0,this._el[13]=0,this._el[14]=-i*r*2/l,this._el[15]=0,this},t.prototype.transpose=function(){var t=this._el[0],e=this._el[1],r=this._el[2],i=this._el[3],n=this._el[4],o=this._el[5],s=this._el[6],l=this._el[7],h=this._el[8],_=this._el[9],a=this._el[10],u=this._el[11],c=this._el[12],f=this._el[13],p=this._el[14],d=this._el[15];return this._el[0]=t,this._el[1]=n,this._el[2]=h,this._el[3]=c,this._el[4]=e,this._el[5]=o,this._el[6]=_,this._el[7]=f,this._el[8]=r,this._el[9]=s,this._el[10]=a,this._el[11]=p,this._el[12]=i,this._el[13]=l,this._el[14]=u,this._el[15]=d,this},t.prototype.inverse=function(){var t=this._el[0],e=this._el[1],r=this._el[2],i=this._el[3],n=this._el[4],o=this._el[5],s=this._el[6],l=this._el[7],h=this._el[8],_=this._el[9],a=this._el[10],u=this._el[11],c=this._el[12],f=this._el[13],p=this._el[14],d=this._el[15],y=t*o-e*n,b=t*s-r*n,m=t*l-i*n,g=e*s-r*o,v=e*l-i*o,x=r*l-i*s,O=h*f-_*c,E=h*p-a*c,w=h*d-u*c,j=_*p-a*f,P=_*d-u*f,R=a*d-u*p,A=1/(y*R-b*P+m*j+g*w-v*E+x*O);return this._el[0]=(o*R-s*P+l*j)*A,this._el[1]=(-e*R+r*P-i*j)*A,this._el[2]=(f*x-p*v+d*g)*A,this._el[3]=(-_*x+a*v-u*g)*A,this._el[4]=(-n*R+s*w-l*E)*A,this._el[5]=(t*R-r*w+i*E)*A,this._el[6]=(-c*x+p*m-d*b)*A,this._el[7]=(h*x-a*m+u*b)*A,this._el[8]=(n*P-o*w+l*O)*A,this._el[9]=(-t*P+e*w-i*O)*A,this._el[10]=(c*v-f*m+d*y)*A,this._el[11]=(-h*v+_*m-u*y)*A,this._el[12]=(-n*j+o*E-s*O)*A,this._el[13]=(t*j-e*E+r*O)*A,this._el[14]=(-c*g+f*b-p*y)*A,this._el[15]=(h*g-_*b+a*y)*A,this},t.prototype.clone=function(){var e=new t,r=this._el[0],i=this._el[1],n=this._el[2],o=this._el[3],s=this._el[4],l=this._el[5],h=this._el[6],_=this._el[7],a=this._el[8],u=this._el[9],c=this._el[10],f=this._el[11],p=this._el[12],d=this._el[13],y=this._el[14],b=this._el[15];return e.el[0]=r,e.el[1]=i,e.el[2]=n,e.el[3]=o,e.el[4]=s,e.el[5]=l,e.el[6]=h,e.el[7]=_,e.el[8]=a,e.el[9]=u,e.el[10]=c,e.el[11]=f,e.el[12]=p,e.el[13]=d,e.el[14]=y,e.el[15]=b,e},t.prototype.copy=function(t){return this._el[0]=t.el[0],this._el[1]=t.el[1],this._el[2]=t.el[2],this._el[3]=t.el[3],this._el[4]=t.el[4],this._el[5]=t.el[5],this._el[6]=t.el[6],this._el[7]=t.el[7],this._el[8]=t.el[8],this._el[9]=t.el[9],this._el[10]=t.el[10],this._el[11]=t.el[11],this._el[12]=t.el[12],this._el[13]=t.el[13],this._el[14]=t.el[14],this._el[15]=t.el[15],this},t.prototype.compose=function(t,e,r){var i=e.x,n=e.y,o=e.z,s=e.w,l=i+i,h=n+n,_=o+o,a=i*l,u=i*h,c=i*_,f=n*h,p=n*_,d=o*_,y=s*l,b=s*h,m=s*_,g=r.x,v=r.y,x=r.z;return this._el[0]=(1-(f+d))*g,this._el[1]=(u+m)*g,this._el[2]=(c-b)*g,this._el[3]=0,this._el[4]=(u-m)*v,this._el[5]=(1-(a+d))*v,this._el[6]=(p+y)*v,this._el[7]=0,this._el[8]=(c+b)*x,this._el[9]=(p-y)*x,this._el[10]=(1-(a+f))*x,this._el[11]=0,this._el[12]=t.x,this._el[13]=t.y,this._el[14]=t.z,this._el[15]=1,this},t.prototype.getInverse=function(t){var e=t.el[0],r=t.el[1],i=t.el[2],n=t.el[3],o=t.el[4],s=t.el[5],l=t.el[6],h=t.el[7],_=t.el[8],a=t.el[9],u=t.el[10],c=t.el[11],f=t.el[12],p=t.el[13],d=t.el[14],y=t.el[15],b=e*s-r*o,m=e*l-i*o,g=e*h-n*o,v=r*l-i*s,x=r*h-n*s,O=i*h-n*l,E=_*p-a*f,w=_*d-u*f,j=_*y-c*f,P=a*d-u*p,R=a*y-c*p,A=u*y-c*d,M=1/(b*A-m*R+g*P+v*j-x*w+O*E);return this._el[0]=(s*A-l*R+h*P)*M,this._el[1]=(-r*A+i*R-n*P)*M,this._el[2]=(p*O-d*x+y*v)*M,this._el[3]=(-a*O+u*x-c*v)*M,this._el[4]=(-o*A+l*j-h*w)*M,this._el[5]=(e*A-i*j+n*w)*M,this._el[6]=(-f*O+d*g-y*m)*M,this._el[7]=(_*O-u*g+c*m)*M,this._el[8]=(o*R-s*j+h*E)*M,this._el[9]=(-e*R+r*j-n*E)*M,this._el[10]=(f*x-p*g+y*b)*M,this._el[11]=(-_*x+a*g-c*b)*M,this._el[12]=(-o*P+s*w-l*E)*M,this._el[13]=(e*P-r*w+i*E)*M,this._el[14]=(-f*v+p*m-d*b)*M,this._el[15]=(_*v-a*m+u*b)*M,this},t}(),o=r(0),s=r.n(o);!function(t){t.FRONT="SIDE_FRONT",t.BACK="SIDE_BACK",t.DOUBLE="SIDE_DOUBLE"}(i||(i={}));var l,h,_=function(t,e){return void 0===e&&(e={}),t.getContext("webgl",e)||t.getContext("experimental-webgl",e)},a=function(t,e,r){var i=t.createShader(r);if(t.shaderSource(i,e),t.compileShader(i),!t.getShaderParameter(i,t.COMPILE_STATUS))throw new Error("could not compile shader:"+t.getShaderInfoLog(i));return i},u=function(t,e){var r=function(t,e){var r=t.createBuffer();return t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,r),t.bufferData(t.ELEMENT_ARRAY_BUFFER,new Int16Array(e),t.STATIC_DRAW),t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,null),r}(t,e);t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,r),t.drawElements(t.TRIANGLES,e.length,t.UNSIGNED_SHORT,0)},c=function(t){return void 0===t&&(t=1e3),(new Date).getTime().toString(16)+Math.floor(t*Math.random()).toString(16)},f=(l=function(t,e){return(l=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(t,e)},function(t,e){function r(){this.constructor=t}l(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}),p=function(t){function e(e,r,i){void 0===e&&(e=0),void 0===r&&(r=0),void 0===i&&(i=0);var n=t.call(this)||this;return n._x=0,n._y=0,n._z=0,n._x=e,n._y=r,n._z=i,n}return f(e,t),Object.defineProperty(e.prototype,"x",{get:function(){return this._x},set:function(t){this._x=t,this.emit("change")},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"y",{get:function(){return this._y},set:function(t){this._y=t,this.emit("change")},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"z",{get:function(){return this._z},set:function(t){this._z=t,this.emit("change")},enumerable:!0,configurable:!0}),e}(s.a),d=function(){function t(t,e,r,i){void 0===t&&(t=0),void 0===e&&(e=0),void 0===r&&(r=0),void 0===i&&(i=0),this._x=0,this._y=0,this._z=0,this._w=0,this._x=t,this._y=e,this._z=r,this._w=i}return Object.defineProperty(t.prototype,"x",{get:function(){return this._x},set:function(t){this._x=t},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"y",{get:function(){return this._y},set:function(t){this._y=t},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"z",{get:function(){return this._z},set:function(t){this._z=t},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"w",{get:function(){return this._w},set:function(t){this._w=t},enumerable:!0,configurable:!0}),t.prototype.setFromEuler=function(t){var e=t.x,r=t.y,i=t.z,n=Math.cos,o=Math.sin,s=n(e/2),l=n(r/2),h=n(i/2),_=o(e/2),a=o(r/2),u=o(i/2);return this._x=_*l*h+s*a*u,this._y=s*a*h-_*l*u,this._z=s*l*u+_*a*h,this._w=s*l*h-_*a*u,this},t}(),y=function(){var t=function(e,r){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(e,r)};return function(e,r){function i(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(i.prototype=r.prototype,new i)}}(),b=function(t){function e(){var e=t.call(this)||this;return e._id=c(),e._position=new p,e._up=new p(0,1,0),e._scale=new p(1,1,1),e._rotation=new p,e._quaternion=new d,e._parent=null,e._children=[],e._matrix=new n,e._matrixWorld=new n,e._modelViewMatrix=new n,e._matrixWorldNeedsUpdate=!1,e._onChangeRotation=function(){e._quaternion.setFromEuler(e._rotation)},e.rotation.on("change",e._onChangeRotation),e}return y(e,t),Object.defineProperty(e.prototype,"id",{get:function(){return this._id},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"position",{get:function(){return this._position},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"up",{get:function(){return this._up},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"scale",{get:function(){return this._scale},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"rotation",{get:function(){return this._rotation},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"quaternion",{get:function(){return this._quaternion},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"parent",{get:function(){return this._parent},set:function(t){this._parent=t},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"children",{get:function(){return this._children},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"matrix",{get:function(){return this._matrix},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"matrixWorld",{get:function(){return this._matrixWorld},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"modelViewMatrix",{get:function(){return this._modelViewMatrix},enumerable:!0,configurable:!0}),e.prototype.add=function(t){this._children.push(t),t.parent=this},e.prototype.updateMatrix=function(){this._matrix.compose(this._position,this._quaternion,this._scale),this._matrixWorldNeedsUpdate=!0},e.prototype.updateMatrixWorld=function(){this.updateMatrix(),this._matrixWorldNeedsUpdate&&(this._parent?this._matrixWorld.multiplyMatrices(this._parent.matrixWorld,this._matrix):this._matrixWorld.copy(this.matrix),this._matrixWorldNeedsUpdate=!1);for(var t=this._children,e=0,r=t.length;e<r;e++)t[e].updateMatrixWorld()},e}(s.a),m=function(){var t=function(e,r){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(e,r)};return function(e,r){function i(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(i.prototype=r.prototype,new i)}}(),g=function(t){function e(e,r){var i=t.call(this)||this;return i._geometry=e,i._material=r,i}return m(e,t),Object.defineProperty(e.prototype,"geometry",{get:function(){return this._geometry},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"material",{get:function(){return this._material},enumerable:!0,configurable:!0}),e}(b),v=function(){var t=function(e,r){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(e,r)};return function(e,r){function i(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(i.prototype=r.prototype,new i)}}(),x=function(t){function e(e,r){var i=t.call(this)||this;return i._geometry=e,i._material=r,i}return v(e,t),Object.defineProperty(e.prototype,"geometry",{get:function(){return this._geometry},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"material",{get:function(){return this._material},enumerable:!0,configurable:!0}),e}(b),O=function(){function t(t){void 0===t&&(t={}),this._renderList=[],this._pMatrix=new n,this._textures=[],this._width=400,this._height=300,this._pixelRatio=2,this._domElement=document.createElement("canvas"),this._clearColor=[0,0,0,1],this._gl=_(this._domElement,t),this.setSize(this._width,this._height)}return Object.defineProperty(t.prototype,"pixelRatio",{get:function(){return this._pixelRatio},set:function(t){this._pixelRatio=t},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"domElement",{get:function(){return this._domElement},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"clearColor",{set:function(t){this._clearColor=t},enumerable:!0,configurable:!0}),t.prototype.setSize=function(t,e){var r=t*this._pixelRatio,i=e*this._pixelRatio;this._width=t,this._height=e,this._domElement.style.width=this._width+"px",this._domElement.style.height=this._height+"px",this._domElement.width=r,this._domElement.height=i,this._gl.viewport(0,0,r,i),this._pMatrix.perspective(90,r/i,.1,100)},t.prototype.render=function(t,e){var r,i,n,o=this;r=this._gl,void 0===(i=this._clearColor)&&(i=[0,0,0,1]),void 0===n&&(n=1),r.clearColor(i[0],i[1],i[2],i[3]),r.clearDepth(n),r.clear(r.COLOR_BUFFER_BIT|r.DEPTH_BUFFER_BIT),t.updateMatrixWorld(),e.updateMatrixWorld(),t.needsUpdate&&(this._renderList=[],this._projectObject(t),t.needsUpdate=!1),this._renderList.forEach(function(t){o._renderObj(t,e)}),this._gl.flush()},t.prototype._projectObject=function(t){var e=this;if(t instanceof g||t instanceof x){var r=function(t,e,r){var i=a(t,e,t.VERTEX_SHADER),n=a(t,r,t.FRAGMENT_SHADER),o=t.createProgram();if(t.attachShader(o,i),t.attachShader(o,n),t.linkProgram(o),!t.getProgramParameter(o,t.LINK_STATUS))throw new Error("program filed to link:"+t.getProgramInfoLog(o));return t.useProgram(o),o}(this._gl,t.material.vertexShader,t.material.fragmentShader),i={};Object.keys(t.geometry.attributes).forEach(function(n){var o,s,l,h=t.geometry.attributes[n],_={vbo:(o=e._gl,s=h.verticies,l=o.createBuffer(),o.bindBuffer(o.ARRAY_BUFFER,l),o.bufferData(o.ARRAY_BUFFER,new Float32Array(s),o.STATIC_DRAW),o.bindBuffer(o.ARRAY_BUFFER,null),l),attrLoc:e._gl.getAttribLocation(r,n),stride:h.stride};i[n]=_});var n={};Object.keys(t.material.uniforms).forEach(function(i){var o=t.material.uniforms[i];if(n[i]=e._gl.getUniformLocation(r,i),"t"===o.type){var s=e._gl.TEXTURE0,l=o.value,h=function(t,e,r){var i=t.createTexture();return t.activeTexture(r),t.bindTexture(t.TEXTURE_2D,i),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,t.RGBA,t.UNSIGNED_BYTE,e),t.generateMipmap(t.TEXTURE_2D),t.bindTexture(t.TEXTURE_2D,null),i}(e._gl,l,s);e._textures.push({slot:s,image:l,webglTexture:h})}});var o={obj:t,program:r,attributes:i,uniforms:n};this._renderList.push(o)}t.children.forEach(function(t){e._projectObject(t)})},t.prototype._renderObj=function(t,e){var r,n=this,o=t.obj,s=t.program,l=t.attributes,h=t.uniforms,_=o.geometry,a=o.material;o.modelViewMatrix.multiplyMatrices(e.matrixWorldInverse,o.matrixWorld),Object.keys(l).forEach(function(t){var e=l[t];n._gl.bindBuffer(n._gl.ARRAY_BUFFER,e.vbo),n._gl.enableVertexAttribArray(e.attrLoc),n._gl.vertexAttribPointer(e.attrLoc,e.stride,n._gl.FLOAT,!1,0,0),n._gl.bindBuffer(n._gl.ARRAY_BUFFER,null)}),this._gl.useProgram(s),a.uniforms.mMatrix.value=o.matrix,a.uniforms.vMatrix.value=e.matrixWorldInverse,a.uniforms.pMatrix.value=this._pMatrix,a.uniforms.mvMatrix.value=o.modelViewMatrix,Object.keys(h).forEach(function(t){var e=h[t],r=a.uniforms[t];switch(r.type){case"v4":n._gl.uniformMatrix4fv(e,!1,r.value.el);break;case"f":n._gl.uniform1f(e,r.value);break;case"t":var i=n._textures.find(function(t){return t.image.src===r.value.src});i&&(n._gl.activeTexture(n._gl.TEXTURE0),n._gl.bindTexture(n._gl.TEXTURE_2D,i.webglTexture),n._gl.uniform1i(e,0))}}),(r=this._gl).enable(r.DEPTH_TEST),r.depthFunc(r.LEQUAL),function(t,e){e?(t.enable(t.BLEND),t.blendFunc(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA)):t.disable(t.BLEND)}(this._gl,a.transparent),function(t,e){switch(e){case i.DOUBLE:t.disable(t.CULL_FACE);break;case i.BACK:t.enable(t.CULL_FACE),t.frontFace(t.CW);break;case i.FRONT:default:t.enable(t.CULL_FACE),t.frontFace(t.CCW)}}(this._gl,a.side),o instanceof g?u(this._gl,_.index):o instanceof x&&function(t,e){t.drawArrays(t.POINTS,0,e.length/3)}(this._gl,_.attributes.position.verticies)},t}(),E=function(){function t(){this._attributes={},this._index=[]}return Object.defineProperty(t.prototype,"attributes",{get:function(){return this._attributes},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"index",{get:function(){return this._index},set:function(t){this._index=t},enumerable:!0,configurable:!0}),t.prototype.addAttribute=function(t,e,r){this._attributes[t]={stride:e,verticies:r}},t}(),w=function(){return(w=Object.assign||function(t){for(var e,r=1,i=arguments.length;r<i;r++)for(var n in e=arguments[r])Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t}).apply(this,arguments)};!function(t){t.NO="BLENDING_NO"}(h||(h={}));var j=function(){function t(t){this._uniforms={mMatrix:{type:"v4",value:new n},vMatrix:{type:"v4",value:new n},pMatrix:{type:"v4",value:new n},mvMatrix:{type:"v4",value:new n}},this._transparent=!1,this._side=i.FRONT,this._blending=h.NO,this._uniforms=w({},this._uniforms,t.uniforms),this._vertexShader=t.vertexShader,this._fragmentShader=t.fragmentShader,this._transparent=t.transparent||!1,this._side=t.side||this._side,this._blending=t.blending||"BLENDING_NO"}return Object.defineProperty(t.prototype,"uniforms",{get:function(){return this._uniforms},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"vertexShader",{get:function(){return this._vertexShader},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"fragmentShader",{get:function(){return this._fragmentShader},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"transparent",{get:function(){return this._transparent},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"side",{get:function(){return this._side},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"blending",{get:function(){return this._blending},enumerable:!0,configurable:!0}),t}(),P=function(){var t=function(e,r){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(e,r)};return function(e,r){function i(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(i.prototype=r.prototype,new i)}}(),R=function(t){function e(){var e=t.call(this)||this;return e._needsUpdate=!0,e}return P(e,t),Object.defineProperty(e.prototype,"needsUpdate",{get:function(){return this._needsUpdate},set:function(t){this._needsUpdate=t},enumerable:!0,configurable:!0}),e}(b),A=function(){var t=function(e,r){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(e,r)};return function(e,r){function i(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(i.prototype=r.prototype,new i)}}(),M=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e._matrixWorldInverse=new n,e}return A(e,t),Object.defineProperty(e.prototype,"matrixWorldInverse",{get:function(){return this._matrixWorldInverse},enumerable:!0,configurable:!0}),e.prototype.updateMatrixWorld=function(){t.prototype.updateMatrixWorld.call(this),this.matrixWorldInverse.getInverse(this.matrixWorld)},e}(b);e.default={Renderer:O,Matrix4:n,Object3D:b,Geometry:E,Material:j,Mesh:g,Points:x,Scene:R,Vector3:p,Quaternion:d,Camera:M}}]).default});