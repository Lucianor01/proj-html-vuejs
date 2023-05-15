<script>
export default {
    name: "LatestArticles",
    props: ['infoArticles'],
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
        <div class="card border-0">
            <div id="img-articles">
                <div class="position-relative">
                    <img :src="infoArticles.img" class="card-img-top rounded-0" alt="infoArticles.title">
                    <div id="overlay"></div>
                </div>
            </div>
            <div class="card-body">
                <a href="#" class="card-title">{{ infoArticles.title }}</a>
                <p class="card-text">{{ infoArticles.subTitle }}</p>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../style/main.scss' as *;

.card {

    text-align: start;

    #img-articles {

        &:hover {

            #overlay {
                opacity: 1;
            }
        }

        #overlay {
            opacity: 0;
            transition: opacity 0.4s ease-in-out;
            width: 100%;
            position: absolute;
            height: 100%;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            background-image: linear-gradient(to top, hsla(234, 100%, 63%, 0.6) 0, rgba(65, 84, 255, 0) 100%);
            cursor: pointer;
        }
    }

    .card-body {


        a {
            font-size: 28px;
            font-weight: bold;
            text-decoration: none;
        }
    }
}
</style>