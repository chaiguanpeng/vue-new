/*
* 1、如果属性不存在 默认后增加的内容  也不会刷视图
* 2、vue把数组上所有方法 都重
* 3、对data中数据的要求
*   3.1、如果是对象，必须先声明
*   3.2、如果是数组,obj.age.length--(删除最后项)、用索引改变值  是不起作用的
* */

//数据源
let obj = {
    name:"cgp",
    age:{
        age:18
    }
};
//vue 数据劫持 Object.defineProperty
function observer(obj) {
    if(typeof obj == 'object'){
        for(let key in obj){
            defineReactive(obj,key,obj[key])
        }
    }
}
function defineReactive(obj, key, value) {
    observer(value); //判断value是不是一个对象  如果是对象 会继续监控
    Object.defineProperty(obj,key,{
        get(){
            return value
        },
        set(val){
            observer(val);  //如果设置的值是对象 需要在进行这个对象的监控 obj.age = {name:1}
            console.log("数据更新了");
            value = val;
        }
    })
}
observer(obj);
// obj.age = {
//     name:1
// }
// obj.age.name = 2


//vue把数组中所有的方法都重写了
let arr = ['push','slice','shift','unshift'];
arr.forEach(method=>{
    let oldPush = Array.prototype[method];
    Array.prototype[method] = function(value){
        console.log('数据更新了哦');
        oldPush.call(this,value);
    };
});

obj.age = [1,2,3,4];
obj.age.push(5);
obj.age.length--; //这个是捕获不到

