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
        ]
    }
)