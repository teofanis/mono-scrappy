export interface Tag {
    id: number;
    name: string;
    order_column: number;
}

export interface Bookmark {
    id: number;
    title: string;
    url: string;
    description: string;
    tags?: Tag[];
    updated_at: string;
    created_at: string;
}
