const Hero = () => {
    return (
        <>
            <div className=" flex text-center h-[90vh] bg-[#171718]">
                <div className="container max-w-w self-center">
                    <div className="font-bold leading-[80px]">
                        <div className="text-[60px] ">
                            <p className="inline text-white">Hi, my name is </p>
                            <p className="inline text-[#5c62ec] ">Yuri</p>
                        </div>
                        <p className="text-4xl text-white">
                            a frontend developer
                        </p>
                    </div>
                    <h2 className="text-lg text-white pt-5 pb-10">
                        with passion for learning and creating.
                    </h2>
                    <button className="bg-[#5c62ec] rounded-md py-3 px-7">
                        <a
                            href="!#"
                            className="text-white leading-6"
                        >
                            Download CV
                        </a>
                    </button>
                </div>
            </div>
        </>
    )
}

export default Hero
