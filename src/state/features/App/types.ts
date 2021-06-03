export interface AppState {
    recipes: Recipe[];
}

export interface Recipe {
    contentId: number;
    contentType?: number;
    title: string;
    urlPartial: string;
    isFavourited: boolean;
    imageList: ImageList;
    tags: Tag[];
    authors: string[];
}

export interface ImageList {
    landscape32small1x: ImageDefinition;
    landscape32small2x: ImageDefinition;
    landscape32small3x: ImageDefinition;
    landscape32medium1x: ImageDefinition;
    landscape32medium2x: ImageDefinition;
    landscape32medium3x: ImageDefinition;
    landscapemobile1x: ImageDefinition;
    landscapemobile2x: ImageDefinition;
    landscapemobile3x: ImageDefinition;
    landscapewidedesktop1x: ImageDefinition;
    landscapewidedesktop2x: ImageDefinition;
    landscapewidedesktop3x: ImageDefinition;
}

export interface ImageDefinition {
    url: string;
}

export interface Tag {
    id: number;
    catId: number;
    name: string;
}
