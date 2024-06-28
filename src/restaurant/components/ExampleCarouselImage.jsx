import React from 'react';
import Image from 'react-bootstrap/Image';

export const ExampleCarouselImage = ({ src,text }) => {
    return (
        <div>
            <Image
                src={src} // Use the src prop passed from the parent component
                alt={text} 
                fluid
            />
        </div>
    );
};

 