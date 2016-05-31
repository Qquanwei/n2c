var n2c = require('../index.js');
var assert = require('chai').assert;
describe('n2c',function(){
  it('123 convert 一百二十三',function(){
    assert(n2c('123')==='一百二十三');
  });

  it('lang number test',function(){
    assert(n2c('123456789009876543210')==='一万二千三百四十五亿亿六千七百八十九万九十八亿七千六百五十四万三千二百一十');
  });

  it('zero test',function(){
    console.log('1',n2c('30000000000000000'));
    console.log('1000',n2c(1000));
    assert(n2c('1000')==='一千')
    assert(n2c('001000201')==='一百万二百零一');
    assert(n2c('10000000000')==='一百亿');
  });

});
