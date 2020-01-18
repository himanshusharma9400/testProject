import React, {useEffect, useRef, useState} from 'react'
import {Container} from "./backgroundImageStyles";
import {BACKGROUND_IMAGE_PATH, IMAGE_CHANGE_INTERVAL, TOTAL_IMAGES} from "../constants";

const BackgroundImageContainer = props => {
    const [imageIndex, updateImageIndex] = useState(0);
    const interval = useRef(null)
    useEffect(() => {
        interval.current = setInterval(() => {
            updateImageIndex(imageIndex + 1)
        }, IMAGE_CHANGE_INTERVAL)
        return () => {
            clearInterval(interval.current)
        };
    }, [imageIndex]);
    const imagePath = `${BACKGROUND_IMAGE_PATH}${(imageIndex % TOTAL_IMAGES)+1}.jpg`
    return (
        <Container key={imageIndex} src={imagePath}/>
    )
}

export default BackgroundImageContainer