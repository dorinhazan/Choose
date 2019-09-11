import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { observer } from 'mobx-react'


var scores, roundScore, activePlayer, gamePlaying;
@observer
class App extends Component {

  
  constructor() {
    super()
    this.state = {
      i: 0,
      arr: [
        { top: 130, left: 130 },
        { top: 130, left: 315 },
        { top: 130, left: 500 },
        { top: 130, left: 685 },
        { top: 130, left: 870 },
        { top: 130, left: 1055 },
        { top: 130, left: 1240 },

        { top: 215, left: 1240 },
        { top: 295, left: 1240 },
        { top: 380, left: 1240 },
        { top: 465, left: 1240 },
        { top: 550, left: 1240 },

        { top: 630, left: 1240 },
        { top: 630, left: 1055},
        { top: 630, left: 870 },
        { top: 630, left: 685 },
        { top: 630, left: 500 },
        { top: 630, left: 315 },
        { top: 630, left: 130 },

        { top: 550, left: 130 },
        { top: 465, left: 130 },
        { top: 380, left: 130 },
        { top: 295, left: 130 },
        { top: 215, left: 130 },

      ]
    }
  }
  
  button=()=>{
    this.init()
        // 1. Random number
        let dice = Math.floor(Math.random() * 6) + 1;
        console.log(dice)
    
        // 2. Display the result
        let diceDOM = document.querySelector(".dice");
        diceDOM.style.display = "block";
        diceDOM.src = require("/elevation_bootcamp/projects/ChooseProj/choose/src/imagesCube/dice-" + dice + ".png");

    
        // 3. Update the round score IF the rolled number was NOT a 1
        if (dice !== 1) {
          // Add score
          roundScore += dice;
          document.getElementById(
            "current-" + activePlayer
          ).textContent = roundScore;
        } 
      }
    
      changePos = () => {
        let x= Math.floor(Math.random()*5)+1
        if (this.state.i + x > 23) {
          this.setState({ i: this.state.i+x -23 })
        }
        else {
          this.setState({ i: this.state.i + x })
        }
      }
  
   init=()=> {
    // Reseting score vars
    scores = 0;
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;
  
    document.getElementsByClassName(".dice")
    document.getElementById("current-0")
    // document.querySelector(".dice").style.display = "none";
    // document.getElementById("current-0").textContent = "0";
  
  
  }


  render() {
        let cube = require("/elevation_bootcamp/projects/ChooseProj/choose/src/imagesCube/dice-5.png")
    const arr = this.state.arr
    let i = this.state.i
    return (
      <div>
  
      <div className="board">
        <div className="www red"> <div className="xxx">a</div> </div>
        <div className="www red"> <div className="xxx">a</div> </div>
        <div className="www green"> <div className="xxx">a</div> </div>
        <div className="www yellow"> <div className="xxx">a</div> </div>
        <div className="www pink"> <div className="xxx">a</div> </div>
        <div className="www orange"> <div className="xxx">a</div> </div>
        <div className="www blue"> <div className="xxx">a</div> </div>
        <div className="www blue"> <div className="xxx">a</div> </div>
        <div className=""> <div className="xxx"></div> </div>
        <div className=""> <div className="xxx"></div> </div>
        <div className=""> <div className="xxx"></div> </div>
        <div className=""> <div className="xxx"></div> </div>
        <div className=""> <div className="xxx"></div> </div>
        <div className="www red"> <div className="xxx">a</div> </div>
        <div className="www orange"> <div className="xxx">a</div> </div>
        <div className=""> <div className="xxx"></div> </div>
        <div className=""> <div className="xxx"></div> </div>
        <div className=""> <div className="xxx"></div> </div>
        <div className=""> <div className="xxx"></div> </div>
        <div className=""> <div className="xxx"></div> </div>
        <div className="www green"> <div className="xxx">a</div> </div>
        <div className="www green"> <div className="xxx">a</div> </div>
        <div className=""> <div className="xxx"></div> </div>
        <div className=""> <div className="xxx"></div> </div>
        <div className=""> <div className="xxx"></div> </div>
        <div className=""> <div className="xxx"></div> </div>
        <div className=""> <div className="xxx"></div> </div>
        <div className="www green"> <div className="xxx">a</div> </div>
        <div className="www green"> <div className="xxx">a</div> </div>
        <div className=""> <div className="xxx"></div> </div>
        <div className="" onClick={this.changePos}> <div className="xxx" onClick={this.changePos}></div> change pos </div>
        <div className=""> <div className="xxx"></div> </div>
        <div className=""> <div className="xxx"></div> </div>
        <div className=""> <div className="xxx"></div> </div>
        <div className="www pink"> <div className="xxx">a</div> </div>
        <div className="www blue"> <div className="xxx">a</div> </div>
        <div className=""> <div className="xxx"></div> </div>
        <div className=""> <div className="xxx"></div> </div>
        <div className=""> <div className="xxx"></div> </div>
        <div className=""> <div className="xxx"></div> </div>
        <div className=""> <div className="xxx"></div> </div>
        <div className="www orange"> <div className="xxx">a</div> </div>
        <div className="www green"> <div className="xxx">a</div> </div>
        <div className="www orange"> <div className="xxx">a</div> </div>
        <div className="www pink"> <div className="xxx">a</div> </div>
        <div className="www yellow"> <div className="xxx">a</div> </div>
        <div className="www blue "> <div className="xxx">a</div> </div>
        <div className="www red"> <div className="xxx">a</div> </div>
        <div className="www red"> <div className="xxx">a</div> </div>


        <div style={{ position: "absolute", top: arr[i].top, left: arr[i].left }}> Huaman </div>
        {/* <div id="human">  XXX </div> */}
      </div>
      <div class="wrapper clearfix">
      <div class="player-current-score" id="current-0">11</div>
        </div>

  <div class="player-1-panel"></div>
    {/* <button  onClick={this.button}className="btn-roll"><i class="ion-ios-loop"></i>Roll dice</button>  */}
  <img  onClick={this.button} className="btn-roll" src={cube} alt="Dice" className="dice" ></img>
      </div>
          )
        }
      }

export default App

