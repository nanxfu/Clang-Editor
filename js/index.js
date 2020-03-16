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
        addItem(){
            this.carditems.push(cardItem);
            
        },
        start(index){
            alert(index);
        }
    },
    computed:{
        IsemptyM(){
            if(this.carditems.length == 0){
                this.Isempty = true;
            }else {
                this.Isempty = false;
            }
            return  this.Isempty;
        }
    }
})

//处理拖放事件