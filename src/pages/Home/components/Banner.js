import '../style.css';
import { Carousel, Item, Caption } from 'react-bootstrap';
export default function TitleBanner() {
    return (
        <Carousel style={{width:"100%"}}>
            <Carousel.Item style={{width:"100%"}}>
                <img
                    className="d-block w-100"
                    src="/images/banner.jpg"
                    alt="First slide"
                    style={{width:"100%",height: "100%"}}
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="/images/banner2.jpg"
                    alt="Second slide"
                    style={{width:"100%",height: "100%"}}
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="/images/banner3.jpg"
                    alt="Third slide"
                    style={{width:"100%",height: "100%"}}
                />
            </Carousel.Item>
        </Carousel>
    );
}
