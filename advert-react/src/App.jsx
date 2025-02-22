import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
const fadeImages = [
  {
    url: 'https://d1csarkz8obe9u.cloudfront.net/themedlandingpages/tlp_hero_shoe-advertisement-poster-12c95286ead13a541ce7adce74bb7f06.jpg?ts%20=%201706013019',
    caption: 'First Slide'
  },
  {
    url: 'https://2.imimg.com/data2/IS/TN/MY-2561564/advertisement-designing-services-500x500.jpg',
    caption: 'Second Slide'
  },
  {
    url: 'https://newspaperads.ads2publish.com/wp-content/uploads/2019/02/drools-let-the-only-thing-your-pet-bites-into-be-real-ad-delhi-times-03-02-2019.png',
    caption: 'Third Slide'
  },
];

const Slideshow = () => {
  return (
    <div className="slide-container">
      <Fade autoplay = {true} arrows = {false} infinite = {true} duration={10000}>
        {fadeImages.map((fadeImage, index) => (
          <div key={index}>
            <img style={{ width: '100%', height: '100vh' }} src={fadeImage.url} />

          </div>
        ))}
      </Fade>
    </div>
  )
}
function App() {
  return(
    <>
     <Slideshow></Slideshow>
    </>
  );

}

export default App
