<script>
export default {
    name: "CardLink",
    props: ['infoLink', 'infoIndex'],
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
    <div class="col-3">
        <div class="card text-center border-0" :data-aos="animation()">
            <img :src="infoLink.img" class="card-img-top mb-2" alt="wave">
            <img class="m-auto" :src="infoLink.waveImg" alt="infoLink.link">
            <div class="card-body">
                <p class="card-title">{{ infoLink.description }}</p>
                <a href="#" class="text-decoration-none">
                    {{ infoLink.link }} <i class="fa-solid fa-angle-right"></i>
                </a>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../style/main.scss' as *;

[data-aos="anim-1"] {
    backface-visibility: hidden;
    transition-property: transform;
    transform: perspective(2500px) rotateY(-100deg);

    &.aos-animate {
        transition-duration: 1s;
        transform: perspective(2500px) rotateY(0);
    }
}

[data-aos="anim-2"] {
    backface-visibility: hidden;
    transition-property: transform;
    transform: perspective(2500px) rotateY(-100deg);

    &.aos-animate {
        transition-duration: 1.5;
        transform: perspective(2500px) rotateY(0);
    }
}

[data-aos="anim-3"] {
    backface-visibility: hidden;
    transition-property: transform;
    transform: perspective(2500px) rotateY(-100deg);

    &.aos-animate {
        transition-duration: 2s;
        transform: perspective(2500px) rotateY(0);
    }
}

[data-aos="anim-4"] {
    backface-visibility: hidden;
    transition-property: transform;
    transform: perspective(2500px) rotateY(-100deg);

    &.aos-animate {
        transition-duration: 2.5s;
        transform: perspective(2500px) rotateY(0);
    }
}

.col-3 {

    .card {

        &:hover {
            cursor: pointer;
        }

        .card-img-top {
            max-width: 156px;
            margin: auto;
        }

        p {
            color: $jumbo;
        }

        a {
            font-size: 18px;
            font-weight: bold;
            color: $cod-gray;

            &:hover {
                color: $dodger-blue;
            }

            i {
                font-size: 14px;
            }

        }

    }



}
</style>
