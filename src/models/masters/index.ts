export interface Master {
    id: number;
    name: string;
    class: string;
    fullClass: string;
}

export interface State {
    masters: Master[];
}