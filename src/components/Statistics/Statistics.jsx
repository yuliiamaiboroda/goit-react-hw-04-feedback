import React, {Component} from "react";
import { Ul, Li, Span } from "./Statistics.styled";
import PropTypes from 'prop-types';



export default function Statistics({good, neutral, bad, total, positivePercentage}){
     return( <>
        <Ul>
            <Li>Good: <Span>{good}</Span></Li>
            <Li>Bad: <Span>{bad}</Span></Li>
            <Li>Neutral: <Span>{neutral}</Span></Li>
            <Li>Total: <Span>{total}</Span></Li>
            <Li>Positive: <Span>{positivePercentage}%</Span></Li>
        </Ul>
        </>)
};

Statistics.propTypes={
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
}