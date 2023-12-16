// Core packages
import Image from 'next/image'

// Section structure
import Section from '../../structure/section';
import Container from '../../structure/container';

// Section general blocks
import SectionTitle from '../../blocks/section.title.block'
import SectionGridBg from '../../blocks/section.grid.block'

// Section specific blocks
import BadgesBlock from '../../blocks/about.badges.block'
import CopyBlock from '../../blocks/about.copy.block'

// Section scss
import about from '../../../styles/sections/index/about.module.scss';

/**
 * Section: About
 * An overview of yourself.
 * Highlight your top level attributes and disciplines.
 * 
 * @returns {jsx} <About />
 */
export default function About() {
	return (
		<Section classProp={about.section}>	
			<Container spacing={['verticalXLrg']}>
				<SectionTitle
					title="About Me"
					//preTitle="Synopsis"
					subTitle="My goal is to go beyond the creation of simple interfaces; I specialize in crafting captivating and efficient digital experiences through research, strategy, and design. My ability to understand user needs is reflected in the creation of web and mobile interfaces that stand out and captivate."
				/>
				<section className={about.content}>
					<div className={about.image}>
						<img src="/img/nati.jpeg" alt="Natalia's photo"/>
						{/* <Image src="/img/family-photo.jpg" width={600} height={800}/> */}
					</div>
					<div className={about.copy} >
						{/* <CopyBlock 
							title="Softskills that pay the bills"
							containerClass={about.container}
							iconClass={about.icon}
							icon={[ 'fat', 'ear-listen' ]}
							copy="In addition to my design and technical expertise—I also have strong leadership, time management, and multitasking skills—honed through my experience as a business owner / managing partner, husband, and father of two. Outside of work, I enjoy staying active through sports such as hockey and snowboarding. I am confident in my ability to bring passion and value to any project."
						/> */}
						<BadgesBlock 
							title="Strategic Soft Skills" 
							containerClass={about.container}
							list={methodsSoft} 
							fullContainer="fullContainer"
							block="methodsSoft" 
							icon="puzzle"
							copy="My soft skills have been a game-changer. I'm all about keeping communication genuine, striving for collaborative environments, and adapting quickly when change and challenges come. These skills aren't just about me – they're about keeping the teams I've rolled with, on a path of continuous growth and success."
							//invertedColor="invertedColor"
							headerIcon={`${about.icon}`}
						/>
						<BadgesBlock 
							title="Leadership and Management" 
							containerClass={about.container}
							list={methods} 
							fullContainer="fullContainer"
							block="methodsH" 
							icon="people-group"
							copy="This journey has been all about boosting teams and projects – from growing strong connections in cross-functional teams to steering design projects with purpose. What I like the most: Turning ideas into reality and celebrating each win, blending creativity with strategic direction."
							//invertedColor="invertedColor"
							headerIcon={`${about.icon}`}
						/>
					</div>
				</section>	
			</Container>
		</Section>
	)
}

const methodsSoft 	= [
	{ key: 'comment', 		name: 'Effective Communication', 		type: 'fad' },
	{ key: 'people-group', 			name: 'Collaborative', 					type: 'fad' },
	{ key: 'user-gear', 			name: 'Adaptability', 					type: 'fad' },
	{ key: 'lightbulb', 			name: 'Critical Thinking', 				type: 'far' },
	{ key: 'pen-to-square', 		name: 'Creativity', 					type: 'fad' },
	{ key: 'clock-rotate-left', 		name: 'Time Management', 				type: 'fad' },
	{ key: 'hand-point-up', 		name: 'Problem Solving', 				type: 'fad' },
]
const methods 	= [
	{ key: 'person-chalkboard', 		name: 'Leadership', 			type: 'fad' },
	{ key: 'users-viewfinder', 			name: 'Team Management', 		type: 'fad' },
	{ key: 'brain', 			name: 'Strategic Planning', 	type: 'fad' },
	{ key: 'arrows-rotate', 			name: 'Agile Methodologies', 	type: 'far' },
	{ key: 'layer-plus', 		name: 'Project Management', 	type: 'fad' },
	// { key: 'solar-system', 		name: 'Operations', 			type: 'fad' },
]