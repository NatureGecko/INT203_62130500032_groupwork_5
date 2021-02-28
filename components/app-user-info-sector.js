//NOT IN USE --------------- NOT IN USE --------------- NOT IN USE --------------- NOT IN USE --------------- NOT IN USE --------------- NOT IN USE --------------- NOT IN USE --------------- NOT IN USE ---------------

gallery.component('app-user-info-sector', {
    props:{
        
    },
    data() {
        return {
        }
    },
    template: `<img v-bind:src="userInfo.mainimghref" class="h-auto">
    <div class="absolute left-0 top-0 flex flex-wrap w-182 bg-yellow-100 text-yellow-900 bg-opacity-75">
        <img class="h-32 w-32" v-bind:src="userInfo.profilehref">
        <div class="flex flex-col">
            <p class="text-5xl px-5 font-bold">{{userInfo.diaplayname}}</p>
            <p class="text-2xl px-1 font-light">{{userInfo.displayquote}}</p>
            <div class="flex flex-wrap">
                <button v-show="!userInfo.followedbyyou" @click="clickfollowedbyyou()"
                    class="mx-2 px-2 w-24 bg-green-500 text-white  py-1 px-2 rounded bg-opacity-25">Follow</button>
                <button v-show="userInfo.followedbyyou" @click="clickfollowedbyyou()"
                    class="mx-2  px-2 w-24 bg-red-500 text-white  py-1 px-2 rounded bg-opacity-25">Unfollow</button>
                <p class="text-xl px-1 font-light text-black">followed by {{userInfo.displayfollowed}} people
                </p>
                <p v-show="userInfo.followedbyyou" class="text-xl px-1 font-light font-light">( Including you )
                </p>
            </div>
        </div>
    </div>`,
    methods: {
        clickfollowedbyyou(){
            this.$emit('click-followed-by-you');
        }
    }
})