<script>


export default {
    name: "CardTraining",
    props: ['infoTraining'],
    data() {
        return {
        }
    },
    methods: {

    },
}

</script>

<template>
    <div class="col-4">
        <div class="card text-center">
            <img :src="infoTraining.img" class="card-img-top" alt="infoTraining.title">
            <div class="card-body">
                <h2 class="card-title mb-2">{{ infoTraining.title }}</h2>
                <h3 class="card-text mb-4">{{ infoTraining.subTitle }}</h3>
                <p class="mb-4">{{ infoTraining.description }}</p>
                <a href="#" class="card-text">
                    {{ infoTraining.link }} <i class="ms-2 fa-solid fa-angle-right"></i>
                </a>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../style/main.scss' as *;

.col-4 {

    .card {

        width: 340px;
        height: 500px;
        padding-top: 18%;
        padding-right: 10%;
        padding-bottom: 12%;
        padding-left: 10%;
        border-width: 5px;
        border-color: $dodger-blue;
        background-color: $cod-gray;

        img {
            width: 70px;
            height: 70px;
            margin: auto;
        }

        h2 {
            color: $white;
            font-size: 28px;
            font-weight: bold;
        }

        h3 {
            color: $yellow;
            font-size: 23px;
        }

        p {
            font-size: 17px;
            color: $testo-argento;
        }

        a {
            color: $white;
            text-decoration: none;
            font-size: 18px;
            font-weight: bold;

            i {
                font-size: 15px;
            }

        }

    }

}
</style>
