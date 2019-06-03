var title = "";
Vue.component('create_new_entry', {
    template: '<div><div class="row"><h1 v-on:click="test()">{{title}}</h1><div class="col-md-12"><section_title :title="title" @title-changed="changeTitle"></section_title></div></div></div>',
    data    : function() {
        return {
            title: title
        };
    },
    methods: {
        changeTitle(newTitle) {
            this.title = newTitle;
        }
    }
});
Vue.component('section_title', {
    template: '<div><h1 v-on:click="test()">{{title}}</h1><input type="text" class="form-control" v-model="innerTitle"></div>',
    props: ['title'],
    data    : function() {
        return {
            innerTitle: this.title
        };
    },
    methods : {
        test: function() {
            console.log(this);
        }
    },
    watch: {
        title(val){
            this.innerTitle = val;
        },
        innerTitle(val) {
            this.$emit('title-changed', val);
        }
    }
});
