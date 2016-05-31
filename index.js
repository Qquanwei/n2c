"use strict"
function n2c(num){
  let convert = { '0':'零', '1':'一', '2':'二', '3':'三', '4':'四', '5':'五', '6':'六', '7':'七', '8':'八', '9':'九','.':'' };
  let weight= { '0':'', '1':'十', '2':'百', '3':'千' };
  let an=[];
  num=(num+'').replace(/^0+/,'').replace(/0{2,}/g,function(w){return '.'.repeat(w.length)}).replace(/0$/,'.');
  function getWeight(index,only){
    if(index<4) return !only?weight[index]:'';
    else return getWeight(index-4,only)+((index==4)?'万':'');
  }
  for(let i=0;i<num.length;++i) an.push(num[i]);

  return (function getE(array,deep){
    deep=deep||0;
    if(array.length>8) 
      return getE(array.slice(0,array.length-8),deep+1)+getE(array.slice(-8),deep);

    let length=array.length;
    let i=0;
    for(;i<length;++i) if(array[i]!=='.') break;
    i--;
    return array.map(function(iter,index){
      if(index<=i) return '';
      if((length-index-1)<=2&&(/\.[1-9]/.test(array.slice(index,index+2).join('')))) return '零';
      return convert[iter]+((iter!=='0')?getWeight(length-index-1,iter==='.'):'');
    }).join('')+('亿'.repeat(deep));
  })(an)

}
module.exports=n2c;
