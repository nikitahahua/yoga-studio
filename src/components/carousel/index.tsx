import Slider from "react-slick";
import YogaPerson1 from "@/assets/yoga-person/yogaPerson1.png";
import YogaPerson2 from "@/assets/yoga-person/yogaPerson2.jpeg";
import YogaPerson3 from "@/assets/yoga-person/yogaPerson3.jpeg";

const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
    };

    return (
        <div className={'w-1/2 h-[220px] lg:h-[430px] overflow-hidden'}>
            <Slider {...settings}>
                <img src={YogaPerson1} alt={'yoga person1'} className={'max-h-[200px] lg:max-h-[400px] w-auto object-center rounded-lg'}/>
                <img src={YogaPerson2} alt={'yoga person2'} className={'max-h-[200px] lg:max-h-[400px] w-auto object-center rounded-lg'}/>
                <img src={YogaPerson3} alt={'yoga person3'} className={'max-h-[200px] lg:max-h-[400px] w-auto object-center rounded-lg'}/>
            </Slider>
        </div>
    );
};

export default Carousel;