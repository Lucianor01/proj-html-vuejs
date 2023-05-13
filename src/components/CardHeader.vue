<script>

export default {
    name: "CardHeader",
    props: ['infoCard'],
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
        <img :src="infoCard.img" alt="wave">
        <h2>{{ infoCard.title }}</h2>
        <h3>{{ infoCard.subTitle }}</h3>
    </div>
</template>

<style lang="scss" scoped>
@use '../style/partials/mixin' as *;

.col-4 {

    max-width: 375px;
    max-height: 413px;
    margin-top: -6%;
    padding: 40px;
    border-radius: 5px;

    $keys: map-keys($backgrounds);

    @each $position in $keys {
        &:nth-of-type(#{$position}) {
            @include background-img($position);
        }
    }

    img {
        margin-top: 74%;
    }

    h2 {
        color: $white;
        font-size: 30px;
    }

    h3 {
        color: $yellow;
        font-size: 24px;
    }

}
</style>