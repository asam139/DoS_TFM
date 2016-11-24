var store=function store(key,value){var lsSupport=false;if(storageAvailable('localStorage')){lsSupport=true;}
if(typeof value!=="undefined"&&value!==null){if(typeof value==='object'){value=JSON.stringify(value);}
if(lsSupport){localStorage.setItem(key,value);}else{createCookie(key,value,30);}}
if(typeof value==="undefined"){if(lsSupport){data=localStorage.getItem(key);}else{data=readCookie(key);}
try{data=JSON.parse(data);}
catch(e){data=data;}
return data;}
if(value===null){if(lsSupport){localStorage.removeItem(key);}else{createCookie(key,'',-1);}}
function createCookie(key,value,exp){var date=new Date();date.setTime(date.getTime()+(exp*24*60*60*1000));var expires="; expires="+ date.toGMTString();document.cookie=key+"="+ value+ expires+"; path=/";}
function readCookie(key){var nameEQ=key+"=";var ca=document.cookie.split(';');for(var i=0,max=ca.length;i<max;i++){var c=ca[i];while(c.charAt(0)===' ')c=c.substring(1,c.length);if(c.indexOf(nameEQ)===0)return c.substring(nameEQ.length,c.length);}
return null;}
function storageAvailable(type){try{var storage=window[type],x='__storage_test__';storage.setItem(x,x);storage.removeItem(x);return true;}
catch(e){return false;}}};