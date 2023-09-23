const {normalizeURL}=require('./crawl.js')
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