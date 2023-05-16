<script>
export default {
    name: "FeaturedPlaylist",
    props: ['infoPlaylist', 'infoIndex'],
    data() {
        return {
            videoVisible: false
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
        },
        toggleVideo() {
            this.videoVisible = !this.videoVisible;
        }
    },
}

</script>

<template>
    <div class="col-4">
        <div class="card border-0 text-center" :data-aos="animation()">
            <div class="position-relative">
                <img :src="infoPlaylist.img" class="card-img-top" :alt="infoPlaylist.title">
                <i v-if="!videoVisible" class="fa-solid fa-play" @click="toggleVideo"></i>
                <div v-if="videoVisible" class="video-container" data-aos="zoom-out">
                    <iframe width="415" height="260" :src="infoPlaylist.video" title="YouTube video player" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen></iframe>
                    <button class="deactivate-button btn btn-warning" @click="toggleVideo">Deactivate
                        Video</button>
                </div>
            </div>
            <div class="card-body">
                <h3 class="card-title">{{ infoPlaylist.title }}</h3>
                <h4 class="card-text">{{ infoPlaylist.subTitle }}</h4>
            </div>
        </div>
    </div>
</template>
  

<style lang="scss" scoped>
@use '../style/main.scss' as *;

[data-aos="anim-1"] {
    opacity: 0;
    transition-property: opacity, transform;
    transform: scale(.6);

    &.aos-animate {
        opacity: 1;
        transition-duration: 1s;
        transform: translate3d(0, 0, 0) scale(1);
    }
}

[data-aos="anim-2"] {
    opacity: 0;
    transition-property: opacity, transform;
    transform: scale(.6);

    &.aos-animate {
        opacity: 1;
        transition-duration: 1.5s;
        transform: translate3d(0, 0, 0) scale(1);
    }
}

[data-aos="anim-3"] {
    opacity: 0;
    transition-property: opacity, transform;
    transform: scale(.6);

    &.aos-animate {
        opacity: 1;
        transition-duration: 1.8s;
        transform: translate3d(0, 0, 0) scale(1);
    }
}

.col-4 {


    .card {


        cursor: pointer;


        img {
            border-radius: 0px 4px 40px 0px;
        }

        .fa-play {
            width: 60px;
            height: 58px;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            line-height: 58px;
            border-radius: 50%;
            text-align: center;
            background-color: $white;
            color: $dodger-blue;
            transition: all .3s;
            z-index: 22;

            &:hover {
                color: $testo-rosso;
                cursor: pointer;
            }

        }

        .video-container {
            position: absolute;
            top: 0;

            .deactivate-button {
                position: absolute;
                bottom: -40px;
                left: 51px;
                padding: 4px 10px;
                transform: translate(-50%, -50%);
                font-size: 12px;
                transition: all .3s;

                &:hover {
                    filter: brightness(0.8)
                }

            }

        }



        .card-body {

            h3 {
                font-size: 23px;
                font-weight: 500;
                font-weight: bold;
            }

            h4 {
                font-size: 18px;
                font-weight: bold;
                color: $dodger-blue;
            }
        }
    }

}
</style>