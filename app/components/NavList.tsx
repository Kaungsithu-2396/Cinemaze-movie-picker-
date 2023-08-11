type Props = {
    title: String;
    to: string;
    space: string;
    fontSize: string;
};
import Link from "next/link";
export default function NavList({ title, to, space, fontSize }: Props) {
    return (
        <li>
            <Link href={to}>
                {/* <h1 className="hover:text-amber-400 p-5 text-xs md:border-2 lg:border-0 rounded-lg   duration-200 delay-200 hover:scale-105 hover:bg-black  md:border-white w-full text-white/60 lg:rounded-md"> */}
                <h1
                    className={`hover:text-amber-400 ${space} text-${fontSize}   lg:border-0 rounded-lg   duration-200 delay-200 hover:scale-105 hover:bg-black   w-full text-white/60 lg:rounded-md`}
                >
                    {title}
                </h1>
            </Link>
        </li>
    );
}
