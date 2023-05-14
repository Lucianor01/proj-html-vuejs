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
                <div class="text-center col-4 container-right">
                    <img class="mb-3" src="/img/logo.png" alt="Logo">
                    <p class="mb-4">
                        Ac aliquam neque sagittis diam faucibus vitae purus turpis phasellus. Pellentesque consectetur amet
                        purus
                        ultrices mauris.
                    </p>
                    <div id="socials">
                        <i class="fa-brands fa-facebook-f"></i>
                        <i class="mx-3 fa-brands fa-twitter"></i>
                        <i class="fa-brands fa-youtube"></i>
                        <i class="mx-3 fa-brands fa-instagram"></i>
                        <i class="fa-brands fa-linkedin"></i>
                    </div>
                </div>
                <div class="col-4 text-center container-mid">
                    <h2>Recent Posts</h2>
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
                <div class="col-4 text-center container-left">
                    <h2>Contact informations</h2>
                    <p>4746 Tipple Road Michigan 48449</p>
                    <span>Mobile: 1.800.000.0000</span>
                    <p>Email: info@your-company.com</p>
                </div>
            </div>
        </div>
    </section>
    <section id="section-2">
        <div>
            <p>
                © Copyright 2012 - 2023 | Avada Theme by
                <a href="#">ThemeFusion</a>
                | All Rights Reserved | Powered by
                <a href="#">WordPress</a>
            </p>
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

    .container-right {

        p {
            color: hsla(0, 0%, 100%, calc(100% - 22%));
        }

        #socials {
            color: $testo-rosso;
        }

    }

    .container-mid {

        color: $white;

        h2 {
            font-size: 23px;
        }

        ul {
            list-style-type: none;

            a {
                color: $white;
                text-decoration: none;

                i {
                    font-size: 14px;
                }

            }

        }

    }

    .container-left {

        color: $white;


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
        }

    }

}
</style>
