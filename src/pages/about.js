import AboutUs from "../assets/images/Frame 101131.png";
import AboutItem from "../components/aboutItem";
import CEO from "../assets/images/Frame 101148.png";
import Developer from "../assets/images/Frame 101149.png";
import MCEO from "../assets/images/Frame 101150.png";
import CTO from "../assets/images/Frame 101151.png";
import GroupPink from "../assets/images/Group 876.png";
import Logo from "../assets/images/logo.png";
const About = () => {
    return (
        <div>
            <div className="container-fluid px-0">
                <section>
                    <div className="grid grid-cols-12 gap-[20px] mb-[58px] mt-[111px]">
                        <div className="col-span-7 text-[46px]">Meet our dedicated team</div>
                        <div
                            className="col-span-5 opacity-[0.6] pl-[10px] border-l-[2px] border-[#030734
]"
                        >
                            At Serenestream, we're more than just a company — we're a community
                            united by our shared dedication to improving mental health and
                            well-being
                        </div>
                    </div>
                </section>

                <img src={AboutUs} className="w-[100%] mb-[120px]" alt="" />
                <div className="grid grid-cols-12 gap-x-[110px] gap-y-[100px] relative z-3 pb-[156px] pt-[37px] px-[160px]">
                    <div className="absolute top-0 left-0 bg-[#E5E8FF] h-full w-[85%] z-[-1] rounded-r-[80px] opacity-[0.5]">
                        <div className="relative">
                            <img
                                src={GroupPink}
                                className="right-0 absolute transform translate-x-[50%] translate-y-[-20%]"
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="col-span-6">
                        <AboutItem
                            img={CEO}
                            name="Emily Doe"
                            job="Co-Founder & CEO"
                            description={
                                "With a passion for mental health advocacy, Sarah leads Serenestream with vision and compassion. Her strategic insights drive the company forward, ensuring that every decision aligns with our mission to empower emotional well-being."
                            }
                        />
                    </div>
                    <div className="col-span-6">
                        <AboutItem
                            img={Developer}
                            name="David Patel"
                            job="Lead Developer"
                            description={
                                "David's expertise in software development brings Serenestream's vision to life. With precision and skill, he leads our development team in creating a seamless, user-friendly app that empowers individuals to find peace and resilience."
                            }
                        />
                    </div>
                    <div className="col-span-6">
                        <AboutItem
                            img={MCEO}
                            name="John Doe"
                            job="Co-Founder & CEO"
                            description={
                                "John's keen eye for detail and user-centric approach shape Serenestream's product experience. With a focus on empathy and usability, she ensures that every feature reflects our commitment to enhancing emotional well-being."
                            }
                        />
                    </div>
                    <div className="col-span-6">
                        <AboutItem
                            img={CTO}
                            name="Michele Rodriguez"
                            job="Co-Founder & CTO"
                            description={
                                "As the technical mastermind behind Serenestream, Michael brings expertise and innovation to our platform. His dedication to cutting-edge technology ensures that our app remains intuitive, reliable, and impactful."
                            }
                        />
                    </div>
                </div>
                <section className="bg-[#030734] px-[123px] py-[83px] mt-[120px]">
                    <div className="grid grid-cols-2">
                        <div className="flex">
                            <img
                                src={Logo}
                                className="rounded-[400px] border w-[80px]"
                                alt=""
                            />
                            <div className="pl-[20px]">
                                <div className="text-[#FAFAFA] text-[32px]">SERENESTREAM.</div>
                                <div className="text-[12px] text-[#FAFAFA] opacity-[0.6]">
                                    Helping individuals achieve greater emotional well-being.
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="flex justify-end text-[16px] text-[#FAFAFA]">
                                <div className=" border-b-[1px] border-[#FFFFFF] pb-[16px]">
                                    <span>PRODUCT</span>
                                    <span className="mx-[24px]">ABOUT US</span>
                                    <span>CONTACT US</span>
                                </div>
                            </div>

                            <div className=" pt-[16px] text-[#FAFAFA] opacity-[0.6] text-right">
                                Copyright Serenestream 2024.
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};
export default About;
