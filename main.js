 const {crawlPage}= require('./crawl.js');
function main(){
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
    crawlPage(urlInput)
}
main()