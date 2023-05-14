<script>


export default {
    name: "SpeechMain",
    methods: {

    },
}

</script>

<template>
    <section id="section-Speech">
        <div class="container-fluid text-center">
            <h2 class="mb-3">"I've failed over and over again in my life. And that is why I succeed."</h2>
            <img class="mb-4" src="/img/image-6.png" alt="wave">
            <p class="mb-5">
                Arcu auctor gravida nisl, congue sit nisi tincidunt eget proin. in lacinia lacus donec sed massa in ipsum
                eros, tristique. Gravida suspendisse etiam in iaculis
            </p>
            <a href="#">Buy Avada today <i class="fa-solid fa-angle-right"></i></a>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../style/main.scss' as *;

#section-Speech {

    background-image: linear-gradient(180deg, hsla(240, 8%, 3%, calc(100% - 84%)) 0%, $cod-gray 100%), url(/img/banner2-2x.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;

    .container-fluid {

        max-width: 910px;
        padding-top: 10%;
        padding-right: 7%;
        padding-bottom: 10%;
        padding-left: 7%;

        h2 {
            font-size: 58px;
            font-weight: 500;
            letter-spacing: 0;
            color: $white;
        }

        img {
            width: 60px;
        }

        p {
            font-size: 23px;
            color: $testo-argento;

        }

        a {

            padding: 17px 40px;
            border-radius: 30px;
            font-size: 18px;
            text-decoration: none;
            color: $white;
            background-color: $dodger-blue;
        }

    }

}
</style>
