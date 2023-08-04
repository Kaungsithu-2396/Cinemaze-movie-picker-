type Props = {
    params: { movieId: String };
};

export default function page({ params: { movieId } }: Props) {
    return <div className="flex-1 h-screen">page{movieId}</div>;
}
