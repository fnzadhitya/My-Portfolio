import "./ExperienceStyle.css";

import React from 'react'
import { FaChevronCircleRight } from 'react-icons/fa';

const Experience = () => {
	return <div className="experience">
		<h2>Kemampuan Saya</h2>
		<div className="container experience_container">
			<div className="experience_frontend">
				<h3>Frontend Development</h3>
				<div className="experience_content">
					<article className="experience_details">
						<FaChevronCircleRight style={{color: 'rgb(248, 217, 15)'}} />
						<div>
							<h4>HTML</h4>
							<small className="text-light">Berpengalaman</small>
						</div>
					</article>
					<article className="experience_details">
						<FaChevronCircleRight style={{color: 'rgb(248, 217, 15)'}} />
						<div>
							<h4>React</h4>
							<small className="text-light">Berpengalaman</small>
						</div>
					</article>
					<article className="experience_details">
						<FaChevronCircleRight style={{color: 'rgb(248, 217, 15)'}} />
						<div>
							<h4>CSS</h4>
							<small className="text-light">Berpengalaman</small>
						</div>
					</article>
					<article className="experience_details">
						<FaChevronCircleRight style={{color: 'rgb(248, 217, 15)'}} />
						<div>
							<h4>Bootstrap</h4>
							<small className="text-light">Menengah</small>
						</div>
					</article>
					<article className="experience_details">
						<FaChevronCircleRight style={{color: 'rgb(248, 217, 15)'}} />
						<div>
							<h4>JavaScript</h4>
							<small className="text-light">Menengah</small>
						</div>
					</article>
				</div>
			</div>

			<div className="experience_backend">
			<h3>Backend Development</h3>
				<div className="experience_content">
					<article className="experience_details">
						<FaChevronCircleRight style={{color: 'rgb(248, 217, 15)'}} />
						<div>
							<h4>Node JS</h4>
							<small className="text-light">Berpengalaman</small>
						</div>
					</article>
					<article className="experience_details">
						<FaChevronCircleRight style={{color: 'rgb(248, 217, 15)'}} />
						<div>
							<h4>MongoDB</h4>
							<small className="text-light">Berpengalaman</small>
						</div>
					</article>
					<article className="experience_details">
						<FaChevronCircleRight style={{color: 'rgb(248, 217, 15)'}} />
						<div>
							<h4>PHP</h4>
							<small className="text-light">Menengah</small>
						</div>
					</article>
					<article className="experience_details">
						<FaChevronCircleRight style={{color: 'rgb(248, 217, 15)'}} />
						<div>
							<h4>MySQL</h4>
							<small className="text-light">Menengah</small>
						</div>
					</article>
					<article className="experience_details">
						<FaChevronCircleRight style={{color: 'rgb(248, 217, 15)'}} />
						<div>
							<h4>Python</h4>
							<small className="text-light">Menengah</small>
						</div>
					</article>
				</div>
			</div>

		</div>
	</div>
	
}
  export default Experience;
