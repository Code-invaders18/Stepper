import TimelineTick from "./assets/TimelineTick.svg"
import "./App.css";
import { useState } from "react";

function Stepper() {
    const [currentState, setCurrentState] = useState(1)
    const [totalState, setTotalState] = useState([
        {
            name: "",
            index: 0,
            description: ""
        },
        {
            name: "",
            index: 1,
            description: ""
        }, {
            name: "",
            index: 2,
            description: ""
        }, {
            name: "",
            index: 3,
            description: ""
        }, {
            name: "",
            index: 4,
            description: ""
        }
    ])
    return (
        <div class="c-stepper">

            {totalState.map(state => {
                return <div className={`${state.index >= currentState ? 'c-stepper__item' : 'c-stepper__item__selected'}`}>
                    <div className={`${state.index > currentState ? 'c-stepper__item__content' : 'c-stepper__item__content__selected'}`}>
                        {state.index == currentState && state.index + 1}
                        {state.index < currentState && <ion-icon name="checkmark"></ion-icon>}
                    </div>
                </div>
            })}
            {/* <div class="c-stepper__item__selected">
      </div> */}
        </div>
    );
}

export default Stepper;
