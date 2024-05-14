import { TECollapse } from "tw-elements-react";
import React, { useState } from "react";
import Navbar from "../components/navbar";
import AppleBtn from "../assets/images/appstore.png";
import googleplay from "../assets/images/googleplay.png";
import Grouplightblue from "../assets/images/Group 879.png";
import Phone from "../assets/images/214shots_so 1.png";
import Man from "../assets/images/Rectangle 113.png";
import Woman from "../assets/images/Rectangle 112.png";
import Groupblue from "../assets/images/Group 885.png";
import HeaderPhone from "../assets/images/883shots_so 1.png";
import RotatePhone from "../assets/images/241shots_so 1.png";
import Frame from "../assets/images/Frame 8404.png";
import GroupPink from "../assets/images/Group 876.png";
import GroupWhite from "../assets/images/Group 885.png";
import RedReact from "../assets/images/Rectangle 114.png";
import Logo from "../assets/images/logo.png";
import Line from '../assets/images/Vector 3.png'

const Home = () => {
    const [activeElement, setActiveElement] = useState("");

    const handleClick = (value) => {
        if (value === activeElement) {
            setActiveElement(activeElement);
        } else {
            setActiveElement(value);
        }
    };
    return (
        <div>
            <div className="container-fluid px-0">
                <div className="header h-[930px] flex flex-col justify-center">
                    <div className="px-[160px]">
                        <h1 className="text-[#030734] text-[46px] w-[50%] relative">
                            Serenestream, your gateway to emotional resilience
                            <img src={Line} alt="" />
                        </h1>
                        <div className="w-[50%] pt-[30px] leading-[30px] mb-[44px]">
                            Whether you're riding the highs or weathering the lows, our app
                            is here to guide you towards tranquility and emotional
                            well-being.
                        </div>
                        <div className="flex ">
                            <img src={AppleBtn} className="mr-[20px]" alt="" />
                            <img src={googleplay} alt="" />
                        </div>
                        <div className="absolute rounded-l-[60px] w-[50%] top-0 right-0 bg-[#F6E4EF]">
                            <div className="flex justify-center py-[200px] relative">
                                <div className="relative">
                                    <img
                                        src={GroupPink}
                                        className="absolute z-0 right-0 top-0 transform translate-x-[40%] translate-y-[-40%]"
                                        alt=""
                                    />
                                    <img src={HeaderPhone} className="z-1 relative" alt="" />
                                    <img
                                        src={Frame}
                                        className=" z-2 absolute top-[50%] transform translate-x-[-20%] translate-y-[-70%]"
                                        alt=""
                                    />
                                    <img
                                        src={RotatePhone}
                                        alt=""
                                        className="z-2 absolute bottom-0 left-0 transform translate-y-[40%] translate-x-[-70%]"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className=" flex flex-col justify-center">
                        
                    </div> */}

                    {/* <div className="grid  grid-cols-12 gap-4">
                        <div className="col-span-6 flex flex-col h-full items-end justify-center">
                            <h1 className="text-[#030734] text-[46px] w-[550px]">
                                Serenestream, your gateway to emotional resilience
                            </h1>
                            <div className="w-[550px]">
                                Whether you're riding the highs or weathering the lows, our app
                                is here to guide you towards tranquility and emotional
                                well-being.
                            </div>
                            <div className="flex ">
                                <img src={AppleBtn} className="mr-[20px]" alt="" />
                                <img src={googleplay} alt="" />
                            </div>
                        </div>
                        <div className="col-span-6 bg-[#F6E4EF]">
                            <div className="flex justify-center py-[200px] relative">
                                <div className="relative">
                                    <img
                                        src={GroupPink}
                                        className="absolute z-0 right-0 top-0 transform translate-x-[40%] translate-y-[-40%]"
                                        alt=""
                                    />
                                    <img src={HeaderPhone} className="z-1 relative" alt="" />
                                    <img
                                        src={Frame}
                                        className=" z-2 absolute top-[50%] transform translate-x-[-20%] translate-y-[-70%]"
                                        alt=""
                                    />
                                    <img
                                        src={RotatePhone}
                                        alt=""
                                        className="z-2 absolute bottom-0 left-0 transform translate-y-[40%] translate-x-[-70%]"
                                    />
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
                <section className="pb-[131px] pt-[212px]">
                    <h1 className="text-center text-[40px]">Your route to inner peace</h1>
                    <div className="text-center text-[20px] text-[#606263]">
                        Dive into a realm of calm, where emotional turbulence yields to
                        tranquility.
                    </div>
                    <div className="px-[160px] mt-[100px]">
                        <div className="grid grid-cols-12 gap-x-[20px] gap-y-[20px] relative">
                            <img
                                src={Grouplightblue}
                                className="absolute  transform translate-x-[-50%] translate-y-[-50%]"
                                alt=""
                            />
                            <div className="col-span-4 z-[3] bg-white">
                                <div className="p-[24px] border rounded-[16px] mb-[20px]">
                                    <div className="text-[#E13884] text-[20px] mb-[24px] ">
                                        Lack of emotional support
                                    </div>
                                    <div className="text-[16px] pb-[109px]">
                                        Serenestream bridges this gap by offering instant access
                                        to a supportive community and professional guidance
                                        through its AI chat feature, ensuring users never feel
                                        alone in their emotional journey.
                                    </div>
                                </div>
                                <div className="p-[24px] border rounded-[16px] mb-[20px]">
                                    <div className="text-[#E13884] text-[20px] mb-[24px] ">
                                        Self awareness
                                    </div>
                                    <div className="text-[16px]">
                                        Serenestream encourages mindfulness and self-reflection through its meditation exercises and mood tracking tools, helping users deepen their understanding of themselves and their emotions.
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-4 z-[3] bg-white">
                                <div className="p-[24px] border rounded-[16px] mb-[20px]">
                                    <div className="text-[#E13884] text-[20px] mb-[24px]  ">
                                        Overwhelm and stress
                                    </div>
                                    <div className="text-[16px] pb-[51px]">
                                        Serenestream combats this by offering a variety of meditation exercises and relaxation techniques designed to help users unwind, reduce stress, and restore balance to their lives.
                                    </div>
                                </div>
                                <div className="p-[24px] border rounded-[16px] mb-[20px]">
                                    <div className="text-[#E13884] text-[20px] mb-[24px] ">
                                        Mood swings managing
                                    </div>
                                    <div className="text-[16px]">
                                        Serenestream bridges this gap by offering instant access to a supportive community and professional guidance through its AI chat feature, ensuring users never feel alone in their emotional journey.
                                    </div>
                                </div>

                            </div>
                            <div className="col-span-4 z-[3] bg-white my-0 h-auto">
                                <div className="p-[24px] border rounded-[16px] mb-[20px]">
                                    <div className="text-[#E13884] text-[20px] mb-[24px] ">
                                        Self care time management
                                    </div>
                                    <div className="text-[16px] pb-[109px] ">
                                        Serenestream recognizes the importance of self-care and offers convenient, on-the-go access to guided meditation sessions and emotional support, allowing users to prioritize their mental health wherever they are.
                                    </div>
                                </div>
                                <div className="p-[24px] border rounded-[16px]">
                                    <div className="text-[#E13884] text-[20px]  mb-[20px]">
                                        Feelings expressing
                                    </div>
                                    <div className="text-[16px]">
                                        Serenestream bridges this gap by offering instant access
                                        to a supportive community and professional guidance
                                        through its AI chat feature, ensuring users never feel
                                        alone in their emotional journey.
                                    </div>
                                </div>
                            </div>
                            <img
                                src={Grouplightblue}
                                className="absolute bottom-0 right-0  transform translate-x-[50%] translate-y-[50%]"
                                alt=""
                            />
                        </div>
                    </div>
                </section>
                <section className="relative h-full">
                    <div className="absolute top-[87px] z-0 left-[160px] bg-[#C8CCFF] bg-opacity-[0.3] rounded-tr-[200px] rounded-bl-[200px]  w-[30%] h-[70%]"></div>
                    <div className="absolute top-[87px] z-0 right-[160px] bg-[#C8CCFF] bg-opacity-[0.3] rounded-tl-[200px] rounded-br-[200px] w-[30%] h-[70%]"></div>
                    <div className="z-2 relative min-h-[1400px] py-[63px] bg-[#C8CCFF] bg-opacity-20 rounded-[62px] text-center">
                        <span className="rounded-[8px] text-[12px] my-[8px] leading-[18px] bg-[#E1DCEA]   py-[10px] px-[20px]">
                            QUALITY FEATURES
                        </span>
                        <div className=" my-[64px] text-center text-[40px] text-normal text-[#050B52]">
                            Discover Serenestream’s life-changing features
                        </div>
                        <div className=" my-[8px] flex flex-row justify-center">
                            <div className="text-[#050B52] text-opacity-70 text-center w-[732px] text-[20px]">
                                Dive into the heart of Serenestream and discover the tools that
                                will guide you on your journey to emotional well-being.
                            </div>
                        </div>
                        <div className="flex justify-end text-white mt-[212px]">
                            <div className="w-[95%] bg-[#E13884] flex justify-between rounded-l-[44px] px-[80px] py-[29px] mb-[100px]">
                                <div className="w-[30%] text-left">
                                    <div className="text-[44px]">AI Chat</div>
                                    <div className="text-opacity-70 w-[250px]">
                                        Whether you're feeling overwhelmed, anxious, or simply want
                                        to talk, our AI chat feature provides a supportive space for
                                        you to express yourself
                                    </div>
                                </div>
                                <div className="w-[30%] text-left">
                                    <div className="text-[44px]">Mood Tracking</div>
                                    <div className="text-opacity-70  w-[250px]">
                                        Easily record and monitor your mood fluctuations throughout
                                        the day, week, or month.{" "}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-start text-white">
                            <div className="w-[95%] bg-[#E13884] flex justify-between rounded-r-[44px] px-[80px] py-[29px]">
                                <div className="w-[30%] text-left">
                                    <div className="text-[44px]">Weekly Mood Summary</div>
                                    <div className="text-opacity-70  w-[250px]">
                                        {" "}
                                        Reflect on your highs and lows, celebrate progress, and set
                                        intentions for the week ahead.{" "}
                                    </div>
                                </div>
                                <div className="w-[30%] text-left">
                                    <div className="text-[44px]">Meditation</div>
                                    <div className="text-opacity-70  w-[250px]">
                                        From deep breathing to mindfulness practices, our diverse
                                        range of meditation sessions offers something for everyone.
                                    </div>
                                </div>
                            </div>
                        </div>

                        <img
                            src={Phone}
                            width={"30%"}
                            className="absolute top-[380px] left-[50%] transform translate-x-[-50%]"
                            alt=""
                        />
                    </div>
                </section>
                <section className="py-[120px]">
                    <div className="flex flex-col justify-center items-center">
                        <span className="bg-[#E1DCEA] px-[20px] py-[10px] rounded-[8px]">
                            HOW IT WORKS?
                        </span>
                        <div className="text-[40px] text-[#030734] my-[16px]">
                            A roadmap to emotional well-being
                        </div>
                        <div className="text-[20px] text-[#606263] w-[50%] text-center">
                            From signing up to exploring our key features, find out how
                            Serenestream can guide you on the path to inner peace and
                            tranquility.
                        </div>
                    </div>
                </section>
                <section>
                    <div className="flex">
                        <div className="w-[50%] relative bg-[#F9ECF4] pt-[60px] pr-[65px] pb-[190px] pl-[100px]">
                            <div className="text-[#030734] text-[20px] font-bold mb-[24px]">
                                SIGN UP AND GET STARTED
                            </div>
                            <div>
                                <div className="text-[#606263]">
                                    Create your Serenestream account with just a few simple steps.
                                </div>
                                <div className="text-[#606263]">
                                    Enter your details, set up your profile, and unlock access to
                                    a world of emotional support and well-being tools.
                                </div>
                            </div>
                            <div className="absolute p-0 leading-[250px] right-[38px] bottom-[13px] text-[300px] text-bold opacity-[0.02]">
                                01
                            </div>
                        </div>
                        <div className="w-[50%] relative bg-[#E5E7FF] pt-[60px] pr-[65px] pb-[190px] pl-[100px]">
                            <div className="text-[#030734] text-[20px] font-bold mb-[24px]">
                                SIGN UP AND GET STARTED
                            </div>
                            <div>
                                <div className="text-[#606263]">
                                    Create your Serenestream account with just a few simple steps.
                                </div>
                                <div className="text-[#606263]">
                                    Enter your details, set up your profile, and unlock access to
                                    a world of emotional support and well-being tools.
                                </div>
                            </div>
                            <div className="absolute p-0 leading-[250px] left-[38px] bottom-[13px] text-[300px] text-bold opacity-[0.02]">
                                02
                            </div>
                        </div>
                    </div>
                    <div className="flex">
                        <div className="w-[50%] relative bg-[#E5E7FF] pt-[60px] pr-[65px] pb-[190px] pl-[100px]">
                            <div className="text-[#030734] text-[20px] font-bold mb-[24px]">
                                SIGN UP AND GET STARTED
                            </div>
                            <div>
                                <div className="text-[#606263]">
                                    Create your Serenestream account with just a few simple steps.
                                </div>
                                <div className="text-[#606263]">
                                    Enter your details, set up your profile, and unlock access to
                                    a world of emotional support and well-being tools.
                                </div>
                            </div>
                            <div className="absolute p-0 leading-[250px] right-[38px] bottom-[13px] text-[300px] text-bold opacity-[0.02]">
                                03
                            </div>
                        </div>
                        <div className="w-[50%] relative bg-[#F9ECF4] pt-[60px] pr-[65px] pb-[190px] pl-[100px]">
                            <div className="text-[#030734] text-[20px] font-bold mb-[24px]">
                                SIGN UP AND GET STARTED
                            </div>
                            <div>
                                <div className="text-[#606263]">
                                    Create your Serenestream account with just a few simple steps.
                                </div>
                                <div className="text-[#606263]">
                                    Enter your details, set up your profile, and unlock access to
                                    a world of emotional support and well-being tools.
                                </div>
                            </div>
                            <div className="absolute p-0 leading-[250px] left-[38px] bottom-[13px] text-[300px] text-bold opacity-[0.02]">
                                04
                            </div>
                        </div>
                    </div>
                </section>
                <section className="relative py-[120px] bg-[#C8CCFF] bg-opacity-0. pl-[160px] bg-[#f1f4f8]">
                    <img src={Woman} alt="" className="absolute right-[0] top-[0]" />
                    <span className="mt-[59px] rounded-[8px] px-[20px] py-[10px] bg-[#E1DCEA]">
                        BENEFITS
                    </span>
                    <div className="text-[40px] text-[#030734] mt-[16px]">
                        Embrace the benefits of Serenestream
                    </div>
                    <div className="mb-[55px]">
                        Our app offers a range of benefits designed to support you on your
                        journey towards inner peace.
                    </div>
                    <div>
                        <div>
                            <div className="grid grid-cols-12 gap-[12px] w-[70%]">
                                <div className="col-span-6">
                                    <div className="shadow mb-[20px] shadow-lg p-[24px] rounded-[16px] bg-[#F1F4F8] bg-opacity-[0.7]">
                                        <div className="text-[20px] mb-[24px] font-bold text-[#E13884]">
                                            Improved Mood Stability
                                        </div>
                                        <div className="text-[#606263]">
                                            By tracking your mood and engaging in regular self-care
                                            practices, you'll notice a reduction in mood swings and a
                                            greater sense of emotional equilibrium. Say goodbye to
                                            highs and lows, and hello to a more consistent and
                                            harmonious emotional experience.
                                        </div>
                                    </div>
                                    <div className="shadow shadow-lg p-[24px] rounded-[16px] bg-[#F1F4F8] bg-opacity-[0.7]">
                                        <div className="text-[20px] mb-[24px] font-bold text-[#E13884]">
                                            Enhanced Emotional Awareness
                                        </div>
                                        <div className="text-[#606263] leading-[30px]">
                                            Our app offers a range of benefits designed to support you on journey towards inner peace.
                                            Serenestream can transform your emotional well-being and enhance your quality of life.
                                        </div>
                                    </div>
                                </div>
                                <div className="col-span-6 relative">
                                    <img src={Man} className="w-full" alt="" />
                                    {/* <img src={RedReact} className="absolute top-0 right-0" alt="" /> */}
                                    <img
                                        src={Groupblue}
                                        className="absolute right-0 bottom-0 transform translate-x-[75%] translate-y-[10%]"
                                        alt=""
                                    />
                                </div>
                                <div className="col-span-6">
                                    <div className="shado mb-[20px] shadow-lg p-[24px] rounded-[16px] bg-[#F1F4F8] bg-opacity-[0.7]">
                                        <div className="text-[20px] mb-[24px] font-bold text-[#E13884]">
                                            Improved Mood Stability
                                        </div>
                                        <div className="text-[#606263]">
                                            By tracking your mood and engaging in regular self-care
                                            practices, you'll notice a reduction in mood swings and a
                                            greater sense of emotional equilibrium. Say goodbye to
                                            highs and lows, and hello to a more consistent and
                                            harmonious emotional experience.
                                        </div>
                                    </div>
                                </div>
                                <div className="col-span-6">
                                    <div className="shadow shadow-lg p-[24px] rounded-[16px] bg-[#F1F4F8] bg-opacity-[0.7]">
                                        <div className="text-[20px] mb-[24px] font-bold text-[#E13884]">
                                            Improved Mood Stability
                                        </div>
                                        <div className="text-[#606263]">
                                            By tracking your mood and engaging in regular self-care
                                            practices, you'll notice a reduction in mood swings and a
                                            greater sense of emotional equilibrium. Say goodbye to
                                            highs and lows, and hello to a more consistent and
                                            harmonious emotional experience.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="bg-[#E13884] flex relative flex-col justify-center items-center py-[142px]">
                    <img src={GroupWhite} className="absolute top-[0] right-0" alt="" />
                    <img src={GroupWhite} className="absolute bottom-[0] left-0" alt="" />
                    <span className="py-[10px] px-[20px] bg-[#E1DCEA] rounded-[8px]">
                        GET THE APP
                    </span>
                    <div className="text-[40px] text-white">
                        Start your journey to serenity today
                    </div>
                    <div className="text-[20px] text-white my-[16px]">
                        Download Serenestream now and embark on your journey towards inner
                        peace.
                    </div>
                    <div className="flex mt-[44px] gap-[20px] ">
                        <img src={AppleBtn} alt="" />
                        <img src={googleplay} alt="" />
                    </div>
                </section>
                <section className="py-[120px]">
                    <div className=" flex flex-col items-center pb-[120px]">
                        <span className="px-[20px] py-[10px] rounded-[8px] bg-[#E1DCEA]">
                            FAQ
                        </span>
                        <div className="text-[40px] text-[#030734] my-[16px]">
                            Answers to your questions
                        </div>
                        <div className="text-[#606263]">
                            Explore our frequently asked questions to learn more about how
                            Serenestream can help you find peace.
                        </div>
                    </div>
                    <div className="px-[160px]">
                        <div className="grid grid-cols-12 gap-4">
                            <div className="col-span-3">
                                <div className="">About Serenestream</div>
                                <div className="my-[19px]">Technical Support</div>
                                <div>Community and Support</div>
                            </div>
                            <div className="col-span-9">
                                <div id="accordionExample">
                                    <div className="rounded-none border border-l-0 border-r-0 border-t-0 border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800">
                                        <h2 className="mb-0" id="headingOne">
                                            <button
                                                className={`${activeElement === "element1" &&
                                                    `text-primary [box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:!text-primary-400 dark:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]`
                                                    } group relative flex w-full items-center rounded-none border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white`}
                                                type="button"
                                                onClick={() => handleClick("element1")}
                                                aria-expanded="true"
                                                aria-controls="collapseOne"
                                            >
                                                What is Serenestream?
                                                <span
                                                    className={`${activeElement === "element1"
                                                        ? `rotate-[-180deg] -mr-1`
                                                        : `rotate-0 fill-[#212529] dark:fill-white`
                                                        } ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out motion-reduce:transition-none dark:fill-blue-300`}
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        strokeWidth="1.5"
                                                        stroke="currentColor"
                                                        className="h-6 w-6"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                                        />
                                                    </svg>
                                                </span>
                                            </button>
                                        </h2>
                                        <TECollapse
                                            show={activeElement === "element1"}
                                            className="!mt-0 !rounded-b-none !shadow-none"
                                        >
                                            <div className={`px-5 py-10}` + activeElement == "element1" ? "" : "hidden"}>
                                                Serenestream is a mobile app designed to support emotional well-being and reduce stress. It offers features such as AI chat companions, guided meditation exercises, mood tracking, and community support to help users navigate life's ups and downs with resilience and ease.
                                            </div>
                                        </TECollapse>
                                    </div>
                                </div>
                                <div className="rounded-none border border-l-0 border-r-0 border-t-0 border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800">
                                    <h2 className="mb-0" id="headingTwo">
                                        <button
                                            className={`${activeElement === "element2" &&
                                                `text-primary [box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:!text-primary-400 dark:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]`
                                                } group relative flex w-full items-center rounded-none border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white`}
                                            type="button"
                                            onClick={() => handleClick("element2")}
                                            aria-expanded="true"
                                            aria-controls="collapseOne"
                                        >
                                            Serenestream available for all mobile devices?
                                            <span
                                                className={`${activeElement === "element2"
                                                    ? `rotate-[-180deg] -mr-1`
                                                    : `rotate-0 fill-[#212529] dark:fill-white`
                                                    } ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out motion-reduce:transition-none dark:fill-blue-300`}
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth="1.5"
                                                    stroke="currentColor"
                                                    className="h-6 w-6"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                                    />
                                                </svg>
                                            </span>
                                        </button>
                                    </h2>
                                    <TECollapse
                                        show={activeElement === "element2"}
                                        className="!mt-0 !rounded-b-none !shadow-none"
                                    >
                                        <div className={`px-5 py-10}` + activeElement == "element2" ? "" : "hidden"}>
                                            Serenestream is a mobile app designed to support emotional well-being and reduce stress. It offers features such as AI chat companions, guided meditation exercises, mood tracking, and community support to help users navigate life's ups and downs with resilience and ease.
                                        </div>
                                    </TECollapse>
                                </div>
                                <div className="rounded-none border border-b-0 border-l-0 border-r-0 border-t-0 border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800">
                                    <h2 className="accordion-header mb-0" id="headingThree">
                                        <button
                                            className={`${activeElement === "element3"
                                                ? `text-primary [box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:!text-primary-400 dark:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]`
                                                : `transition-none rounded-b-[15px]`
                                                } group relative flex w-full items-center rounded-none border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white`}
                                            type="button"
                                            onClick={() => handleClick("element3")}
                                            aria-expanded="true"
                                            aria-controls="collapseOne"
                                        >
                                            How does the AI chat companion work?
                                            <span
                                                className={`${activeElement === "element3"
                                                    ? `rotate-[-180deg] -mr-1`
                                                    : `rotate-0 fill-[#212529] dark:fill-white`
                                                    } ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out motion-reduce:transition-none dark:fill-blue-300`}
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth="1.5"
                                                    stroke="currentColor"
                                                    className="h-6 w-6"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                                    />
                                                </svg>
                                            </span>
                                        </button>
                                    </h2>

                                </div>
                                <div className="rounded-none border border-b-0 border-l-0 border-r-0 border-t-0 border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800">
                                    <h2 className="accordion-header mb-0" id="headingFour">
                                        <button
                                            className={`${activeElement === "element4"
                                                ? `text-primary [box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:!text-primary-400 dark:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]`
                                                : `transition-none rounded-b-[15px]`
                                                } group relative flex w-full items-center rounded-none border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white`}
                                            type="button"
                                            onClick={() => handleClick("element4")}
                                            aria-expanded="true"
                                            aria-controls="collapseOne"
                                        >
                                            Can I track my mood with Serenestream?
                                            <span
                                                className={`${activeElement === "element4"
                                                    ? `rotate-[-180deg] -mr-1`
                                                    : `rotate-0 fill-[#212529] dark:fill-white`
                                                    } ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out motion-reduce:transition-none dark:fill-blue-300`}
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth="1.5"
                                                    stroke="currentColor"
                                                    className="h-6 w-6"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                                    />
                                                </svg>
                                            </span>
                                        </button>
                                    </h2>

                                </div>
                                <div className="rounded-none border border-b-0 border-l-0 border-r-0 border-t-0 border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800">
                                    <h2 className="accordion-header mb-0" id="headingFive">
                                        <button
                                            className={`${activeElement === "element5"
                                                ? `text-primary [box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:!text-primary-400 dark:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]`
                                                : `transition-none rounded-b-[15px]`
                                                } group relative flex w-full items-center rounded-none border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white`}
                                            type="button"
                                            onClick={() => handleClick("element5")}
                                            aria-expanded="true"
                                            aria-controls="collapseOne"
                                        >
                                            Is there a cost to using Serenestream?
                                            <span
                                                className={`${activeElement === "element5"
                                                    ? `rotate-[-180deg] -mr-1`
                                                    : `rotate-0 fill-[#212529] dark:fill-white`
                                                    } ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out motion-reduce:transition-none dark:fill-blue-300`}
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth="1.5"
                                                    stroke="currentColor"
                                                    className="h-6 w-6"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                                    />
                                                </svg>
                                            </span>
                                        </button>
                                    </h2>

                                </div>

                            </div>
                        </div>
                    </div>


                </section>
                <section className="bg-[#030734] py-[60px] px-[160px]">
                    <div className=" flex justify-between items-center border-bottom border border-t-0 border-x-0 border-[#E13884] mb-[44px] pb-[44px] ">
                        <div>
                            <div className="text-[20px] text-[#FAFAFA] mb-[24px]">
                                Serenestream
                            </div>
                            <div className="text-[#FAFAFA] text-opacity-[0.6] w-[266px] text-opacity-[0.6]">
                                Serenestream is dedicated to helping individuals achieve greater
                                emotional well-being and inner peace
                            </div>
                        </div>
                        <div>
                            <img
                                src={Logo}
                                className="rounded-[100%] border border-white"
                                alt=""
                            />
                        </div>
                        <div>
                            <div className="text-white text-right">Product</div>
                            <div className="text-white text-right my-[24px]">About Us</div>
                            <div className="text-white text-right">Contact Us</div>
                        </div>
                    </div>
                    <div className="text-center text-[#FAFAFA] text-opacity-[0.6] text-[16px]">
                        Copyright Serenestream 2024.
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Home;
