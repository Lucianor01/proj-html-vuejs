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
                    <h1>Certified fitness professional</h1>
                </div>
                <h2 class="text-light mt-3">Take control of your health</h2>
                <img class="mt-3" src="/img/image.png" alt="wave">
                <div id="text-curabitur" class="mt-3">
                    <span>Curabitur non nulla sit amet nisl tempus convallis quis ac lectus dolor sit amet.</span>
                </div>
                <div class="mt-5 d-flex">
                    <a href="#" class="text-light text-decoration-none me-3" id="yt-button">
                        <i class="fa-brands fa-youtube"></i>
                        Visit my Youtube channel
                    </a>
                    <a href="#" class="text-decoration-none" id="buy-button">
                        <span>Buy Avada today</span>
                        <i class="fa-solid fa-arrow-right ms-3"></i>
                    </a>
                </div>
            </div>
            <div class="align-self-center position-relative" id="container-right">
                <div id="icon-top" class="d-flex flex-column position-fixed">
                    <div class="position-relative">
                        <img class="img-before" src="/img/icon.png" alt="icon">
                        <img class="img-after" src="/img/icon.png" alt="icon">
                    </div>
                    <div>
                        <span>Demos</span>
                    </div>
                </div>
                <div id="icon-bot" class="position-fixed">
                    <div id="icon-bot-n">
                        <div class="float-start">
                            <span>$</span>
                        </div>
                        <h2>39</h2>
                    </div>
                    <div id="text-sale">
                        <span>On Sale</span>
                    </div>
                </div>
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

        padding: 11% 11%;

        #container-left {

            h1 {
                font-size: 27px;
            }

            h2 {
                font-size: 60px;
            }

            #text-fitness {
                color: $testo-rosso;
            }

            #text-curabitur {
                color: $testo-argento;
            }

            #yt-button {
                padding: 12px 27px;
                border-radius: 30px;
                background-color: $dodger-blue;
                transition: all .3s;

                &:hover {
                    background-color: $testo-rosso;
                }

            }

            #buy-button {
                padding: 10px 30px;
                border: 3px solid #333333;
                border-radius: 30px;
                color: $white;
                transition: all .3s;

                &:hover {
                    border: 3px solid $white;
                    color: $cod-gray;
                    background-color: $white;
                }

            }

            .fa-arrow-right {
                font-size: 13px;
            }

        }

        #container-right {

            width: 25%;

            #icon-top {
                width: 70px;
                height: 70px;
                padding: 8px 6px;
                align-items: center;
                border-radius: 10px;
                right: 5px;
                top: 120px;
                background-color: $white;
                box-shadow: 0 -5px 20px 5px rgba(0, 0, 0, .15);
                cursor: pointer;

                img {
                    right: 10px;
                    top: 120px;
                    width: 35px;
                    transition: transform 0.3s ease-in-out;
                }

                .img-before {
                    transform: translateX(0);
                }

                .img-after {
                    position: absolute;
                    top: 0;
                    left: 10px;
                    opacity: 0;
                    transform: translateX(10px);

                }

                &:hover .img-before {
                    transform: translateX(-16px);
                    opacity: 0;
                }

                &:hover .img-after {
                    transform: translateX(-10px);
                    transition: opacity 0.4s cubic-bezier(0.21, 0.6, 0.35, 1),
                        transform 0.3s ease-in;
                    opacity: 1;
                }

                span {
                    font-size: 14px;
                }

            }

            #icon-bot {

                width: 70px;
                height: 70px;
                padding: 8px 6px;
                border-radius: 10px;
                right: 5px;
                top: 210px;
                background-color: $white;
                text-align: center;
                box-shadow: 0 -5px 20px 5px rgba(0, 0, 0, .15);
                cursor: pointer;

                &:hover #icon-bot-n {
                    color: $testo-rosso;
                }

                #icon-bot-n {

                    color: $soft-green;
                    font-size: 13px;
                    transition: all .3s;


                    .float-start {
                        margin-left: 6px;
                        font-size: 15px;
                    }

                    h2 {
                        margin-right: 10px;
                        margin-bottom: 0;
                    }

                }

                #text-sale {
                    margin-top: -3px;
                }

            }


            .fa-play {
                width: 80px;
                height: 78px;
                line-height: 78px;
                border-radius: 50%;
                text-align: center;
                background-color: $white;
                color: $dodger-blue;
                transition: all .3s;
                cursor: pointer;

                &:hover {
                    color: $testo-rosso;
                }

            }

        }
    }

}
</style>
