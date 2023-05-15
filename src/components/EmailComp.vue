<script>


export default {
    name: "EmailComp",

    data() {
        return {
        }
    },
    methods: {

    },
}

</script>

<template>
    <section id="section-email">
        <div id="container">
            <h2>Join our mailing list today</h2>
            <h3 class="my-4">Inside offers & flash sales in your inbox every week.</h3>
            <img class="mb-5" src="/img/image.png" alt="image">
            <div class="d-flex mb-5">
                <input type="email" class="form-control me-3" id="colFormLabel" placeholder="Insert your email...*">
                <button type="button" class="btn text-light">Subscribe</button>
            </div>
            <p>
                Curabitur non nulla sit amet nisl tempus convallis quis ac lectus dolor sit amet, consectetur adipiscing
                elit sed porttitor lectus.
            </p>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../style/main.scss' as *;

#section-email {

    background-color: $cod-gray;
    background-image: linear-gradient(90deg, $cod-gray 47%, rgba(6, 6, 7, 0) 76%), url(/img/banner1-2x.jpg);
    background-size: cover;
    background-position: right bottom;

    #container {

        padding-top: 6%;
        padding-right: 7%;
        padding-bottom: 6%;
        padding-left: 7%;
        max-width: 950px;

        h2 {
            font-size: 28px;
            color: $testo-rosso;
            font-weight: bold;
        }

        h3 {
            font-size: 58px;
            color: $white;
            font-weight: bold;
        }

        .form-control {
            width: 50%;
            border-radius: 20px;
        }

        button {
            padding: 10px 80px;
            border-radius: 30px;
            background-color: $dodger-blue;

            &:hover {
                background-color: $testo-rosso;
                cursor: pointer;
            }

        }

        p {
            font-size: 23px;
            color: $jumbo;
        }

    }
}
</style>
