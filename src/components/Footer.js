import { footer } from "../constants/costants"

const Footer = () => {
    return (
        <>
            <div className="bg-[#171718]">
                <div className="container max-w-w py-[30px]">
                    <div className="flex justify-center gap-x-7">
                        {footer.map((item) => (
                            <a
                                key={item.id}
                                href="!#"
                            >
                                <img
                                    src={item.link}
                                    alt="img"
                                />
                            </a>
                        ))}
                    </div>
                    <h3 className="text-white text-center pt-7">
                        © 2022 frontend-dev.com
                    </h3>
                </div>
            </div>
        </>
    )
}

export default Footer
