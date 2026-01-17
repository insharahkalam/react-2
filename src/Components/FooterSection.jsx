const FooterSection = () => {
    return (
        <footer className="bg-dark text-light py-5">
            <div className="container">
                <div className="row justify-content-between">

                    {/* Column 1 */}
                    <div className="col-md-3 mb-4">
                        <h5 className="fw-bold">Meta Open Source</h5>
                        <p className="text-white textSmall mt-3">
                            Copyright © Meta Platforms, Inc <br />
                            uwu?
                        </p>
                    </div>

                    {/* Column 2 */}
                    <div className="col-md-2 mb-4">
                        <h6 className="fw-bolder fs-5">Learn React</h6>
                        <ul className="list-unstyled mt-4 text-white">
                            <li className="my-2 textSmall ">Quick Start</li>
                            <li className="my-2 textSmall ">Installation</li>
                            <li className="my-2 textSmall ">Describing the UI</li>
                            <li className="my-2 textSmall ">Adding Interactivity</li>
                            <li className="my-2 textSmall ">Managing State</li>
                            <li className="my-2 textSmall ">Escape Hatches</li>
                        </ul>
                    </div>

                    {/* Column 3 */}
                    <div className="col-md-2 mb-4">
                        <h6 className="fw-bolder fs-5">API Reference</h6>
                        <ul className="list-unstyled mt-4 text-white">
                            <li className="my-2 textSmall">React APIs</li>
                            <li className="my-2 textSmall">React DOM</li>
                        </ul>
                    </div>

                    {/* Column 4 */}
                    <div className="col-md-2 mb-4">
                        <h6 className="fw-bolder fs-5">Community</h6>
                        <ul className="list-unstyled mt-4 text-white">
                            <li className="my-2 textSmall">Code of Conduct</li>
                            <li className="my-2 textSmall">Meet the Team</li>
                            <li className="my-2 textSmall">Docs Contributors</li>
                            <li className="my-2 textSmall">Acknowledgements</li>
                        </ul>
                    </div>

                    {/* Column 5 */}
                    <div className="col-md-2 mb-4">
                        <h6 className="fw-bolder fs-5">More</h6>
                        <ul className="list-unstyled mt-3 text-white">
                            <li className="my-2 textSmall">Blog</li>
                            <li className="my-2 textSmall">React Native</li>
                            <li className="my-2 textSmall">Privacy</li>
                            <li className="my-2 textSmall">Terms</li>

                        </ul>
                    </div>

                </div>
            </div>
        </footer>
    );
};

export default FooterSection;
