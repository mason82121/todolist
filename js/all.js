new Vue({
    el:'#toDoList',
    data:{
        // toDos:[{content:'113',finish:true},{content:'151',finish:false}],
        toDos:'',        
        newToDo:'',
        showCondition:0
    },
    created: function(){
        this.getData();
    },
    methods:{
        getData(){
            this.toDos = JSON.parse(localStorage.getItem('toDoList')) || [];
        },
        addToDo(todo){
            this.toDos.unshift({content: todo,finish: false});
            this.reNew()
        },
        removeToDo(todo){
            this.toDos.splice(this.toDos.indexOf(todo),1);
            this.reNew()
        },
        allFinished(){
            for(let i=0; i<this.toDos.length;i++){
                this.toDos[i].finish = true;
            };
            this.reNew()            
        },        
        reNew(){
            localStorage.setItem('toDoList', JSON.stringify(this.toDos));
        },
        newCondition(){
            this.reNew()
        },
    },
    
    // methods:{
    //     addToDo(todo){
    //         this.toDos.unshift({content: todo,finish: false});
    //         JSON.stringify(this.toDos)
    //     },
    //     removeToDo(todo){
    //         this.toDos.splice(this.toDos.indexOf(todo),1);
    //     },
    //     allFinished(){
    //         for(let i=0; i<this.toDos.length;i++){
    //             this.toDos[i].finish = true;
    //         };
    //     },

    // }

});