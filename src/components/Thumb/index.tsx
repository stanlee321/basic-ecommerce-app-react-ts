import React from "react";
import { Link } from 'react-router-dom';

// Styles
import { Image } from './Thumb.syles'

// Interface
interface Props {
    image: string,
    movieId?: number,
    clickable: boolean,
    children?: JSX.Element[]
    alt: string,
}

const Thumb = ({image, movieId, clickable , alt}: Props) => (
    <div>
        {
            clickable? (
                <Link to={`/movie/${movieId}`}>
                    <Image src={image} alt={alt} ></Image>
                </Link>
            ): (
                <Image src={image} alt={alt} ></Image>
            )

        }
    </div>
)

export default Thumb;