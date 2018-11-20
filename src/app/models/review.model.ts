export interface ReviewList {
    reviews_count: number;
}
export interface Reviews {
    review : Review[];
}

export interface Review {
        rating: number;
        review_text: string;
        id: number;
        rating_color: string;
        user: User[];
}
export interface User {
    name: string;
}