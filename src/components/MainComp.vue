<script>
import { store } from '../store'
import BestHealth from './BestHealth.vue';
import FeaturedPlaylist from './FeaturedPlaylist.vue'
import EmailComp from './EmailComp.vue';
import CardTraining from './CardTraining.vue';
import LatestArticles from './LatestArticles.vue';
import SpeechMain from './SpeechMain.vue';
import CardLink from './CardLink.vue';
import CrossfitComp from './CrossfitComp.vue';

export default {
    name: "MainComp",
    components: {
        BestHealth,
        FeaturedPlaylist,
        EmailComp,
        CardTraining,
        LatestArticles,
        SpeechMain,
        CardLink,
        CrossfitComp
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
    <section id="section-playlists">
        <div class="container">
            <div class="d-flex justify-content-between align-items-center mb-4">
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
    <SpeechMain />
    <section>
        <div class="container" id="container-card-link">
            <div class="row">
                <CardLink v-for="(link, index) in store.cardLinks" :key="index" :infoLink="link" />
            </div>
        </div>
    </section>
    <CrossfitComp />
</template>

<style lang="scss" scoped>
@use '../style/main.scss' as *;


#section-playlists {

    padding-bottom: 6%;

    span {

        &:hover {
            color: $dodger-blue;
            cursor: pointer;
        }

    }


}


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

        span {

            &:hover {
                color: $dodger-blue;
                cursor: pointer;
            }

        }

    }

}

#container-card-link {
    padding-top: 8%;
    padding-right: 3%;
    padding-bottom: 8%;
    padding-left: 3%;
}
</style>
