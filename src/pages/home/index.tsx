import {useState, useEffect} from "react";
import Carousel from "@/components/carousel";
import { ElemItem, YogaService } from "@/service/yoga-service";

const Home = () => {
    const [data, setData] = useState<ElemItem[]>([]);
    const yogaService = new YogaService();

    useEffect(() => {
        const fetchYogaElements = async () => {
            try {
                const elements = await yogaService.getAllElements();
                setData(elements)
            } catch (error) {
                console.error('Error fetching yoga elements:', error);
            }
        };
        fetchYogaElements();
    })

    return (
        <div className={'flex flex-col items-center'}>
            <Carousel/>
            <div className={'bg-quaternary rounded-md p-5 mt-5 w-[75%] flex flex-col items-center'}>
                <h1 className={'font-semibold'}>Групові:</h1>
                {
                    data.map((item, index) => <p key={index}>{item?.time} ({item?.name})</p>)
                }
                <p>Індивідуальні: Йога для початківців, Медитація, Спеціальні потреби.</p>
            </div>
        </div>
    );
};

export default Home;