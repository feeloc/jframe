javascript

*   1.基本类型
    *   number,string,boolean,undefined,object,function
*   2.数组Array
    *   push()：数组尾部添加
    *   pop()：数组尾部删除
    *   shift()：头部删除
    *   unshift()：头部添加
    *   splice()：删除，添加，替换
    *   contact()：数组拼接，不改变数据本身
    *   sort()：数据排序，数字按字符串排序，利用比较函数排序数字
```
var a = [1,3,3,4,6,21,7];
console.log(a.sort(function(n1,n2){
    return n1-n2;
}));
```
    *   Array.prototype.push.apply(a,b)：改变a本身
    *   Math.prototype.max.apply(null,a)：a中最大值
*	2.dom
*	3.ajax
*	4.cookie
*	5.bom
