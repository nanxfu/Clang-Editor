// 添加carditem事件
var cardItem = {
    title:"Item",
    path:"C://Admin/whatdir/xiabianyige",
    byte:"9.9MB"
};
var app = new Vue({
    el:'#RightBar',
    data:{
        carditems:[]
    },
    methods:{
        addItem:function(){
            this.carditems.push(cardItem);
        },
        start:function(index){
            alert(index);
        }
    }
})