type Props = {
    title: string;
};

export default function NavList({ title }: Props) {
    return (
        <h1 className="hover:text-amber-400 duration-200 delay-200 hover:scale-105">{title}</h1>
    );
}
