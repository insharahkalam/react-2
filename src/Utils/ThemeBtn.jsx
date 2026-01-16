
const ThemeBtn = ({ text, className }) => {
    return (
        <>
            <button className={`fw-bolder rounded-pill px-5 py-3 fs-6 ${className}`}>
                {text}
            </button>
        </>
    )
}

export default ThemeBtn