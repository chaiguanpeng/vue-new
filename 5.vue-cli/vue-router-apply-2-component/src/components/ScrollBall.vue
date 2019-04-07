<template>
    <div class="ball" :style="style" :id="ballId">
        <slot></slot>
    </div>


    <!--可以这么写1-->
    <!--<div class="ball" :style="{background: color}"></div>-->
</template>

<script>
    export default {
        name: "ScrollBall",
        props:{
            color:{
                type:String,
                default:'white'
            },
            value:{
                type:Number,
                default: 0
            },
            target:{
                type:Number,
                default:300
            }
        },
        computed:{
            style(){
                return {background:this.color}
            },
            ballId(){
                // console.log(this._uid);
                return `ball${this._uid}`
            }
        },
        mounted(){
            // 单向数据流  子组件通知父亲  当前自己的位置，父亲更新位置，在传递子组件
            let ball = document.getElementById(this.ballId);
            this.timer='';
            let fn = ()=>{
                let left = this.value;
                if(left >=this.target){
                 return cancelAnimationFrame(this.timer);
              }
                left+=2;
              //  触发事件 通知父元素更改当前的this.pos
                this.$emit('input',left );


              //  对应官网推荐@update:value方法，不用刻意不写
                this.$emit('update:value',left);

              ball.style.transform = `translate(${this.value}px)`;
              this.timer = requestAnimationFrame(fn)
            };
            this.timer = requestAnimationFrame(fn)
         },
        methods:{
            stop(){
                // 暂停了可以告知父亲结束了，做一些回调
                // this.emit('end');
                cancelAnimationFrame(this.timer)
            }
        }
    }
</script>

<style scoped lang="less">
    .ball{
        width: 100px;
        height: 100px;
        border-radius: 50%;
        text-align: center;
        line-height: 100px;
        border:1px solid red;
    }
</style>
