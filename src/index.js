import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const skillList = [
	{
		skill: 'HTML',
		backgroundColor: 'green',
		level: 'beginner',
	},
	{ skill: 'CSS', backgroundColor: 'blue', level: 'beginner' },
	{ skill: 'React', backgroundColor: 'red', level: 'beginner' },
	{
		skill: 'JavaScript',
		backgroundColor: 'yellow',
		level: 'Intermediate',
	},
	{
		skill: 'NodeJs',
		backgroundColor: 'green',
		level: 'Intermediate',
	},
	{ skill: 'Java', backgroundColor: 'blue', level: 'Advanced' },
	{
		skill: 'Python',
		backgroundColor: 'yellow',
		level: 'Advanced',
	},
	{ skill: 'C++', backgroundColor: 'red', level: 'Advanced' },
];

function App() {
	return (
		<div className="card">
			<Avatar />
			<div className="data">
				<Intro />
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
						level={item.level}
					/>
				);
			})}
		</div>
	);
}

function Skill({ skill, backgroundColor, level }) {
	return (
		<div className="skill" style={{ backgroundColor }}>
			<span>{skill}</span>
			<span className="level">
				{level === 'beginner'
					? '👶'
					: level === 'Intermediate'
					? '👍'
					: '💪'}
			</span>
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
