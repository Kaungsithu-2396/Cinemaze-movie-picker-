type Props = {
    params: {
        genreID: number;
    };
};

export default function page({ params: { genreID } }: Props) {
    return <div className="flex-1 h-screen">page {genreID}</div>;
}
