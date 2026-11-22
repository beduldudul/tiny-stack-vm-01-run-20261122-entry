import{readFileSync as R,writeFileSync as W,mkdirSync as K,readdirSync as L}from"node:fs";
const I=process.env.MAKEFUN_INPUT_DIR||"/input",O=process.env.MAKEFUN_OUTPUT_DIR||"/output";
const T='!2b%\'+,0        *******&***&*** ***             AEEA!           &)              %%"%"';
function r(P,q){
const n=P.length,S=new Int32Array(256);let p=0;const C=new Int32Array(64);let c=0;const M=new Int32Array(256),o=new Uint8Array(65536);let l=0,j=0,x=0,s=0,t;
const d=e=>[o.subarray(0,l),e];
for(;;){
if(s===1e6)return d(10);
if(x<0||x>=n)return d(9);
const g=P[x],v=T.charCodeAt(g)-33;
if(g>83||v<0)return d(5);
const m=v>>4,a=(v>>2)&3,b=v&3;
if(x+m>=n)return d(9);
s++;const y=x+1+m;
if(p<a)return d(2);
if(p-a+b>256)return d(3);
x=y;
switch(g){
case 0:return d(0);
case 1:S[p++]=(P[y-1]<<24)>>24;break;
case 2:S[p++]=P[y-4]|P[y-3]<<8|P[y-2]<<16|P[y-1]<<24;break;
case 3:p--;break;
case 4:S[p]=S[p-1];p++;break;
case 5:[S[p-1],S[p-2]]=[S[p-2],S[p-1]];break;
case 6:S[p]=S[p-2];p++;break;
case 7:[S[p-3],S[p-2],S[p-1]]=[S[p-2],S[p-1],S[p-3]];break;
case 23:S[p-1]=-S[p-1]|0;break;
case 27:S[p-1]=~S[p-1];break;
case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:case 26:case 28:case 29:case 30:case 32:case 33:case 34:{
const h=S[p-1],f=S[p-2];let e;
if(g===16)e=(f+h)|0;
else if(g===17)e=(f-h)|0;
else if(g===18)e=Math.imul(f,h);
else if(g<23){if(!h)return d(4);e=g===19?f===-2147483648&&h===-1?f:(f/h)|0:g===20?h===-1?0:f%h|0:g===21?(f>>>0)/(h>>>0)|0:(f>>>0)%(h>>>0)|0;}
else if(g===24)e=f&h;
else if(g===25)e=f|h;
else if(g===26)e=f^h;
else if(g===28)e=f<<(h&31);
else if(g===29)e=f>>(h&31);
else if(g===30)e=(f>>>(h&31))|0;
else if(g===32)e=f===h?1:0;
else if(g===33)e=f<h?1:0;
else e=(f>>>0)<(h>>>0)?1:0;
p-=2;S[p++]=e;break;}
case 48:case 49:case 50:{
const w=((P[y-2]|P[y-1]<<8)<<16)>>16,k=g===48||(g===49?S[--p]===0:S[--p]!==0);
if(k)x=y+w;break;}
case 51:
if(c===64)return d(7);
C[c++]=y;x=P[y-2]|P[y-1]<<8;break;
case 52:
if(!c)return d(8);
x=C[--c];break;
case 64:case 65:{
t=S[p-1];
if(t<0||t>255)return d(6);
if(g===64)S[p-1]=M[t];else{M[t]=S[p-2];p-=2;}break;}
case 80:
if(l+(t=String(S[p-1])).length>65536)return d(11);
p--;o.set(Buffer.from(t),l);l+=t.length;break;
case 81:
if(l>65535)return d(11);
o[l++]=S[--p]&255;break;
case 82:S[p++]=j<q.length?q[j++]:-1;break;
case 83:return d(S[--p]&255);
}}
}
for(const i of L(I).sort()){const z=I+"/"+i,a=O+"/"+i+"/",[u,e]=r(R(z+"/program.bin"),R(z+"/input.bin"));K(a,{recursive:!0});W(a+"stdout.bin",u);W(a+"exit.txt",e+"\n");}
