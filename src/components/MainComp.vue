<script>
import { store } from '../store'
import BestHealth from './BestHealth.vue';
import FeaturedPlaylist from './FeaturedPlaylist.vue'
import EmailComp from './EmailComp.vue';
import CardTraining from './CardTraining.vue';
import LatestArticles from './LatestArticles.vue';
export default {
    name: "MainComp",
    components: {
        BestHealth,
        FeaturedPlaylist,
        EmailComp,
        CardTraining,
        LatestArticles
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
            <div class="d-flex justify-content-between align-items-center">
                <h2>Featured playlists</h2>
                <span>View all videos <i class="fa-solid fa-angle-right"></i></span>
            </div>
            <div class="row">
                <FeaturedPlaylist v-for="(elem, index) in store.featuredPlaylist" :key="index" :infoPlaylist="elem" />
            </div>
        </div>
    </section>
    <EmailComp />
    <section id="container-section-training">
        <div class="container-fluid">
            <div class="row">
                <CardTraining v-for="(training, index) in store.cardTraining" :key="index" :infoTraining="training" />
            </div>
        </div>
    </section>
    <section id="container-section-articles">
        <div class="container">
            <div class="d-flex justify-content-between align-items-center mb-4">
                <h2>Latest articles</h2>
                <span>Read all articles <i class="fa-solid fa-angle-right"></i></span>
            </div>
            <div class="row">
                <LatestArticles v-for="(articles, index) in store.latestArticles" :key="index" :infoArticles="articles" />
            </div>
        </div>

    </section>
</template>

<style lang="scss" scoped>
@use '../style/main.scss' as *;

#container-section-training {

    background-color: $cod-gray;

    .container-fluid {
        padding-top: 7%;
        padding-right: 7%;
        padding-bottom: 6%;
        padding-left: 7%;
    }


}

#container-section-articles {

    .container {

        padding-top: 6%;
        padding-right: 7%;
        padding-bottom: 6%;
        padding-left: 7%;

    }

}
</style>
