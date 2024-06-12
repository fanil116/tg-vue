export interface Master {
    id: number;
    name: string;
    class: string;
    fullClass: string;
    services: Services[]
}

export interface Services {
    name: string;
    price: number;
    img: string;
}

export interface State {
    masters: Master[];
}