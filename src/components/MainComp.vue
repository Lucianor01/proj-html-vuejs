<script>
import { store } from '../store'
import BestHealth from './BestHealth.vue';
import FeaturedPlaylist from './FeaturedPlaylist.vue'
import EmailComp from './EmailComp.vue';

export default {
    name: "MainComp",
    components: {
        BestHealth,
        FeaturedPlaylist,
        EmailComp
    },
    data() {
        return {
            store
        }
    },
    methods: {

    },
}

</script>

<template>
    <BestHealth />
    <section>
        <div class="container">
            <div class="d-flex justify-content-between">
                <h2>Featured playlists</h2>
                <span>View all videos <i class="fa-solid fa-angle-right"></i></span>
            </div>
            <div class="row">
                <FeaturedPlaylist v-for="(elem, index) in store.featuredPlaylist" :key="index" :infoPlaylist="elem" />
            </div>
        </div>
    </section>
    <EmailComp />
</template>

<style lang="scss" scoped></style>
