import type { State } from "@/models/masters";
const state = (): State => ({
    masters:  [
        {
            id:1,
            name: "Екатерина",
            class: "masters_one",
            fullClass: "masters_one-full",
            services: [
                {
                    name: "Стрелка с растушёвкой",
                    price: 10000,
                    img: "/ekaterina/price/strelka/strelka.jpg",
                    slider: [
                        {
                            src: "/ekaterina/price/strelka/strelka.jpg"
                        },
                        {
                            src: "/ekaterina/price/strelka/one.jpg"
                        },
                        {
                            src: "/ekaterina/price/strelka/two.jpg"
                        },
                        {
                            src: "/ekaterina/price/strelka/three.jpg"
                        },
                        {
                            src: "/ekaterina/price/strelka/four.jpg"
                        },
                    ]
                },
                {
                    name: "Брови волосковая",
                    price: 10000,
                    img: "/ekaterina/price/brovi-volos/brovi-volos.jpg",
                    slider: [
                        {
                            src: "/ekaterina/price/brovi-volos/brovi-volos.jpg"
                        },
                        {
                            src: "/ekaterina/price/brovi-volos/one.jpg"
                        },
                        {
                            src: "/ekaterina/price/brovi-volos/two.jpg"
                        },
                    ]
                },
                {
                    name: "Брови",
                    price: 10000,
                    img: "/ekaterina/price/brovi/brovi.jpg",
                    slider: [
                        {
                            src: "/ekaterina/price/brovi/brovi.jpg"
                        },
                        {
                            src: "/ekaterina/price/brovi/one.jpg"
                        },
                        {
                            src: "/ekaterina/price/brovi/two.jpg"
                        },
                        {
                            src: "/ekaterina/price/brovi/three.jpg"
                        },
                    ]
                },
                {
                    name: "Стрелка",
                    price: 6500,
                    img: "/ekaterina/price/strelka-2/strelka-2.jpg",
                    slider: [
                        {
                            src: "/ekaterina/price/strelka-2./strelka-2.jpg"
                        },
                    ]
                },
                {
                    name: "Межресничка",
                    price: 5000,
                    img: "/ekaterina/price/mejresnica/mejresnica.jpg",
                    slider: [
                        {
                            src: "/ekaterina/price/mejresnica/mejresnica.jpg"
                        },
                        {
                            src: "/ekaterina/price/mejresnica/one.jpg"
                        },
                        {
                            src: "/ekaterina/price/mejresnica/two.jpg"
                        },
                    ]
                },
                {
                    name: "Губы",
                    price: 10000,
                    img: "/ekaterina/price/gubi/gubi.jpg",
                    slider: [
                        {
                            src: "/ekaterina/price/gubi/gubi.jpg"
                        },
                        {
                            src: "/ekaterina/price/gubi/one.jpg"
                        },
                        {
                            src: "/ekaterina/price/gubi/two.jpg"
                        },
                        {
                            src: "/ekaterina/price/gubi/three.jpg"
                        },
                        {
                            src: "/ekaterina/price/gubi/four.jpg"
                        },
                    ]
                },
                {
                    name: "Удаление",
                    price: 10000,
                    img: "/ekaterina/price/delete/delete.jpg",
                    slider: [
                        {
                            src: "/ekaterina/price/delete/delete.jpg"
                        },
                    ]
                },
            ],
            works: [
                {
                    src: "/ekaterina/photo_work/one.jpg"
                },
                {
                    src: "/ekaterina/photo_work/two.jpg"
                },
                {
                    src: "/ekaterina/photo_work/three.jpg"
                },
                {
                    src: "/ekaterina/photo_work/four.jpg"
                },
                {
                    src: "/ekaterina/photo_work/five.jpg"
                },
                {
                    src: "/ekaterina/photo_work/six.jpg"
                },
                {
                    src: "/ekaterina/photo_work/seven.jpg"
                },
                {
                    src: "/ekaterina/photo_work/eight.jpg"
                },
                {
                    src: "/ekaterina/photo_work/nine.jpg"
                },
                {
                    src: "/ekaterina/photo_work/ten.jpg"
                },
                {
                    src: "/ekaterina/photo_work/eleven.jpg"
                },
                {
                    src: "/ekaterina/photo_work/twelve.jpg"
                }
            ],
        },
        {
            id:2,
            name: "Ильнара",
            class: "masters_two",
            fullClass: "masters_two-full",
            services: [
                {
                    name: "Межресничка",
                    price: 5000,
                    img: "/ilnara/price/mejresnica.jpg",
                    slider: [
                        {
                            src: "/ilnara/price/mejresnica/mejresnica.jpg"
                        },
                        {
                            src: "/ilnara/price/mejresnica/one.jpg"
                        },
                    ]
                },
                {
                    name: "Губы",
                    price: 8000,
                    img: "/ilnara/price/gubi.jpg",
                    slider: [
                        {
                            src: "/ilnara/price/gubi/gubi.jpg"
                        },
                        {
                            src: "/ilnara/price/gubi/one.jpg"
                        },
                        {
                            src: "/ilnara/price/gubi/two.jpg"
                        },
                        {
                            src: "/ilnara/price/gubi/three.jpg"
                        },
                        {
                            src: "/ilnara/price/gubi/four.jpg"
                        },
                    ]
                },
                {
                    name: "Брови",
                    price: 8000,
                    img: "/ilnara/price/brovi.jpg",
                    slider: [
                        {
                            src: "/ilnara/price/brovi/brovi.jpg"
                        },
                        {
                            src: "/ilnara/price/brovi/one.jpg"
                        },
                        {
                            src: "/ilnara/price/brovi/two.jpg"
                        },
                        {
                            src: "/ilnara/price/brovi/three.jpg"
                        },
                        {
                            src: "/ilnara/price/brovi/four.jpg"
                        },
                    ]
                },
            ],
            works: [
                {
                    src: "/ilnara/photo_work/one.jpg"
                },
                {
                    src: "/ilnara/photo_work/two.jpg"
                },
                {
                    src: "/ilnara/photo_work/three.jpg"
                },
                {
                    src: "/ilnara/photo_work/four.jpg"
                },
                {
                    src: "/ilnara/photo_work/five.jpg"
                },
                {
                    src: "/ilnara/photo_work/six.jpg"
                },
                {
                    src: "/ilnara/photo_work/seven.jpg"
                },
                {
                    src: "/ilnara/photo_work/eight.jpg"
                },
                {
                    src: "/ilnara/photo_work/nine.jpg"
                },
                {
                    src: "/ilnara/photo_work/ten.jpg"
                },
                {
                    src: "/ilnara/photo_work/eleven.jpg"
                },
                {
                    src: "/ilnara/photo_work/twelve.jpg"
                }
            ]
        },
        {
            id:3,
            name: "Луиза",
            class: "masters_three",
            fullClass: "masters_three-full",
            services: [
                {
                    name: "Губы",
                    price: 4500,
                    img: "/luiza/price/gubi/gubi.jpg",
                    slider: [
                        {
                            src: "/luiza/price/gubi/gubi.jpg"
                        },
                        {
                            src: "/luiza/price/gubi/one.jpg"
                        },
                        {
                            src: "/luiza/price/gubi/two.jpg"
                        },
                        {
                            src: "/luiza/price/gubi/three.jpg"
                        },
                    ]
                },
                {
                    name: "Брови",
                    price: 4500,
                    img: "/luiza/price/brovi/brovi.jpg",
                    slider: [
                        {
                            src: "/luiza/price/brovi/brovi.jpg"
                        },
                        {
                            src: "/luiza/price/brovi/one.jpg"
                        },
                        {
                            src: "/luiza/price/brovi/two.jpg"
                        },
                        {
                            src: "/luiza/price/brovi/three.jpg"
                        },
                    ]
                },
            ],
            works: [
                {
                    src: "/luiza/photo_work/one.jpg"
                },
                {
                    src: "/luiza/photo_work/two.jpg"
                },
                {
                    src: "/luiza/photo_work/three.jpg"
                },
                {
                    src: "/luiza/photo_work/four.jpg"
                },
                {
                    src: "/luiza/photo_work/five.jpg"
                },
                {
                    src: "/luiza/photo_work/six.jpg"
                },
                {
                    src: "/luiza/photo_work/seven.jpg"
                },
                {
                    src: "/luiza/photo_work/eight.jpg"
                },
                {
                    src: "/luiza/photo_work/nine.jpg"
                },
                {
                    src: "/luiza/photo_work/ten.jpg"
                },
                {
                    src: "/luiza/photo_work/eleven.jpg"
                },
                {
                    src: "/luiza/photo_work/twelve.jpg"
                }
            ]
        }],
});

export type MasterState = ReturnType<typeof state>;

export default state;