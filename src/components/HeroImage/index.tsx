import React from "react";

// Styles

import { Wrapper, Content, Text } from "./HeroImage.styles";

interface Props {
  image: string;
  text: string;
  title: string;
}

const HeroImage = ({ image, text, title }: Props) => (
  <Wrapper image={image}>
    <Content>
      <Text>
        <h1>{title}</h1>
        <p>{text}</p>
      </Text>
    </Content>
  </Wrapper>
);

export default HeroImage;
