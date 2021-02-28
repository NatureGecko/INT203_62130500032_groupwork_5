//a prop has Undefined of undefined error.

gallery.component('app-list-all-images', {
    props: {
        imagesdata: {
            type: Array,
            require: true
        }
    },
    emits: ["hover-and-get-notify-presentation-mode", "mouse-leave-and-notify-presentation-mode", "click-like-this-image","enter-presentation-mode-with-current-picture"],
    template: `
    <p>It only show this element and the others are gone with no error. [app-list-all-images]  There is some issue in the loop but I don't know where.</p>
    
    <div v-for="(image,index) in imagesdata" :key="index">
        <div v-show="image.resuleMatch">
            <div class="absolute p-5" v-show="imagesdata[index].rowNotificationOn">
                <p class="text-4xl font-bold text-yellow-900 p-5 bg-opacity-25 bg-yellow-200"
                    @click="enterPresentationModeWithCurrentPicture(index)"> Click for picture
                    presentration.</p>
            </div>
            <img class="p-5 bg-gray-900 bg-opacity-25" v-bind:src="image.imghref"
                @click="enterPresentationModeWithCurrentPicture(index)"
                @mouseover="hoverAndGetNotifyPresentationMode(index)"
                @mouseleave="mouseLeaveAndNotificationGone(index)">
            <p class=" p-5 text-4xl text-yellow-900 font-bold">{{image.imgtitle}}</p>
            <div class="flex flex-wrap py-5">
                <p class="px-10 text-2xl text-yellow-900 px-5 w-2/3">{{image.imgdescription}}</p>

                <div class="items-center w-1/3">
                    <button v-show="image.isliked" v-on:click="likeThisPicture(index)"
                        class="bg-yellow-900 bg-opacity-25 text-white  py-1 px-2 rounded w-4/5">Undo
                        vote</button>
                    <button v-show="!image.isliked" v-on:click="likeThisPicture(index)"
                        class="bg-green-500 text-white  py-1 px-2 rounded w-4/5">Vote</button>
                    <p class="text-blue-900 font-bold text-xl">You voted
                        {{imagesdata.filter(liked => liked.isliked).length}} out of
                        {{imagesdata.length}} pictures in this gallery so far.</p>
                </div>
            </div>
        </div>
    </div>
    
    <p>Dead loop</p>
    `,
    methods: {
        hoverAndGetNotifyPresentationMode(index) {
            this.$emit('hover-and-get-notify-presentation-mode', index);
        },
        mouseLeaveAndNotificationGone(index) {
            this.$emit('mouse-leave-and-notify-presentation-mode', index);
        },
        likeThisPicture(index) {
            this.$emit('click-like-this-image', index);
        },
        enterPresentationModeWithCurrentPicture(index){
            this.$emit('enter-presentation-mode-with-current-picture',index);
        }
    }
})

// In case everything is broken.

/*<div>
                        <div class="" v-for="(image,index) in imagesdata">
                            <div v-show="image.resuleMatch">
                                <!--You can now click on the picture to show the picture in presentation mode.-->
                                <div class="absolute p-5" v-show="imagesdata[index].rowNotificationOn">
                                    <p class="text-4xl font-bold text-yellow-900 p-5 bg-opacity-25 bg-yellow-200"
                                        @click="enterPresentationModeWithCurrentPicture(index)"> Click for picture
                                        presentration.</p>
                                </div>
                                <!--Hover on an image and the notification will appear.-->
                                <img class="p-5 bg-gray-900 bg-opacity-25" v-bind:src="image.imghref"
                                    @click="enterPresentationModeWithCurrentPicture(index)"
                                    @mouseover="hoverAndGetNotifyPresentationMode(index)"
                                    @mouseleave="mouseLeaveAndNotificationGone(index)">


                                <p class=" p-5 text-4xl text-yellow-900 font-bold">{{image.imgtitle}}</p>
                                <div class="flex flex-wrap py-5">
                                    <p class="px-10 text-2xl text-yellow-900 px-5 w-2/3">{{image.imgdescription}}</p>
                                    <!--<img class="w-1/5" v-bind:src="image.profilehref">-->

                                    <div class="items-center w-1/3">
                                        <button v-show="image.isliked" v-on:click="likeThisPicture(index)"
                                            class="bg-yellow-900 bg-opacity-25 text-white  py-1 px-2 rounded w-4/5">Undo
                                            vote</button>
                                        <button v-show="!image.isliked" v-on:click="likeThisPicture(index)"
                                            class="bg-green-500 text-white  py-1 px-2 rounded w-4/5">Vote</button>
                                        <p class="text-blue-900 font-bold text-xl">You voted
                                            {{imagesdata.filter(liked => liked.isliked).length}} out of
                                            {{ imagesdata.length }} pictures in this gallery so far.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    */