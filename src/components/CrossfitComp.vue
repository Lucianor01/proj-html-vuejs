<script>


export default {
    name: "CrossfitComp",
    methods: {

    },
}

</script>

<template>
    <section id="section-crossfit">
        <div class="container text-center">
            <div class="mb-3">
                <i class="fa-solid fa-play"></i>
            </div>
            <h2>Crossfit workout of the day</h2>
            <h3>November 15th, 2019</h3>
            <a href="#">View all videos <i class="ms-2 fa-solid fa-arrow-right-long"></i></a>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../style/main.scss' as *;

#section-crossfit {

    background-blend-mode: multiply;
    background-image: linear-gradient(151deg, $dodger-blue 35%, #ff414b 100%),
        url(/img/banner14-2x.jpg);
    background-size: cover;
    background-repeat: no-repeat;

    .container {

        padding-top: 9%;
        padding-right: 7%;
        padding-bottom: 9%;
        padding-left: 7%;

        .fa-play {
            width: 70px;
            height: 68px;
            line-height: 68px;
            border-radius: 50%;
            text-align: center;
            background-color: $white;
            color: $dodger-blue;

            &:hover {
                color: $testo-rosso;
                cursor: pointer;
            }

        }

        h2 {
            font-size: 58px;
            color: $white;
            font-weight: bold;
        }

        h3 {
            font-size: 38px;
            color: $yellow;
            font-weight: bold;
        }

        a {
            font-size: 20px;
            text-decoration: none;
            color: $white;

            i {
                font-size: 15px;
            }

        }

    }


}
</style>
