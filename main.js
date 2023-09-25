 const {crawlPage}= require('./crawl.js');
async function main(){
    if(process.argv.length<3){
        console.log("no argument provided")
        console.log(process.argv)
        process.exit(1)
    }
    
    if(process.argv.length>3){
        console.log("too many args provided")
        process.exit(1)

    }
    // [node,main.js,url]
    const urlInput=process.argv[2];
    
    console.log(`start crawling ${urlInput}`)
    const pages=await crawlPage(urlInput,urlInput,{})
    for(const page of Object.entries(pages)){
         console.log(page)
    }
}
main()