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
                    img: "/ekaterina/strelka.jpg"
                },
                {
                    name: "Брови волосковая",
                    price: 10000,
                    img: "/ekaterina/brovi-volos.jpg"
                },
                {
                    name: "Брови",
                    price: 10000,
                    img: "/ekaterina/brovi.jpg"
                },
                {
                    name: "Стрелка",
                    price: 6500,
                    img: "/ekaterina/streka-2.jpg"
                },
                {
                    name: "Межресничка",
                    price: 5000,
                    img: "/ekaterina/mejresnica.jpg"
                },
                {
                    name: "Губы",
                    price: 10000,
                    img: "/ekaterina/gubi.jpg"
                },
                {
                    name: "Удаление",
                    price: 10000,
                    img: "/ekaterina/delete.jpg"
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
            ]
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
                    img: "ilnara/mejresnica.jpg"
                },
                {
                    name: "Губы",
                    price: 8000,
                    img: "ilnara/gubi.jpg"
                },
                {
                    name: "Брови",
                    price: 8000,
                    img: "/ilnara/brovi.jpg"
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
                    img: "/luiza/gubi.jpg"
                },
                {
                    name: "Брови",
                    price: 4500,
                    img: "/luiza/brovi.jpg"
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