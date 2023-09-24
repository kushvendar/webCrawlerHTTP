// adding jsdom 
const{JSDOM}=require('jsdom')
function getURLfromHTML(htmlBody,baseURL){
    const URLarr=[];
    const element=new JSDOM(htmlBody);
    const link=element.window.document.querySelectorAll('a');
    for(const links of link){
        if(links.href.slice(0,1)==="/"){
            // its a relative url
            try{
                const urlobj=new URL(`${baseURL}${links.href}`); 
                URLarr.push(urlobj.href)
            } catch(err){
            console.log(`error message ${err.message}`)
            }
            
        }
        else {
            // absolute url
            try{
                const urlobj=new URL(`${links.href}`)
                URLarr.push(urlobj.href)
            } catch(err){
            console.log(`error message ${err.message}`)
            }
            
        }
       
    }
    
    return URLarr;
}
function normalizeURL(url){
    const urlmodify=new URL(url);   
    const path=urlmodify.hostname+urlmodify.pathname;

    if(path.length>0&&path.slice(-1)==='/'){
        return path.slice(0,-1);
    }
    return path;
}


module.exports={
    normalizeURL, 
    getURLfromHTML
}