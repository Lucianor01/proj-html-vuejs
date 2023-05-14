import { reactive } from "vue";

export const store = reactive(
    {
        cardSection_2: [
            {
                bg_img: '/img/service6-2x.jpg',
                img: '/img/icon-2.png',
                title: 'Crossfit workout',
                subTitle: 'Push your limits'
            },
            {
                bg_img: '/img/service6-2x.jpg',
                img: '/img/icon-2.png',
                title: 'New gym apparel',
                subTitle: 'Look good, feel good'
            },
            {
                img: '/img/icon-2.png',
                title: 'Team training',
                subTitle: 'Find a partner'
            }
        ],

        featuredPlaylist: [
            {
                img: '/img/video2-2x.jpg',
                title: 'Thighd & glute workout',
                subTitle: 'Increase your mobility'
            },
            {
                img: '/img/video7-2x.jpg',
                title: 'Lift, firm & perk up',
                subTitle: 'Feel young again'
            },
            {
                img: '/img/video9-2x.jpg',
                title: 'Slim & trim your waist',
                subTitle: 'Shed those extra pounds'
            }
        ],

        cardTraining: [
            {
                img: 'img/image-3.png',
                title: 'Team training',
                subTitle: 'Find a partner',
                description: 'Vestibulum, curabitur eu sem nibh ultrices sit nulla adipidcing. Nisl sit frames amet senectus eget sed duis vehicula. Tristique',
                link: 'Find a partner'
            },
            {
                img: 'img/image-4.png',
                title: 'Crossfit workout',
                subTitle: 'Push your limits',
                description: 'Vestibulum, curabitur eu sem nibh ultrices sit nulla adipidcing. Nisl sit frames amet senectus eget sed duis vehicula. Tristique',
                link: 'Learn avout Crossfit'
            },
            {
                img: 'img/image-5.png',
                title: 'Weight loss plan',
                subTitle: 'Shed those pounds',
                description: 'At laoreet senectus volutpat diam vel sed sed amet pallentesque. Lobortis ut aliaquam risus purus. A tellus ut etiam',
                link: 'Schedule a wrokout'
            }
        ],

        latestArticles: [
            {
                img: '/img/blog4-2x.jpg',
                title: 'The best protein shake',
                subTitle: 'By admin | November 26th, 2019 | Gym'
            },
            {
                img: '/img/blog1-2x.jpg',
                title: 'Ultimate cardio workout',
                subTitle: 'By admin | November 26th, 2019 | Gym'
            },
            {
                img: '/img/blog3-2x.jpg',
                title: 'New juices available now',
                subTitle: 'By admin | November 26th, 2019 | Gym'
            }
        ],
    }
)