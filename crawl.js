function normalizeURL(url){
    const urlmodify=new URL(url);   
    const path=urlmodify.hostname+urlmodify.pathname;

    if(path.length>0&&path.slice(-1)==='/'){
        return path.slice(0,-1);
    }
    return path;
}


module.exports={
    normalizeURL
}