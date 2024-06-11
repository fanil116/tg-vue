import type { State } from "@/models/masters";
const state = (): State => ({
    masters:  [
        {
            id:1,
            name: "Екатерина",
            class: "masters_one"
        },
        {
            id:2,
            name: "Ильнара",
            class: "masters_two"
        },
        {
            id:3,
            name: "Луиза",
            class: "masters_three"
        }],
});

export type MasterState = ReturnType<typeof state>;

export default state;