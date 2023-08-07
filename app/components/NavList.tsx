type Props = {
    title: String;
    to: string;
};
import Link from "next/link";
export default function NavList({ title, to }: Props) {
    return (
        <li>
            <Link href={to}>
                <h1 className="hover:text-amber-400 p-5  duration-200 delay-200 hover:scale-105 hover:bg-black  border-white w-full text-white/60">
                    {title}
                </h1>
            </Link>
        </li>
    );
}
