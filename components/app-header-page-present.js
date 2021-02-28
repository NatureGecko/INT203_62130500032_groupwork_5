gallery.component('app-header-page-present', {
    template: `<div>
    <div class="flex justify-between content-center bg-yellow-100 py-4">
    <!--Left navigator-->
    <div class="flex justify-start items-center mx-4">
        <div class="w-19 h-12 px-5 flex items-center justify-center">
            <button class="transform scale-150">
                <img class="w-15 h-10" src="images/topbaricon.png">
            </button>
        </div>
    </div>
    <!--Mid profile-->
    <div class="flex justify-center items-center mx-4">
        <!--Search bar-->
        <div>
            <p class="px-0 text-center text-5xl font-bold antialiased text-yellow-900">
                Creative Park Gallery
            </p>
            <p class="px-0 text-center text-2xl text-yellow-800">
                the place where builders share their creations.
            </p>
        </div>
    </div>
    <!--Right navigator-->
    <div class="flex justify-end content-center items-center mx-4">
        <!--Apps Icon-->
        <div class="w-12 h-12 flex items-center justify-center transform transition duration-500 hover:scale-150">
            <a href="" class="material-icons hover:rotate-6">
                apps
            </a>
        </div>
    </div>
    </div>
    </div>
    `
})