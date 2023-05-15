<script>
import { store } from '../store'

export default {
    name: "FooterComp",
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
    <section id="section-1">
        <div class="container">
            <div class="row">
                <div class="col-4 text-center container-left">
                    <img class="mb-3" src="/img/logo.png" alt="Logo">
                    <p class="mb-4">
                        Ac aliquam neque sagittis diam faucibus vitae purus turpis phasellus. Pellentesque consectetur amet
                        purus
                        ultrices mauris.
                    </p>
                    <div>
                        <a href="#" class="socials" data-tooltip="Facebook">
                            <i class="fab fa-facebook-f"></i>
                        </a>
                        <a href="#" class="socials mx-4" data-tooltip="Twitter">
                            <i class="fab fa-twitter"></i>
                        </a>
                        <a href="#" class="socials" data-tooltip="YouTube">
                            <i class="fab fa-youtube"></i>
                        </a>
                        <a href="#" class="socials mx-4" data-tooltip="Instagram">
                            <i class="fab fa-instagram"></i>
                        </a>
                        <a href="#" class="socials" data-tooltip="LinkedIn">
                            <i class="fab fa-linkedin"></i>
                        </a>
                    </div>
                </div>
                <div class="col-4 text-center  container-mid">
                    <h2 class="ms-4 mb-5">Recent Posts</h2>
                    <ul>
                        <li class="mb-2">
                            <a href="#">
                                <i class="fa-solid fa-angle-right"></i>
                                The best protein shake
                            </a>
                        </li>
                        <li class="mb-2">
                            <a href="#">
                                <i class="fa-solid fa-angle-right"></i>
                                Ultimate cardio workout
                            </a>
                        </li>
                        <li class="mb-2">
                            <a href="#">
                                <i class="fa-solid fa-angle-right"></i>
                                New juices available now
                            </a>
                        </li>
                        <li class="mb-2">
                            <a href="#">
                                <i class="fa-solid fa-angle-right"></i>
                                Tips to Find training partners
                            </a>
                        </li>
                        <li class="mb-2">
                            <a href="#">
                                <i class="fa-solid fa-angle-right"></i>
                                20 best healthy recipes
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="col-4 text-center  container-right">
                    <h2 class="mb-5">Contact informations</h2>
                    <p>4746 Tipple Road Michigan 48449</p>
                    <span>Mobile: 1.800.000.0000</span>
                    <p>Email: info@your-company.com</p>
                </div>
            </div>
        </div>
    </section>
    <section id="section-2">
        <div class="position-relative">
            <p>
                © Copyright 2012 - 2023 | Avada Theme by
                <a href="#">ThemeFusion</a>
                | All Rights Reserved | Powered by
                <a href="#">WordPress</a>
            </p>
            <a href="#" id="arrow-up" class="position-fixed">
                <i class="fa-solid fa-angle-up"></i>
            </a>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../style/main.scss' as *;

#section-1 {

    padding-top: 7%;
    padding-right: 7%;
    padding-bottom: 6%;
    padding-left: 7%;
    background-color: $cod-gray;

    .container-left {


        p {
            color: hsla(0, 0%, 100%, calc(100% - 22%));
            font-size: 20px;
        }

        .socials {
            transition-duration: .2s;
            transition-timing-function: linear;
            color: $testo-rosso;
            position: relative;

            &:before {
                content: attr(data-tooltip);
                position: absolute;
                top: -20px;
                left: 50%;
                transform: translateX(-50%);
                padding: 3px 5px;
                background-color: #353333;
                border-radius: 4px;
                display: none;
                font-size: 11px;
            }

            &:hover:before {
                display: block;
            }

            &:hover {
                color: rgba(152, 147, 159, 0.64);
            }

        }

    }

    .container-mid {

        color: $white;

        h2 {
            font-size: 23px;
            text-transform: uppercase;
            font-weight: bold;
        }

        ul {
            list-style-type: none;

            a {
                color: $white;
                text-decoration: none;
                font-size: 20px;
                transition-duration: .2s;
                transition-timing-function: linear;

                &:hover {
                    color: $dodger-blue;
                }

                i {
                    font-size: 14px;
                }

            }

        }

    }

    .container-right {

        color: $white;

        h2 {
            font-size: 23px;
            text-transform: uppercase;
            font-weight: bold;
        }

        p {
            font-size: 20px;
        }

        span {
            font-size: 20px;
        }

        p:nth-child(2) {
            color: hsla(0, 0%, 100%, calc(100% - 44%));
        }

    }

}

#section-2 {

    padding-top: 37px;
    padding-right: 7%;
    padding-bottom: 37px;
    padding-left: 7%;
    border-top: 1px solid hsl(0deg 0.83% 36.71% / 44%);
    background-color: $cod-gray;
    text-align: center;


    p {
        margin: 0;
        color: hsla(0, 0%, 100%, calc(100% - 56%));

        a {
            text-decoration: none;
            color: $white;
            transition-duration: .2s;
            transition-timing-function: linear;

            &:hover {
                color: $dodger-blue;
            }

        }

    }

    #arrow-up {
        padding: 5px 15px;
        right: 40px;
        bottom: 0;
        border-radius: 4px 4px 0 0;
        color: $white;
        background-color: #333;
        z-index: 999;
        scroll-behavior: smooth;

        &:hover {
            background-color: $dodger-blue;
            cursor: pointer;
        }



    }

}
</style>
