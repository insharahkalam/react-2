const FooterSection = () => {
    return (
        <footer className="bg-dark text-light py-5">
            <div className="container">
                <div className="row justify-content-between">

                    {/* Column 1 */}
                    <div className="col-md-3 mb-4">
                        <h5 className="fw-bold">Meta Open Source</h5>
                        <p className="text-secondary mt-3">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>
                    </div>

                    {/* Column 2 */}
                    <div className="col-md-2 mb-4">
                        <h6 className="fw-bolder fs-5">Learn React</h6>
                        <ul className="list-unstyled mt-4 text-white">
                            <li className="my-2 fw-normal textSmall ">Quick Start</li>
                            <li className="my-2 fw-normal textSmall ">Installation</li>
                            <li className="my-2 fw-normal textSmall ">Describing the UI</li>
                            <li className="my-2 fw-normal textSmall ">Adding Interactivity</li>
                            <li className="my-2 fw-normal textSmall ">Managing State</li>
                            <li className="my-2 fw-normal textSmall ">Escape Hatches</li>
                        </ul>
                    </div>

                    {/* Column 3 */}
                    <div className="col-md-2 mb-4">
                        <h6 className="fw-bolder fs-5">API Reference</h6>
                        <ul className="list-unstyled mt-4 text-white">
                            <li className="my-2 fw-normal textSmall">React APIs</li>
                            <li className="my-2 fw-normal textSmall">React DOM</li>
                        </ul>
                    </div>

                    {/* Column 4 */}
                    <div className="col-md-2 mb-4">
                        <h6 className="fw-bolder fs-5">Community</h6>
                        <ul className="list-unstyled mt-4 text-white">
                            <li className="my-2 fw-normal textSmall">Code of Conduct</li>
                            <li className="my-2 fw-normal textSmall">Meet the Team</li>
                            <li className="my-2 fw-normal textSmall">Docs Contributors</li>
                            <li className="my-2 fw-normal textSmall">Acknowledgements</li>
                        </ul>
                    </div>

                    {/* Column 5 */}
                    <div className="col-md-2 mb-4">
                        <h6 className="fw-bolder fs-5">More</h6>
                        <ul className="list-unstyled mt-3 text-white">
                            <li className="my-2 fw-normal textSmall">Blog</li>
                            <li className="my-2 fw-normal textSmall">React Native</li>
                            <li className="my-2 fw-normal textSmall">Privacy</li>
                            <li className="my-2 fw-normal textSmall">Terms</li>

                        </ul>
                    </div>

                </div>
            </div>
        </footer>
    );
};

export default FooterSection;
