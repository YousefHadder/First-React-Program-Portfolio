import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const skillList = [
	{
		skill: 'HTML',
		backgroundColor: 'green',
	},
	{ skill: 'CSS', backgroundColor: 'blue' },
	{
		skill: 'JavaScript',
		backgroundColor: 'yellow',
	},
	{ skill: 'React', backgroundColor: 'red' },
	{
		skill: 'NodeJs',
		backgroundColor: 'green',
	},
	{ skill: 'Java', backgroundColor: 'blue' },
	{
		skill: 'Python',
		backgroundColor: 'yellow',
	},
	{ skill: 'C++', backgroundColor: 'red' },
];

function App() {
	return (
		<div className="card">
			<Avatar />
			<div className="data">
				<Intro />
				{}
				<Skilllist skills={skillList} />
			</div>
		</div>
	);
}

function Avatar() {
	return <img className="avatar" src="myPhoto.jpg" alt="Yousef Hadder" />;
}

function Intro() {
	return (
		<div className="intro">
			<h1>Yousef Y Hadder </h1>
			<p>
				Software Engineer with 3 years of experince in the field. I love
				programming, playing games, and Cooking.
			</p>
		</div>
	);
}
function Skilllist(props) {
	const skillList = props.skills.slice();

	return (
		<div className="skill-list">
			{skillList.map((item) => {
				return (
					<Skill
						skill={item.skill}
						backgroundColor={item.backgroundColor}
						emoji={item.emoji}
					/>
				);
			})}
		</div>
	);
}

function Skill(props) {
	return (
		<div
			className="skill"
			style={{ backgroundColor: props.backgroundColor }}>
			{props.skill} {props.emoji}
		</div>
	);
}

export default App;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
