export interface MapsI {
    position: {
        lat: number,
        lng: number
    };
    title: string;
    image?: string;
    text: string;
    markerObj?: any;    //opcional
    markerIndex: number;
}