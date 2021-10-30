import React from 'react';
import { Carousel } from 'react-bootstrap';

const SlideShow = () => {
    return (
        <div>
            <Carousel>
                {/* first slider  */}
                <Carousel.Item>
                    <img
                        className="d-block w-100" style={{ height: '500px' }}
                        src="https://max-themes.net/demos/altair/upload/1600x1200-1.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h2>VENEZIA</h2>
                        <p>Venice is a city in northeastern Italy <br />
                            and the capital of the Veneto region. It is built on a group <br />
                            of 118 small islands that are separated by canals and linked by over 400 bridges
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                {/* second slider  */}
                <Carousel.Item>
                    <img
                        className="d-block w-100" style={{ height: '500px' }}
                        src="https://max-themes.net/demos/altair/upload/1600x1200-2.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h2>ZURICH</h2>
                        <p>Zurich is a leading multi-line insurer <br />
                            that serves its customers in global and local markets <br />
                            The most important facts about Zurich's history, politics and famous people at a glance</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default SlideShow;