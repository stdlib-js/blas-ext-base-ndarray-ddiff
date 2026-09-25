"use strict";var C=function(a,r){return function(){try{return r||a((r={exports:{}}).exports,r),r.exports}catch(e){throw (r=0, e)}};};var B=C(function(J,A){
var E=require('@stdlib/ndarray-base-ndarraylike2scalar/dist'),n=require('@stdlib/ndarray-base-numel-dimension/dist'),d=require('@stdlib/ndarray-base-stride/dist'),o=require('@stdlib/ndarray-base-offset/dist'),u=require('@stdlib/ndarray-base-data-buffer/dist'),F=require('@stdlib/blas-ext-base-ddiff/dist').ndarray;function G(a){var r,e,v,i,s,p,q,x,c,f,w,g,k,l,m,N,D,O,S,b,h,j,t,z;return t=a[0],e=a[1],v=a[2],i=a[3],r=a[4],z=E(a[5]),j=n(t,0),O=n(e,0),D=n(v,0),h=u(t),f=u(e),N=u(v),k=u(i),q=u(r),b=d(t,0),c=d(e,0),m=d(v,0),g=d(i,0),p=d(r,0),S=o(t),x=o(e),l=o(v),w=o(i),s=o(r),F(j,z,h,b,S,O,f,c,x,D,N,m,l,k,g,w,q,p,s),i}A.exports=G
});var H=B();module.exports=H;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
