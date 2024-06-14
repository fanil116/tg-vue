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
    slider: Photo[]
}

export interface Photo {
    src: string;
}

export interface State {
    masters: Master[];
}