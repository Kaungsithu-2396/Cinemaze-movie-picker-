type movies = {
    page: number;
    results: [
        {
            adult: boolean;
            backdrop_path: string;
            genre_ids: number[];
            id: number;
            original_language: string;
            original_title: string;
            overview: string;
            popularity: number;
            poster_path: string;
            release_date: string;
            title: string;
            video: boolean;
            vote_average: number;
            vote_count: number;
        }
    ];
};
type comingMovies = {
    dates: {
        maximum: String;
        minimum: String;
    };
    page: number;
    results: [
        {
            adult: Boolean;
            backdrop_path: string;
            genre_ids: Number[];
            id: Number;
            original_language: String;
            original_title: String;
            overview: String;
            popularity: number;
            poster_path: String;
            release_date: String;
            title: String;
            video: Boolean;
            vote_average: number;
            vote_count:number;
        }
    ];
};
