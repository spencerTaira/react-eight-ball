import './EightBall.css';
import React, { useState } from "react";
// const _ = require('lodash');
import _ from 'lodash';

const ANSWERS = [
  { msg: "It is certain.", color: "green" },
  { msg: "It is decidedly so.", color: "green" },
  { msg: "Without a doubt.", color: "green" },
  { msg: "Yes - definitely.", color: "green" },
  { msg: "You may rely on it.", color: "green" },
  { msg: "As I see it, yes.", color: "green" },
  { msg: "Most likely.", color: "green" },
  { msg: "Outlook good.", color: "green" },
  { msg: "Yes.", color: "green" },
  { msg: "Signs point to yes.", color: "goldenrod" },
  { msg: "Reply hazy, try again.", color: "goldenrod" },
  { msg: "Ask again later.", color: "goldenrod" },
  { msg: "Better not tell you now.", color: "goldenrod" },
  { msg: "Cannot predict now.", color: "goldenrod" },
  { msg: "Concentrate and ask again.", color: "goldenrod" },
  { msg: "Don't count on it.", color: "red" },
  { msg: "My reply is no.", color: "red" },
  { msg: "My sources say no.", color: "red" },
  { msg: "Outlook not so good.", color: "red" },
  { msg: "Very doubtful.", color: "red" },
];

/**
 * Props:
 *  - answers (array of objects)
 *
 * State:
 *  - color (string)
 *  - msg (string)
 *
 *  App -> EightBall
 */



function EightBall({answers=ANSWERS}) {
  //Can we only have one state?
  const [color, setColor] = useState('black');
  const [msg, setMsg] = useState('Think of a Question');
  const myStyles = {
    color: 'white', //Only inline style when things are dynamic
    backgroundColor: color,
  }
  console.log('EightBall', color, msg);

  //TODO: add docstring
  function clickEightBall(e) {
    const answer = _.sample(answers);
    setColor(answer.color);
    setMsg(answer.msg);
  }

  return (
    <div className="EightBall" style={myStyles} onClick={clickEightBall}>
      {msg}
    </div>
  );
}

export default EightBall;