import Carousel from 'react-bootstrap/Carousel';
import { ExampleCarouselImage } from './ExampleCarouselImage';

export function Home() {
    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Carousel>
                <Carousel.Item>
                    <ExampleCarouselImage src="https://img.freepik.com/free-photo/restaurant-setting-with-wooden-chairs-tables-beautiful-view_181624-9887.jpg?t=st=1714816867~exp=1714820467~hmac=2d26a6cbb17067768cb0c806906eaec4d1082c5c37b18d7f4c3bfaaceac737ed&w=1060" text="First slide" />
                    <Carousel.Caption>
                        <h3>Our restaurant in Warsaw</h3>
                        <p>A cozy, nostalgic restaurant and wine bar in the heart of Warsaw</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <ExampleCarouselImage src="https://img.freepik.com/free-photo/drinks-glasses-new-year-eve-celebration_23-2150901946.jpg?t=st=1713539181~exp=1713542781~hmac=ff570c97b32899870d3a4ac1dc5e7736b03c845ad4aa158358509eba3137b029&w=1060" text="Second slide" />
                    <Carousel.Caption>
                        <h3>Wine bar</h3>
                        <p>Wine is paramount to the Varsovia's experience, with a 550+ bottle-deep list, and upwards of 20 by-the-glass selections gracing the menu at all times</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <ExampleCarouselImage src="https://img.freepik.com/free-photo/assortment-korean-traditional-dishes-ai-generated-image_511042-1651.jpg?t=st=1714817798~exp=1714821398~hmac=d7b58e092b0e88db81a7da0c615719f7ed2bed65b00c970969b8649fe28a663e&w=1060" text="Third slide" />
                    <Carousel.Caption>
                        <h3>Rich culinary experience</h3>
                        <p>The menu spotlights a seasonal selection of salads, vegetables, and seafood with an Asian twist</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}
