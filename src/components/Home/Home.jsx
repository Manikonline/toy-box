import UseTitle from "../../Hooks/UseTitle";
import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import StartSelling from "../StartSelling/StartSelling";
import Tabs from "../Tabs/Tabs";

import WhyYouSell from "../WhyYouSell/WhyYouSell";


const Home = () => {
    UseTitle('home')
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <Tabs></Tabs>
            <WhyYouSell></WhyYouSell>
            <StartSelling></StartSelling>
            
        </div>
    );
};

export default Home;

// Exploring the Joy of Car Toys
// ""