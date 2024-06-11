export interface Master {
    id: number;
    name: string;
    class: string;
}

export interface State {
    masters: Master[];
}