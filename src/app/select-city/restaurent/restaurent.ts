import { Url } from "url";

export interface Restaurants {
    restaurant: Restaurant[];
}

export interface Restaurant {
    id: number;
    name: string;
    location: Location[];
    featured_image: Url;
    photos_url: Url;
    user_rating: Rating[];
    all_reviews_count: number;
    all_reviews: Review[];
    isLiked: boolean;
}
export interface Location {
    address: string;
    locality: string;
    city: string;
    latitude: number;
    longitude: number;
    zipcode: number;
    country_id: number
}
export interface Rating {
    aggregate_rating: number;
    rating_text: string;
    rating_color: string;
    votes: number;
}
export interface Review {
    rating: number;
    review_text: string;
    id: number;
    rating_color: string;
    review_time_friendly: string;
    rating_text: string;
    timestamp: number;
    likes: number;

}
