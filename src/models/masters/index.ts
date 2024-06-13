export interface Master {
    id: number;
    name: string;
    class: string;
    fullClass: string;
    services: Services[];
    works: Photo[];
}

export interface Services {
    name: string;
    price: number;
    img: string;
}

export interface Photo {
    src: string;
}

export interface State {
    masters: Master[];
}