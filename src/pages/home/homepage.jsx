import { MainNav } from 'components/MainNav/MainNav';
import { Title, Wrapper } from './homepage.styled';
import image1 from '../../img/bg1.jpg';
import image2 from '../../img/bg2.jpg';
import { useEffect, useState } from 'react';

const background = [image1, image2];

export const HomePage = () => {
  const [backgroundImages, setBackgroundImages] = useState([image1, image2]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(currentIndex =>
        currentIndex === backgroundImages.length - 1 ? 0 : currentIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [backgroundImages]);

  return (
    <Wrapper image={backgroundImages[currentImageIndex]}>
      <MainNav />

      <Title>Julia delani</Title>
    </Wrapper>
  );
};
