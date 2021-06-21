import React from "react";

// Styles

import { Image } from './Thumb.syles'

// Interface
interface Props {
    image: string,
    movieId: number,
    clickable: boolean,
    children: JSX.Element[]
}

const Thumb = ({image, movieId, clickable}: Props) => (
    <div>
        <Image src={image} alt='movie-thumb' ></Image>
    </div>
)

export default Thumb;