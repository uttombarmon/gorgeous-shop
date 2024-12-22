
const Banner = () => {
    return (
        <div
            className="min-h-screen bg-cover relative bg-center"
            style={{
                backgroundImage: "url(https://i.ibb.co.com/D7KSXHB/collection-beauty-products-with-copy-space.jpg)",
            }}>
            <div className="bg-gradient-to-r from-cyan-400 to-[#00000026] min-h-screen w-full relative"></div>
            <div className="h-full w-full flex absolute top-0 items-center">
                <div className="max-w-md ml-7 lg:ml-10 xl:ml-12">
                    <h1 className="mb-5 lg:mb-10 xl:mb-16 lg:text-5xl xl:text-6xl font-bold"> Elevate Your Beauty Ritual</h1>
                    <p className="mb-5 font-semibold">
                        Step into a world of premium beauty products at GORGEOUS SHOP. Whether you&apos;re treating your skin to a nourishing mask or perfecting your makeup look, our products will elevate your everyday beauty routine. Discover the power of self-care with us today!
                    </p>
                    <button className="btn bg-slate-800 text-white border-0">Get Started</button>
                </div>
            </div>
        </div>
    )
}

export default Banner
