import Slider from "./Slider2"

function Testimonials() {
    return (
        <div className="w-full px-40 max-[720px]:px-2 flex flex-col space-y-5 items-center">
            <h1 className="font-bold text-5xl text-white max-[720px]:text-center">Beyond Expectations.</h1>
            <p className="w-80 tracking-widest text-white/70 text-center">Our revolutionary AI SEO tools have transformed our clients strategies</p>
            <Slider/>
        </div>
    )
}

export default Testimonials
