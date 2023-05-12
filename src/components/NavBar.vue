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
                <img src="/img/logo.png" alt="">
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-end gap-4" id="navbarSupportedContent">
                <ul class="navbar-nav mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Services</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Videos</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Blog</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Store
                            <span class="rounded" id="Nav-New">New</span>
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
nav {
    background-color: #060606;

    #navbarSupportedContent {

        #Nav-New {
            padding: 3px 8px;
            color: #060606;
            background-color: #fff941;

        }

        #nav-button {
            padding: 10px 20px;
            border-radius: 20px;
            background-color: #4154fe;

            a {
                color: #ffffff;
                font-size: 15px;
            }

        }

        i {
            color: #bcbcbc;
        }
    }
}
</style>
