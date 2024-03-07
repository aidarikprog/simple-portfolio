import image from "../../assets/images/2pic.jpg"

const ProjectHero = () => {
    return (
        <>
            <div className="text-center px-3">
                <h1 className="py-[60px]  text-[#5C62EC] font-bold text-[60px] ">
                    Projects
                </h1>
                <img
                    className="max-w-[860px] w-full m-auto"
                    src={image}
                    alt="reactImage"
                />
                <h1 className="text-center py-6 font-bold text-2xl">
                    Skills: React, Node.js, MongoDB
                </h1>
            </div>
        </>
    )
}

export default ProjectHero
