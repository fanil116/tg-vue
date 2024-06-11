import type { State } from "@/models/masters";
const state = (): State => ({
    masters:  [
        {
            id:1,
            name: "Екатерина",
            class: "masters_one",
            fullClass: "masters_one-full"
        },
        {
            id:2,
            name: "Ильнара",
            class: "masters_two",
            fullClass: "masters_two-full"
        },
        {
            id:3,
            name: "Луиза",
            class: "masters_three",
            fullClass: "masters_three-full"
        }],
});

export type MasterState = ReturnType<typeof state>;

export default state;