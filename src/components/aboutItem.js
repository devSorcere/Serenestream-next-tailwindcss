
const AboutItem = ({ img, name, job, description }) => {
    return (
        <div className="flex flex-col items-center">
            <img src={img} className="rounded-[400px]" alt="" />
            <div className="bg-[#F6E4EF] p-[16px] w-[289px] rounded-[44px] text-center my-[24px]">
                <div className="text-[24px]">{name}</div>
                <div className="text-[16px]">{job}</div>
            </div>
            <div className="relative text-[20px] opacity-[0.6] pl-[10px] border-l-[2px] border-[#E13884]">
                {description}
            </div>
        </div>
    )
}
export default AboutItem;