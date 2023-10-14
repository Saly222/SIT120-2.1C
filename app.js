const app = Vue.createApp({
    data() {
        return {
            newTodo: '',
            todos: []
        };
    },
    methods: {
        addTodo() {
            if (this.newTodo.trim() !== '') {
                this.todos.push({ text: this.newTodo, completed: false });
                this.newTodo = '';
            }
        },
        removeTodo(index) {
            this.todos.splice(index, 1);
        },
        markAsCompleted(index) {
            this.todos[index].completed = true;
        }
    }
});

app.mount('#app');
