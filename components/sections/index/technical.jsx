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
import about from '../../../styles/sections/index/about.module.scss'

/**
 * Section: Technical
 * Highlight your technical skills with a short blurb about you,
 * Then display the programs you are proficient with and the technologies you use if applicable.
 * 
 * @returns {jsx} <Technical />
 */
export default function Technical() {
	return (
		<Section classProp={`${about.section} borderBottom`}>	
			<Container spacing={['verticalXXXLrg']}>
				<SectionTitle
					id="technical-hardskills"
					title="Technical"
					preTitle="Hardskills"
					// subTitle="As a creative technologist, I craft intuitive digital experiences using a diverse set of tools and languages."
				/>
				<section className={`${about.content} ${about.container} ${about.technical}`}>
					<div className={`${about.copy} ${about.technical}`}>
						<CopyBlock 
							title="User Research"
							icon={[ 'fat', 'magnifying-glass' ]}
							copy="My knowledge in user research extends to planning and conducting user interviews, along with creating and analyzing surveys or interviews to glean valuable insights into user behaviors and preferences. This foundational understanding guides the entire design process, ensuring that solutions align closely with the actual needs and expectations of the user base."
							iconClass={about.icon}
							containerClass={`${about.container} ${about.technical}`}
						/>
						<CopyBlock 
							title="Information Architecture"
							icon={[ 'fat', 'chart-network' ]}
							copy="I specialize in developing clear and intuitive structures that facilitate seamless user interactions. This involves creating comprehensive sitemaps and flow diagrams, ensuring that users can easily navigate through the product or platform, enhancing overall usability."
							iconClass={about.icon}
							containerClass={`${about.container} ${about.technical}`}
						/>
						<CopyBlock 
							title="UX Writing"
							icon={[ 'fat', 'file-signature' ]}
							copy="Writing for UX design is a key aspect of my skill set. I focus on creating clear, concise, and engaging content that guides users through their journey. From microcopy to user interface text, I pay attention to language and tone to enhance the overall user experience and facilitate effective communication."
							iconClass={about.icon}
							containerClass={`${about.container} ${about.technical}`}
						/>
						<CopyBlock 
							title="Wireframing"
							icon={[ 'fat', 'laptop' ]}
							copy="My wireframes are iteratively refined based on feedback and usability testing to achieve optimal user interaction. My prototyping capabilities extend to both low and high fidelity, using tools like Figma to build interactive prototypes that facilitate effective design communication."
							iconClass={about.icon}
							containerClass={`${about.container} ${about.technical}`}
						/>
						<CopyBlock 
							title="Userflows"
							icon={[ 'fat', 'network-wired' ]}
							copy="My approach to user flows involves the creation of comprehensive diagrams that visually represent the steps a user takes to accomplish specific tasks or goals. By mapping out these interactions, I can optimize the overall user experience, making it more efficient and enjoyable."
							iconClass={about.icon}
							containerClass={`${about.container} ${about.technical}`}
						/>
						<BadgesBlock 
							title="Software I work with" 
							copy="With over 2 years of experience crafting user interfaces, I have engaged with various software applications, gaining insights into the intricate design elements that define the user interface landscape."
							list={software}
							block="software" 
							fullContainer="fullContainer"
							icon="grid-2-plus"
							containerClass={`${about.container} ${about.technical}`}
							headerIcon={about.icon} 
						/>
						{/* <BadgesBlock 
							title="Technologies I love to build with" 
							copy="I deeply enjoy solving problems through code. From the front end all the way to the back end and the APIs in-between. No project is too challenging for me."
							list={tech} 
							block="tech"
							fullContainer="fullContainer" 
							icon="laptop-code"
							containerClass={about.container}
							headerIcon={about.icon} 
						/>							 */}
					</div>
					{/* <div className={about.copy}>
						<BadgesBlock 
							title="Software I love to work with" 
							copy="With over 2 years of experience crafting user interfaces, I have engaged with various software applications, gaining insights into the intricate design elements that define the user interface landscape."
							list={software}
							block="software" 
							fullContainer="fullContainer"
							icon="grid-2-plus"
							containerClass={about.container}
							headerIcon={about.icon} 
						/>
					</div> */}
					{/* <div className={`${about.image} ${about.technicalSvg}`}>
						<Image src="/img/dataism-24.svg" width={477} height={1111} alt="Data Strings 01 by Colorpong: https://ywft.us/2177b695b" />
					</div> */}
				</section>	
			</Container>
			{/* <SectionGridBg gridSize={4}/> */}
		</Section>
	)
}

const software = [
	{ key: 'illustrator', 				name: 'Illustrator', 			type: 'devicon' },
	{ key: 'figma', 					name: 'Figma', 					type: 'devicon' },
	{ key: 'workshop', 					name: 'Optimal Workshop', 		type: 'devicon' },
	{ key: 'whimsical', 				name: 'Whimsical', 				type: 'devicon' },
	{ key: 'miro', 						name: 'Miro', 					type: 'devicon' },
	{ key: '/img/icons/wave.jpeg', 		name: 'WAVE', 					type: 'image' },
	{ key: 'color', 					name: 'Color Contrast Checker', type: 'devicon' },
	{ key: 'jira', 						name: 'Jira', 					type: 'devicon' },
]

const softwareOriginal = [
	{ key: 'photoshop', 	name: 'Photoshop', 			type: 'devicon' },
	{ key: 'illustrator', 	name: 'Illustrator', 		type: 'devicon' },
	{ key: 'figma', 		name: 'Figma', 				type: 'devicon' },
	{ key: 'vscode', 		name: 'VSCode', 			type: 'devicon' },
	{ key: 'mailbox', 		name: 'Postman', 			type: 'fas' },
	{ key: 'computer-mouse',name: 'Click Up', 			type: 'fas' },
	{ key: 'list-music',	name: 'Ableton', 			type: 'fas' },
	{ key: 'aftereffects',	name: 'After Effects', 		type: 'devicon' },
	{ key: 'premierepro',	name: 'Premiere Pro', 		type: 'devicon' },
]

const tech	= [
	{ key: 'javascript', 	name: 'JavaScript', 		type: 'devicon' },
	{ key: 'nodejs', 		name: 'NodeJS', 			type: 'devicon' },
	{ key: 'react', 		name: 'React', 				type: 'devicon' },
	{ key: 'nextjs', 		name: 'NextJS', 			type: 'devicon' },
	{ key: 'jquery', 		name: 'jQuery', 			type: 'devicon' },
	{ key: 'php', 			name: 'PHP', 				type: 'devicon' },
	{ key: 'wordpress', 	name: 'WordPress', 			type: 'devicon' },
	{ key: 'woocommerce', 	name: 'WooCommerce', 		type: 'devicon' },
	{ key: "google",		name: "GA4/GTM", 			type: "devicon" },
	{ key: 'html5', 		name: 'HTML5', 				type: 'devicon' },
	{ key: 'css3', 			name: 'CSS3', 				type: 'devicon' },
	{ key: 'sass', 			name: 'SASS', 				type: 'devicon' },
	{ key: 'git', 			name: 'Git', 				type: 'devicon' },
	{ key: 'mysql', 		name: 'MySQL', 				type: 'devicon' },
	{ key: 'mongodb', 		name: 'MongoDB', 			type: 'devicon' },
]