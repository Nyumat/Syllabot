import { useEffect, useRef } from 'react';
import Typewriter from 'typewriter-effect/dist/core'; 

function TypewriterComponent() {
      const elementRef = useRef(null);
      let typewriter: { stop: () => void; };

      useEffect(() => {
            typewriter = new Typewriter(elementRef.current, {
                  strings: shuffle([
                    '<strong>Finding 9 AM due dates...</strong>', 
                    '<strong>Skimming academic integrity policy...</strong>', 
                    '<strong>Searching Rate My Professor...</strong>', 
                    '<strong>Optimizing Schedule...</strong>',
                    '<strong>Ignoring AI policy...</strong>',
                ]),
                  autoStart: true,
                  loop: true,
                  delay: 50,
            });

            return () => {
                  if (typewriter) {
                        typewriter.stop();
                  } else {
                        return;
                  }
            };
      }, []);

      return (
            <div className="font-light text-2xl mt-5 mb-24">
                  <span ref={elementRef}></span>
            </div>
      );
}

function shuffle(array: any[]) {
      let currentIndex = array.length,  randomIndex;
      
      // While there remain elements to shuffle.
      while (currentIndex > 0) {
      
            // Pick a remaining element.
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
      
            // And swap it with the current element.
            [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
      }
      
      return array;
      }         

export default TypewriterComponent;
