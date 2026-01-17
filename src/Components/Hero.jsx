import logo from "../assets/react.svg";
import ThemeBtn from "../Utils/ThemeBtn";

function Hero() {
    return (
        <>
            <section
                className="d-flex flex-column justify-content-center align-items-center text-center"
                style={{ minHeight: "90vh", backgroundColor: "#181A1F" }}
            >
                <img
                    src={logo}
                    alt="React Logo"
                    style={{ width: "100px" }}
                    className="mb-4"
                />

                <h1 className="fw-semibold text-white display-4">React</h1>

                <p className="text-white fw-medium fs-2 mt-2">
                    The library for web and native user interfaces
                </p>

                <div className="d-flex gap-3 mt-4">
                    <ThemeBtn
                        text="Learn React"
                        className="bg-info border-0 text-balck"
                    />

                    <ThemeBtn
                        text="API Reference"
                        className="bg-transparent border text-white"
                    />
                </div>
            </section>
        </>
    );
}

export default Hero;
