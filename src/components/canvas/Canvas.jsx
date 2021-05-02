import React, { useRef } from 'react';
import CanvasDraw from 'react-canvas-draw';
import {useAtom} from 'jotai';
import {colorAtom, radiusAtom} from '../../state';
//FontAwesome
import { faTrashAlt, faUndo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Canvas() {

     const [color] = useAtom(colorAtom)
     const [radius] = useAtom(radiusAtom)

     const firstCanvas = useRef(null);

     const  clear= () => {
       firstCanvas.current.clear();
     }
   
     const undo = () => {
       firstCanvas.current.undo();
     } 


     return(
          <div>
               
               <button onClick={clear}>
                    <FontAwesomeIcon icon={faTrashAlt} />
               </button>

               <button onClick={undo}>
                    <FontAwesomeIcon icon={faUndo} />
               </button>
               
               <CanvasDraw
               ref={firstCanvas}
               brushRadius={radius}
               lazyRadius={1}
               brushColor={color}
               catenaryColor='#3c3c3c'
               hideGrid={true}
               canvasHeight={window.innerHeight}
               canvasWidth={window.innerWidth}
               />
          </div>
     );
}

export default Canvas;