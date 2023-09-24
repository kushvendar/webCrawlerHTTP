const {normalizeURL,getURLfromHTML}=require('./crawl.js')
const {test,expect}=require('@jest/globals')

test('normalizURL',()=>{
    const input='https://blog.boot.dev/path'
    const actual=normalizeURL(input)
    const expected='blog.boot.dev/path'
    
    expect(actual).toEqual(expected)
})

test('normalizURL /path',()=>{
    const input='https://blog.boot.dev/path/'
    const actual=normalizeURL(input)
    const expected='blog.boot.dev/path'
    
    expect(actual).toEqual(expected)
})

test('normalizURL for captial',()=>{
    const input='https://BLOG.Boot.dEv/path'
    const actual=normalizeURL(input)
    const expected='blog.boot.dev/path'
    
    expect(actual).toEqual(expected)
})

test('normalizURL for https',()=>{
    const input='http://blog.Boot.dev/path'
    const actual=normalizeURL(input)
    const expected='blog.boot.dev/path'
    
    expect(actual).toEqual(expected)
})

test('get URLfrom HTMl',()=>{
const inputHTML=`<html>
    <body>
        <a href="https://blog.boot.dev/path">
        boot.dev
        </a>
    </body>
</html> `
const inputbodyHTML="https://blog.boot.dev/path"
const actual=getURLfromHTML(inputHTML,inputbodyHTML);
const expected=["https://blog.boot.dev/path"];

expect(actual).toEqual(expected);

})

test('get URLfrom HTMl relative and absolute',()=>{
    const inputHTML=`<html>
        <body>
            <a href="/path1/">
            boot.dev
            </a>
            <a href="https://blog.boot.dev/path2/">
            boot.dev absolute
            </a>
        </body>
    </html> `
    const inputbodyHTML="https://blog.boot.dev"
    const actual=getURLfromHTML(inputHTML,inputbodyHTML);
    const expected=["https://blog.boot.dev/path1/","https://blog.boot.dev/path2/"];
    
    expect(actual).toEqual(expected);
    
    })

    test('check invalid format',()=>{
        const inputHTML=`<html>
        <body>
            <a href="invalid">
           invalid
            </a>
        </body>
    </html> `
    const inputbodyHTML="https://blog.boot.dev"
    const actual=getURLfromHTML(inputHTML,inputbodyHTML);
    const expected=[];
    
    expect(actual).toEqual(expected);
    })

