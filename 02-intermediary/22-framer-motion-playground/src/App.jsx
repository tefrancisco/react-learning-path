import { useState } from 'react';
import { motion } from 'framer-motion'

function App() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [rotate, setRotate] = useState(0);

  return (
    <div id="demo">
      {/* Whatever element you want to animate, put motion. before its name */}
      {/* Once the x changes, the div moves in it x axis */}
      <motion.div id="box" animate={{ 
        x: x,
        y: y,
        rotate: rotate
      }} 
       transition={{
        duration: 0.3,
        // Spring is the default one, with the physics.
        type: 'spring'
      }}/>

      <div id="inputs">
        <p>
          <label htmlFor="x">X</label>
          <input
            type="number"
            id="x"
            onChange={(event) => setX(+event.target.value)}
          />
        </p>

        <p>
          <label htmlFor="y">Y</label>
          <input
            type="number"
            id="y"
            onChange={(event) => setY(+event.target.value)}
          />
        </p>

        <p>
          <label htmlFor="rotate">Rotate</label>
          <input
            type="number"
            id="rotate"
            onChange={(event) => setRotate(+event.target.value)}
          />
        </p>
      </div>
    </div>
  );
}

export default App;
