"use strict"
module.exports=function(num){
  if (num == 0) return '零';
  var convert = {
    '0': '零',
    '1': '一',
    '2': '二',
    '3': '三',
    '4': '四',
    '5': '五',
    '6': '六',
    '7': '七',
    '8': '八',
    '9': '九',
    '.': ''
  };
  var weight = {
    '0': '',
    '1': '十',
    '2': '百',
    '3': '千'
  };

  function getWeight(index, only) {
    if (index < 4) return !only ? weight[index] : '';
    else return getWeight(index - 4, only) + ((index == 4) ? '万' : '');
  }
  return (function getE(strnum, deep) {
    if (strnum === '0') return '';
    deep = deep || 0;
    if (strnum.length > 8)
      return getE(strnum.substr(0, strnum.length - 8), deep + 1) + getE(strnum.substr(-8), deep);

    strnum = strnum.replace(/^0+/, '').replace(/0/g, function(w) {
      return '.'.repeat(w.length)
    }).replace(/0$/, '.');
    var array = Object.keys(strnum).map(function(x) {return strnum[x]});
    var length = array.length;
    if (array[length - 1 - 6] == '.' && array[length - 1 - 5] != '.') array[length - 1 - 6] = '0';
    if (array[length - 1 - 5] == '.' && array[length - 1 - 4] != '.') array[length - 1 - 5] = '0';
    return array.map(function(iter, index) {
      if (((length - index - 1) <= 2) && /\.[1-9]/.test(array.slice(index, index + 2).join(''))) return '零';
      return convert[iter] + ((iter !== '0') ? getWeight(length - index - 1, iter === '.') : '');
    }).join('').replace(/^一十/g, '十') + ('亿'.repeat(deep));
  })(num + '')
}
