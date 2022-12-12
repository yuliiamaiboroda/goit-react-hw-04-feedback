
import { useState } from "react";
import Statistics from "./Statistics/Statistics";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Notification from "./Notification/Notification";
import Section from "./Section/Section";


export const  App = () =>  {

const [good, setGood]= useState(0);
const [bad, setBad] = useState(0);
const [neutral, setNeutral]= useState(0);

const  changeFeedback = (value) =>{
  switch(value){
  case "good" :
    setGood(good=> good+1);
  break;
  case "neutral":
    setBad(neutral=> neutral+1);
  break;
  case "bad":
    setNeutral(bad=>bad+1);
  break;
  default:
    throw new Error('Not supported type');
}
}

const resetFeedback = ()=>{
  setGood(0);
  setBad(0);
  setNeutral(0)
}

const countTotalFeedback = good+ bad + neutral;
const positivePercentage = Math.trunc((good / countTotalFeedback) * 100);

const btnNames = Object.keys({ good, neutral, bad });


  return (<>
    <Section title="Please leave feedback">
      <FeedbackOptions onLeaveFeedback={changeFeedback} options={btnNames} resetFeedback={resetFeedback}/>
    </Section>
    <Section title="Statistics">
      {countTotalFeedback===0 ?
       <Notification message="There is no feedback"/> :
        <Statistics good={good} neutral={neutral} bad={bad} total={countTotalFeedback} positivePercentage={positivePercentage}/>}
    </Section>
    </>
  )
  
}
