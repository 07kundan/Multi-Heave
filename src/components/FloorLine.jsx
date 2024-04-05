import React from "react";
import Floor from "./floor";
import { motion } from "framer-motion";

function FloorLine(props) {
  let noOfFloor = [0, 1, 2, 3, 4, 5];
  console.log(props.screenSize + "helo");
  return (
    <>
      <div className="w-[30vw] bg-green-500 p-4 flex flex-col items-center gap-1 relative">
        <motion.div
          className="lift z-50 h-[53vh] w-[75%] bg-cyan-300 border-8 border-slate-900 flex justify-center absolute bottom-5 lg:w-[42%] lg:h-[75vh] lg:bottom-12"
          //   animate={{
          //     y:
          //       window.innerWidth < 1024
          //         ? -((screenSize - (screenSize * 20) / 100) * toGo) - toGo * 4
          //         : -(((screenSize * 110) / 100) * toGo) - toGo * 4, // 4 is a value of gap-1 between every floor
          //   }}
          //   transition={{
          //     delay: delay,
          //     duration: timeToReach << 1,
          //     ease: [0.45, 0, 0.55, 1],
          //   }}
          //   onAnimationComplete={() => handleButton(TurnOffButton)}
        ></motion.div>
        {noOfFloor.map((item) => (
          <Floor key={item} value={item} screenSize={props.screenSize} />
        ))}
      </div>
    </>
  );
}

export default FloorLine;
