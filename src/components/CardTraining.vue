<script>


export default {
    name: "CardTraining",
    props: ['infoTraining', 'infoIndex'],
    data() {
        return {
        }
    },
    methods: {
        animation() {
            if (this.infoIndex == 0) {
                return "anim-1"
            } else if (this.infoIndex == 1) {
                return "anim-2"
            } else {
                return "anim-3"
            }
        }
    },
}

</script>

<template>
    <div class="col-4">
        <div class="card text-center" :data-aos="animation()">
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

[data-aos="anim-1"][data-aos="anim-1"] {
    opacity: 0;
    transition-property: opacity, transform;
    transform: translate3d(0, -$aos-distance, 0) scale(1.2);

    &.aos-animate {
        opacity: 1;
        transition-duration: 1.4s;
        transform: translate3d(0, 0, 0) scale(1);
    }
}

[data-aos="anim-2"][data-aos="anim-2"] {
    opacity: 0;
    transition-property: opacity, transform;
    transform: translate3d(0, -$aos-distance, 0) scale(1.2);

    &.aos-animate {
        opacity: 1;
        transition-duration: 1.7s;
        transform: translate3d(0, 0, 0) scale(1);
    }
}

[data-aos="anim-3"][data-aos="anim-3"] {
    opacity: 0;
    transition-property: opacity, transform;
    transform: translate3d(0, -$aos-distance, 0) scale(1.2);

    &.aos-animate {
        opacity: 1;
        transition-duration: 2s;
        transform: translate3d(0, 0, 0) scale(1);
    }
}

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
        transition: all .3s;

        &:hover {

            transform: scale(1.1);
            cursor: pointer;

        }

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
