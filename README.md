javascript
=====
[基本的一些演示](http://feeloc.cn/jframe)
*   1.基本类型
    *   number,string,boolean,undefined,object,function
*   2.string
```
var a = 'abcdefg';
a[1]  //结果是b，但不兼容a.charAt(1)
```
*   3.数组Array
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
*	4.dom
    *   子节点 a.childNodes    nodeType为3是文本节点，1为普通节点
    *   子节点 a.children      不会包含TextNode
    *   父节点 a.parentNode
    *   相对定位的父节点    a.offsetParent会将文本节点当成其中一个节点
    *   第一个子节点  a.firstChild有兼容问题，使用firstElementChild低版本浏览器不适用使用if判断
    *   修改dom属性 一般使用a['id'] = 'abc'，但如果是创建属性就不会绑定到元素上，可以用setAttribute
    *
*	5.ajax
*	6.cookie
*	7.bom
