var n2c = require('../index.js');
var assert = require('chai').assert;
describe('n2c',function(){
  it('base test',function(){
      var s=[0,1,2,3,4,5,6,7,8,9,10].map(n2c).join('');
      assert(s==='零一二三四五六七八九十');
  });
  it('123 convert 一百二十三',function(){
    assert(n2c('123')==='一百二十三');
  });

  it('lang number test',function(){
    assert(n2c('123456789009876543210')==='一万二千三百四十五亿亿六千七百八十九万零九十八亿七千六百五十四万三千二百一十');
  });

  it('zero test',function(){
    assert(n2c('1000')==='一千')
    assert(n2c('001000201')==='一百万二百零一');
    assert(n2c('100000000')==='一亿');
    assert(n2c('10001')==='一万零一')
  });

  it('test 十',function(){
    assert(n2c('1000000000')==='十亿');
    assert(n2c('2010')==='二千零一十');
  });

});
