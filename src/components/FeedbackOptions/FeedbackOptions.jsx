
import { Div, Button } from "./FeedbackOptions.styled";
import PropTypes from 'prop-types';

export default function FeedbackOptions ({onLeaveFeedback, options, resetFeedback}){ 
      return  ( <Div>
        {options.map(el=>(
         <Button type="button" value={el} key={el} onClick={({currentTarget})=>{
            onLeaveFeedback(currentTarget.value)
            }}>{el}</Button>   
        ))}
        <Button onClick={resetFeedback}>reset</Button>
        </Div>)
    }


FeedbackOptions.propTypes= {
    options: PropTypes.array.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired
}