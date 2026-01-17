import logo from "../assets/react.svg";
import ThemeBtn from "../Utils/ThemeBtn";
import FooterSection from "./FooterSection";

const Footer = () => {
    return (
        <>
            <section
                className="d-flex flex-column justify-content-center align-items-center text-center"
                style={{ minHeight: "90vh", backgroundColor: "#23272F" }}
            >
                <img
                    src={logo}
                    alt="React Logo"
                    style={{ width: "80px" }}
                    className="mb-4"
                />


                <h1 className="text-white fw-bolder w-50 text mt-2">
                    Welcome to the
                    React community

                </h1>

                <div className="d-flex gap-3 mt-4">
                    <ThemeBtn
                        text="Get Started"
                        className="bg-info border-0 text-black"
                    />
                </div>
            </section>
            <FooterSection />
        </>
    )
}

export default Footer