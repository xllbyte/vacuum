import{O as t}from"./index-be8161ee.js";function i(e){return t.post("/tab/getAll",e)}function s(e){return t.post("/tab/plcSave",e)}function l(e,n){return t.post(`/tab/keepGetting?tagName=${e}`,n)}function o(e){return t.post(`/file/save?fileName=${e}`)}function r(){return t.get("/file/getAllFileName")}function f(e){return t.post(`/file/getFileInfo?fileName=${e}`)}export{f as a,o as f,l as k,i as p,r as q,s};
