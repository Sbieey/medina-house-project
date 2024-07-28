
interface Prop {
    text: string
}
export default function HeadingBtn({ text }: Prop) {
    return (
        <div className=" items-center mt-10 mb-5">
            <button className="bg-[#E0F8F2] text-green dm-sans-regular font-semibold py-1.5  px-8 rounded-full ">{text}</button>
        </div>
    )
}
