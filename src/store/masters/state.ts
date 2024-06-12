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
            ]
        }],
});

export type MasterState = ReturnType<typeof state>;

export default state;