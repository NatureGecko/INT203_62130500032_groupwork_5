gallery.component('app-search-image', {
    props: {

    },
    emits:['leave-the-search-bar','search-by-title','close-and-clear-search'],
    Data() {
        return {
            compgatherInput: '',
            compsearchBarOn: false,
            comptoggleresettext: false
        }
    },
    template: `
<div class="w-2/5 content-center bg-opacity-25 bg-yellow-100 my-2 px-4 flex justify-center items-center text-1xl text-yellow-900 hover:bg-opacity-75 transition duration-500">
    <p>This also have the same problem. [app-search-image]</p>
    <input v-model="compgatherInput" class="p-1.5 bg-yellow-100 bg-opacity-25 rounded flex-1 border-2 border-yellow-900" type="search" v-show="searchBarOn" @keyup.enter="searchByTitle" placeholder="Search...">
    <span class="p-3 material-icons transform hover:scale-150" @click="searchByTitle">
        search
    </span>
    <button v-show="!toggleresettext" class="w-4/5 font-bold bg-yellow-200 py-1 px-2 rounded bg-opacity-50" @click="searchByTitle">Search by title</button>
    <button v-show="toggleresettext" class="w-2/5 font-bold text-red-700 bg-red-200 py-1 px-2 rounded bg-opacity-50" @click="closeandclearsearch">Cancle / Undo search</button>
</div>
    `,
    methods: {
        leaveTheSearchBar(){
            this.$emit('leave-the-search-bar');
        },
        searchByTitle(){
            this.$emit('search-by-title');
        },
        closeandclearsearch(){
            this.$emit('close-and-clear-search');
        },
    },
    watch:{
        compgatherInput: function(text){
            this.compgatherInput = text;
            this.$root.gatherInput = this.compgatherInput;
            this.$root.compsearchBarOn = this.searchBarOn;
            this.$root.comptoggleresettext = this.toggleresettext;
        } 
    }
})
