import{a as s}from"./chunk-JFSNWHGR.js";import{W as i,aa as p}from"./chunk-PRRQ4Y73.js";var a=class e{apiUrl="https://adazon-1865d-default-rtdb.firebaseio.com/";http=p(s);getApiUrl(t){return this.http.get(`${this.apiUrl}${t}.json`)}postApiUrl(t,r){return this.http.post(`${this.apiUrl}${t}`,JSON.stringify(r))}deleteApiRequest(t,r){return this.http.delete(`${this.apiUrl}${t}/${r}`)}static \u0275fac=function(r){return new(r||e)};static \u0275prov=i({token:e,factory:e.\u0275fac,providedIn:"root"})};export{a};