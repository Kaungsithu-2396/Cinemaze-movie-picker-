type Props = {
    title: string;
};

export default function NavList({ title }: Props) {
    return (
        <li><h1 className="hover:text-amber-400 p-5  duration-200 delay-200 hover:scale-105 hover:bg-black  border-white w-full text-white/60">{title}</h1></li>
    );
}
