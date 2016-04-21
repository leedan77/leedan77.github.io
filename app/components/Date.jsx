import React from 'react';


const dayStyle = {
	paddingTop: 15,
  fontWeight: 900,
  color: 'white',
  fontSize: 40,
};
/*
const monthStyle = {
	fontWeight: 900,
	color: white,
};

const yearStyle = {
  background-color: 'rgba(60, 58, 53, 0.76)',
  font-weight: 900,
  color: 'white',
  position: 'absolute',
  top: '100%',
  width: '100%',
  padding: '4px 0',
  transform: 'rotateX(-90deg)',
  transformOorigin: '50% 0%',
};
*/
let date = new Date();

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];




const Day = () => (
	<div className="day">{date.getDate()}</div>
);

const Month = () => {
	return <div className="month">{monthNames[date.getMonth()].toUpperCase()}</div>;
}

const Year = () => {
	return <div className="year">{date.getFullYear()}</div>;
}

const D = () => {
	return (
		<div className="date--perspective">
			<div className="date">
				<Day />
				<Month />
				<Year />
			</div>
		</div>
	);
}

export default D;