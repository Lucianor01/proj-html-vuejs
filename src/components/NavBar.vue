<script>

export default {
    name: "NavBar",
    data() {
        return {

        }
    },
    methods: {

    },
}

</script>

<template>
    <nav class="navbar navbar-expand-lg p-4" data-bs-theme="dark">
        <div class="container">
            <a class="navbar-brand" href="/">
                <img src="/img/logo.png" alt="Logo">
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-end gap-4" id="navbarSupportedContent">
                <ul class="navbar-nav mb-2 mb-lg-0">
                    <li class="nav-item me-3">
                        <a class="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li class="nav-item me-3">
                        <a class="nav-link" href="#">Services</a>
                    </li>
                    <li class="nav-item me-3">
                        <a class="nav-link" href="#">About</a>
                    </li>
                    <li class="nav-item me-3">
                        <a class="nav-link" href="#">Videos</a>
                    </li>
                    <li class="nav-item me-3">
                        <a class="nav-link" href="#">Blog</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Store
                            <span class="ms-1 rounded" id="Nav-New">New</span>
                        </a>
                    </li>
                </ul>
                <div class="nav-item" id="nav-button">
                    <a href="#" class="text-decoration-none">Schedule a workout</a>
                </div>
                <div class="nav-item">
                    <a href="#">
                        <i class="fa-solid fa-cart-shopping"></i>
                    </a>
                </div>
                <div class="nav-item">
                    <a href="#">
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </a>
                </div>
            </div>
        </div>
    </nav>
</template>

<style lang="scss" scoped>
@use '../style/main.scss' as *;

nav {
    background-color: #060606;

    #navbarSupportedContent {

        a {
            font-size: 17px;
        }

        #Nav-New {
            padding: 3px 7px;
            font-size: 12px;
            color: $cod-gray;
            background-color: $yellow;

        }

        #nav-button {
            padding: 10px 20px;
            border-radius: 20px;
            background-color: $dodger-blue;
            transition: all .3s;
            cursor: pointer;

            &:hover {
                background-color: $testo-rosso;
            }

            a {
                color: $white;

                font-size: 15px;
            }

        }

        i {
            font-size: 15px;
            color: $testo-argento;
            transition: all .3s;

            &:hover {
                color: $white;
            }

        }
    }
}
</style>
