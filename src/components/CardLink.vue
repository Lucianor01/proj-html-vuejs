<script>
export default {
    name: "CardLink",
    props: ['infoLink'],

}

</script>

<template>
    <div class="col-3">
        <div class="card text-center border-0">
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
