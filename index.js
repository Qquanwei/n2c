"use strict"
// . : preset pass
// x : preset none
function n2c(num){
  let convert = { '0':'零', '1':'一', '2':'二', '3':'三', '4':'四', '5':'五', '6':'六', '7':'七', '8':'八', '9':'九','.':'','x':''};
  let weight= { '0':'', '1':'十', '2':'百', '3':'千', };
  num=(num+'').replace(/^0+/,'').replace(/0{2,}/g,function(w){return '.'.repeat(w.length)}).replace(/0$/,'.');
  let length=num.length;
  function getWeight(index){
    if(index<4) return weight[index];
    else if(index<8) return getWeight(index-4)+(index===4?'万':'');
    else return getWeight(index-8)+ ((index%8===0)?'亿':'');
  }
  let an=[];
  for(let i=0;i<length;++i) an.push(num[i]);

  return an.map(function(iter,index){
    return convert[iter]+(index%4==0||iter!='.')?getWeight(length-index-1):'';
  }).join('');
}
module.exports=n2c;
