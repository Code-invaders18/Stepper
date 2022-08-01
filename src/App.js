import TimelineTick from "./assets/TimelineTick.svg"
import "./App.css";
import { useState } from "react";

function Stepper() {
    const [currentState, setCurrentState] = useState(0)
    const [totalState, setTotalState] = useState([
        {
            name:"",
            index:0,
            description:""
        },
        {
            name:"",
            index:0,
            description:""
        },{
            name:"",
            index:0,
            description:""
        },{
            name:"",
            index:0,
            description:""
        },{
            name:"",
            index:0,
            description:""
        }
    ])
  return (
    <div class="c-stepper">

        {totalState.map(state=>{
            return <div  class="c-stepper__item">
                <div className="c-stepper__item__content">
                    1
                </div>
            </div>
        })}
      {/* <div class="c-stepper__item__selected">
      </div> */}
    </div>
  );
}

export default Stepper;
