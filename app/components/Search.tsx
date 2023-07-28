type props = {
    size: number;
};

export default function Search({ size }: props) {
    return (
        <input
            type="text"
            name=""
            placeholder="&#128269; Titanic.."
            autoFocus
            className=" lg:m-5  lg:px-5 lg:py-3 px-5 py-2 md:px-14 md:py-3  bg-[#404040]/30 outline-none  text-white text-xl lg:border-2 rounded-md border-black "
            id=""
            size={size}
        />
    );
}
