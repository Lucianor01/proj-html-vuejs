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
            <div>
                <img :src="infoArticles.img" class="card-img-top rounded-0" alt="infoArticles.title">
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

    .card-body {


        a {
            font-size: 28px;
            font-weight: bold;
            text-decoration: none;
        }
    }
}
</style>
