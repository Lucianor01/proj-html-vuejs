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
            <div class="position-relative">
                <img class="img-main-section-1" src="/img/service15-2x.jpg" alt="service 15">
                <i class="fa-solid fa-play"></i>
            </div>
            <div id="container-right">
                <h2>Tune up your workouts</h2>
                <h3>The best health & fitness advice online</h3>
                <div class="d-flex">
                    <img class="me-2" src="/img/unnamed.jpg" alt="unnamed">
                    <div>
                        <div>
                            <span>ThemeFusion</span>
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
                <p>
                    Arcu eu facilisi ut quisque placerat nunc habitant. Magna semper mauris, venenatis leo integer sit
                    pellentesque.
                </p>
                <a href="#" class="text-light text-decoration-none me-3" id="yt-button">
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
        width: 100%;
        max-width: 700px;
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
    }

    #container-right {

        padding-top: 6%;
        padding-right: 10%;
        padding-bottom: 18%;
        padding-left: 10%;

        h2 {
            font-size: 28px;
            color: $dodger-blue;
            font-weight: bold;
        }

        h3 {
            font-size: 63px;
        }

        #yt-channel {
            padding: 4px;
            color: $white;
            background-color: $ferrari-red;
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
            background-color: $ferrari-red
        }

    }



}
</style>
