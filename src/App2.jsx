                 import React, { useRef, useState } from 'react';

                 const App2 = () => {
                   const data = Array.from({ length: 20 }, (_, i) => ({
                     id: i.toString(),
                     text: 'Lorem ipsum dolor sit amet...',
                     imageUri: `https://random.imagecdn.app/1920/1080?id=${i}`,
                   }));

                   const [scrollPosition, setScrollPosition] = useState(0);

                   const handleScroll = (event) => {
                     setScrollPosition(event.target.scrollLeft);
                   };

                   const Item = ({ item, index }) => {
                     const translateX = ((scrollPosition - (index - 1) * window.innerWidth / 2) / (window.innerWidth / 2)) * 100;

                     const imageTranslate = {
                       transform: `translateX(${translateX}%)`
                     };

                     return (
                       <div style={styles.scrollContent}>
                         <img src={item.imageUri} style={{ ...styles.image, ...imageTranslate }} alt={item.text} />
                         <p style={styles.text}>{item.text}</p>
                       </div>
                     );
                   };

                   return (
                     <div style={styles.container} onScroll={handleScroll}>
                       {data.map((item, index) => (
                         <Item key={item.id} item={item} index={index} />
                       ))}
                     </div>
                   );
                 };

                 const styles = {
                    container: {
                      height: '100vh',
                      width: '100vw',
                      overflowX: 'scroll',
                      overflowY: 'hidden',
                      whiteSpace: 'nowrap',
                    },
                    scrollContent: {
                      height: '100%',
                      width: '50vw',
                      display: 'inline-block',
                      position: 'relative',
                      overflow: 'hidden',
                    },
                    image: {
                      width: '100%',
                      height: 'auto',
                    },
                    text: {
                      color: 'black',
                      fontSize: 16,
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      textAlign: 'center',
                      backgroundColor: 'rgba(255, 255, 255, 0.5)', // Semi-transparent background for readability
                      padding: '8px',
                      margin: 0,
                    },
                 };

                 export default App2;
