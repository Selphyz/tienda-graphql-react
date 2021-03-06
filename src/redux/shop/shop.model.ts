export interface ShopStateModel {
    collections: Collections
}
export interface Collections {
    hats: ShopStateCollection;
    sneakers: ShopStateCollection;
    jackets: ShopStateCollection;
    womens: ShopStateCollection;
    mens: ShopStateCollection;
}
export interface ShopStateCollection {
    id?: number;
    title: string;
    routeName: string;
    items: (ShopStateItem)[]
}
export interface ShopStateItem {
    id?: number | undefined;
    name?: string | undefined;
    imageUrl?: string | undefined;
    price?: number | undefined;
};
