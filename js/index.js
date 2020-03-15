// 添加carditem事件
var cardItem = {
    title:"Item",
    path:"C://Admin/whatdir/xiabianyige",
    byte:"9.9MB"
};
var app = new Vue({
    el:'#RightBar',
    data: {
        carditems:[],
        Isempty:true,
    },
    methods: {
        addItem: function(){
            this.carditems.push(cardItem);
            if(this.carditems.length == 0){
                this.Isempty = true;
            }else {
                this.Isempty = false;
            }
        },
        start: function(index){
            alert(index);
        }
    }
})
