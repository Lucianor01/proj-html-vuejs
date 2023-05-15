<script>

export default {
    name: "BestHealth",
    data() {
        return {

        }
    },
    methods: {

    },
}

</script>

<template>
    <section id="main-section-1">
        <div class="d-flex justify-content-between">
            <div class="position-relative" data-aos="fade-right">
                <img class="img-main-section-1" src="/img/service15-2x.jpg" alt="service 15">
                <i class="fa-solid fa-play"></i>
            </div>
            <div id="container-right" data-aos="fade-left">
                <h2 class="mb-3">Tune up your workouts</h2>
                <h3 class="mb-4">The best health & fitness advice online</h3>
                <div class="d-flex mb-4">
                    <img class="me-2" src="/img/unnamed.jpg" alt="unnamed">
                    <div>
                        <div class="mb-1">
                            <span id="theme-fusion">ThemeFusion</span>
                        </div>
                        <div>
                            <a id="yt-channel" href="#" class="text-decoration-none">
                                <i class="fa-brands fa-youtube"></i>
                                YouTube
                            </a>
                            <span class="yt-number">999+</span>
                        </div>
                    </div>
                </div>
                <p class="pb-3">
                    Arcu eu facilisi ut quisque placerat nunc habitant. Magna semper mauris, venenatis leo integer sit
                    pellentesque.
                </p>
                <a href="#" class="text-light text-decoration-none" id="yt-button">
                    <i class="fa-brands fa-youtube"></i>
                    Visit my Youtube channel
                </a>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../style/main.scss' as *;

#main-section-1 {

    .img-main-section-1 {
        margin-top: -6%;
        max-width: 610px;
        border-radius: 0px 4px 40px 0px;
    }

    .fa-play {
        width: 60px;
        height: 58px;
        position: absolute;
        top: 30%;
        left: 50%;
        transform: translate(-50%, -50%);
        line-height: 58px;
        border-radius: 50%;
        text-align: center;
        background-color: $white;
        color: $dodger-blue;
        transition: all .3s;

        &:hover {
            color: $testo-rosso;
            cursor: pointer;
        }

    }

    #container-right {

        padding-top: 6%;
        padding-right: 10%;
        padding-bottom: 11%;
        padding-left: 10%;

        h2 {
            font-size: 28px;
            color: $dodger-blue;
            font-weight: bold;
        }

        h3 {
            font-size: 60px;
            font-weight: bold;
        }

        #theme-fusion {
            font-size: 13px;
        }

        #yt-channel {
            padding: 4px;
            color: $white;
            background-color: $ferrari-red;
            transition: all .3s;

            &:hover {
                filter: opacity(60%);
            }

        }

        .yt-number {
            padding: 3px 5px;
            border: 1px solid $testo-argento;
            border-left: 0px;
        }

        p {
            font-size: 23px;
        }

        #yt-button {
            padding: 12px 27px;
            border-radius: 20px;
            background-color: $ferrari-red;
            transition: all .3s;

            &:hover {
                filter: opacity(60%);
            }

        }

    }



}
</style>
