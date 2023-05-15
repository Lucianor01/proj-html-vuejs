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

    $keys: map-keys($backgrounds);

    @each $position in $keys {
        &:nth-of-type(#{$position}) {
            @include background-img($position);
        }
    }

    &:hover {

        transform: scale(1.1);
        box-shadow: 0px 10px 30px 0px hsla(0, 0%, calc(20% - 20%), calc(100% - 40%));
        cursor: pointer;

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