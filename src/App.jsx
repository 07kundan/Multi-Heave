import React, { useEffect, useTransition } from "react";
import { useState } from "react";
import Floor from "./components/floor";
import ButtonsBoards from "./components/ButtonsBoards";
import FloorLine from "./components/FloorLine";
let previouslyVisitedFloor = 0;
let TurnOffButton;

function Layout() {
  // state for button
  // const [buttonOn, setButtonOn] = useState([
  //   false,
  //   false,
  //   false,
  //   false,
  //   false,
  //   false,
  // ]);
  // // It'll remember the state of indicator, is it active or not
  // const [floorIndicators, setFloorIndicators] = useState([
  //   false,
  //   false,
  //   false,
  //   false,
  //   false,
  //   false,
  // ]);
  // //-----------------------------------------------------------

  // const [toVisit, setToVisit] = useState([]);
  // const [toGo, setToGo] = useState(0);
  // const [timeToReach, setTimeToReach] = useState(0);
  // const [delay, setDelay] = useState(0.3);
  const [screenSize, setScreenSize] = useState(window.innerHeight);
  // console.log(screenSize);
  // const handleFloorClick = (index) => {
  //   // updating array of floor indicator
  //   const newIndicators = [...floorIndicators];
  //   newIndicators[index] = !newIndicators[index]; // by this we can on and off indicator
  //   // ---------------------------------
  //   // adding clicked floor to toVisit array
  //   const addingToVisit = [...toVisit];
  //   addingToVisit.push(index); // pushing floor no to visit
  //   // ---------------------------------

  //   // updating buttonOn array
  //   const newButtonOn = [...buttonOn];
  //   newButtonOn[index] = !newButtonOn[index];
  //   // ---------------------------------

  //   if (index != previouslyVisitedFloor) {
  //     setButtonOn(newButtonOn);
  //     setToVisit(addingToVisit);
  //     setFloorIndicators(newIndicators);
  //   }
  //   // console.log(toVisit);
  // };
  // // -----------------------------------------------------------

  // const handleButton = (index) => {
  //   const newButtonOn = [...buttonOn];
  //   newButtonOn[index] = false;
  //   setButtonOn(newButtonOn);
  //   const newIndicators = [...floorIndicators];
  //   newIndicators[index] = !newIndicators[index]; // by this we can on and off indicator
  //   setFloorIndicators(newIndicators);
  //   setToVisit((prev) => prev.slice(1));
  //   toVisit[1] ? setDelay(2) : setDelay(0.3);
  //   // console.log(toVisit.length);
  // };

  // // setting animation to visit active floor

  // useEffect(() => {
  //   if (toVisit.length > 0) {
  //     if (!previouslyVisitedFloor) {
  //       previouslyVisitedFloor = 0;
  //     }
  //     setToGo(toVisit[0]);
  //     setTimeToReach(Math.abs(toVisit[0] - previouslyVisitedFloor));
  //     previouslyVisitedFloor = toVisit[0];
  //     TurnOffButton = toVisit[0];
  //   }
  // }, [toVisit]);

  return (
    <>
      <div className="flex gap-1">
        {/* <div className="left w-[73vw] bg-cyan-900 flex flex-col gap-1 items-center p-2 border-2 border-black relative lg:w-[50vw] lg:p-8"> */}
        <FloorLine screenSize={screenSize} />
        {/* </div> */}

        <FloorLine screenSize={screenSize} />

        <FloorLine screenSize={screenSize} />

        {/* <div className="w-[27vw] h-screen flex items-center justify-center fixed right-0 lg:w-[50vw]">
          <ButtonsBoards
            setFloor={(index) => handleFloorClick(index)}
            buttonOn={buttonOn}
          />
        </div> */}
      </div>
    </>
  );
}

export default Layout;
