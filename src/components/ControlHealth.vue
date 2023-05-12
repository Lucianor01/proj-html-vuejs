<script>

export default {
    name: "ControlHealth",
    data() {
        return {

        }
    },
    methods: {

    },
}

</script>

<template>
    <section id="section-header-1">
        <div class="d-flex container-section-1">
            <div id="container-left" class="container">
                <div id="text-fitness">
                    <span>Certified fitness professional</span>
                </div>
                <h1 class="text-light mt-3">Take control of your health</h1>
                <img class="mt-3" src="/img/image.png" alt="wave">
                <div id="text-curabitur" class="mt-3">
                    <span>Curabitur non nulla sit amet nisl tempus convallis quis ac lectus dolor sit amet.</span>
                </div>
                <div class="mt-5 d-flex">
                    <a href="#" class="text-light text-decoration-none me-3" id="yt-button">
                        <i class="fa-brands fa-youtube"></i>
                        Visit my Youtube channel
                    </a>
                    <a href="#" class="text-light text-decoration-none" id="buy-button">
                        <span>Buy Avada today</span>
                        <i class="fa-solid fa-arrow-right ms-3"></i>
                    </a>
                </div>
            </div>
            <div class="align-self-center" id="container-right">
                <i class="fa-solid fa-play"></i>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../style/main.scss' as *;

#section-header-1 {
    background-image: linear-gradient(90deg, #060606 45%, rgba(6, 6, 7, 0) 75%),
        url('/img/slider82x-scaled.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-color: #060606;

    .container-section-1 {

        padding: 7% 11%;

        #container-left {

            #text-fitness {
                color: $testo-rosso;
            }

            #text-curabitur {
                color: $testo-argento;
            }

            #yt-button {
                padding: 12px 27px;
                border-radius: 20px;
                background-color: #4154fe;
            }

            #buy-button {
                padding: 10px 20px;
                border: 1px solid #bcbcbc;
                border-radius: 20px;
            }


            .fa-arrow-right {
                font-size: 13px;
            }


        }



        #container-right {

            width: 25%;

            .fa-play {
                width: 80px;
                height: 78px;
                line-height: 78px;
                border-radius: 50%;
                text-align: center;
                background-color: #ffffff;
                color: $dodger-blue;
            }

        }
    }



}
</style>
