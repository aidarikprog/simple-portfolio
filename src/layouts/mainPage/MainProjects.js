import { projects } from "../../constants/costants"

const Projects = () => {
    return (
        <>
            <div className="container max-w-w py-[70px]">
                <h1 className="pb-[60px] text-center text-[#5C62EC] font-bold text-[60px] ">
                    Projests
                </h1>
                <div className="grid grid-cols-gridCol gap-7 justify-center">
                    {projects.map((item) => (
                        <div
                            key={item.id}
                            className="rounded-xl shadow-xl "
                        >
                            <div className=" ">
                                <img
                                    className="w-[370px] h-[278px] rounded-md"
                                    src={item.img}
                                    alt="img"
                                />
                            </div>
                            <p className="py-4 pl-5 font-bold text-2xl">
                                {item.link}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Projects
