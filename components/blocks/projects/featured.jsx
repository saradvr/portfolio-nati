import Image from 'next/image'

import { useEffect } from 'react'
import { m, useAnimation } from "framer-motion"
import { useInView } from 'react-intersection-observer'

import Badges 		from '../../utils/badge.list.util'
import Icon 		from '../../utils/icon.util'

import css 			from '../../../styles/sections/projects/featured.module.scss'
import content 		from '../../../content/projects/featured.json'

export default function FeaturedProject({ content }, index) {

	const { logo, project, url, repo, available, descriptionTitle,description, stack, imageOptions, images, achievements } = content

	const controls = useAnimation();
	const { ref, inView  } = useInView({
		"threshold": 0.25,
		"triggerOnce": false
	})

	useEffect( () => {
		if ( inView ) {	controls.start("visible") }
		if ( !inView ) { controls.start("hidden") }
		console.log("URL", url)
	}, [ controls, inView ] )

	return (
		<m.section 	
			key={index}
			className={css.project} 
			//framer-motion
			ref={ref}
			variants={container}
			initial={[ "rest", "hidden" ]}
			whileHover="hover"
			animate={controls} >
			
			<div className={css.details}>
				<div className={css.projectHeader}>
					<div>
						{/* <Image src={logo} alt="Project logo" width={50} height={50} /> */}
						<img src={logo} alt="Project logo" style={{width: "auto", height:"50px"}} />
					</div>
					<div className={css.header}>
						<h3 className="highlight">{project}</h3>
					</div>
					<div className={css.description}>
						<p><strong>{descriptionTitle}</strong> {description}</p>
					</div>
					<div className={css.achievements}>
						<ul>
							{achievements.map((el, i) => <li key={`${i}-key`}>{el}</li>)}
						</ul>
					</div>
					<div className={css.stackContainer}>
						<Badges list={stack} block="stack" fullContainer={false} color={false} />
					</div>
					{(available === "true" && url.live && 
						<a href={url.live} className={css.viewProject} target="_blank" rel="noreferrer">
							<p style={{marginRight: "10px"}}>Live project</p>
							<Icon icon={[ 'fad', 'arrow-right-to-bracket' ]} />
						</a>
					)}
					{(available === "true" && url.behance && 
						<a href={url.behance} className={css.viewProject} target="_blank" rel="noreferrer">
							<p style={{marginRight: "10px"}}>UX/UI Project Overview</p>
							<Icon icon={[ 'fad', 'arrow-right-to-bracket' ]} />
						</a>
					)}
					{(available === "false") && <div className={css.description}>
						<p><strong>Note:</strong> This project is currently under construction and for the company confidentiality it can not be published yet.</p>
					</div>}
				</div>
			</div>

			<div className={css.imageContainer}>
				{/* <Image src={images[0].url} alt="x" height={images[0].h} width={images[0].w} /> */}
				<img src={images[0].url} alt="x" />
			</div>

			{/* <div className={css.imageContainer}>
				<span className={`${css.imageAnimationContainer}`}>
					{ images.map( ({key, url, hover, h, w }, index) => {
						hover = ( hover === 'left' ) ? hoverLeft : hoverRight
						return (
							<m.div key={`${index}-${key}`} variants={item}>
								<m.div variants={hover}>
									<Image src={url} alt="x" height={h} width={w} />
								</m.div>
							</m.div>
						)}
					) }
				</span>
			</div> */}
		</m.section>
	)
}

const container = {
	hidden: { 
		transition: {
			delayChildren: 0.125,
			staggerChildren: 0.0625
		}
	},
	visible: {
		transition: {
			delayChildren: 0.125,
			staggerChildren: 0.25,
		}
	},
	rest: {
		transition: {
			delayChildren: 0,
			staggerChildren: 0,
		}
	},
	hover: {
		transition: {
			delayChildren: 0,
			staggerChildren: 0,
		}
	}
}

const item = {
	hidden: { 
		y: 75, 
		opacity: 0,
		transition: {
			type: "tween",
			ease: "easeIn",
			duration: .35, 
		}
	},
	visible: {
		y: 0,
		opacity: 1,
		transition: {
			type: "tween",
			ease: "easeOut",
			duration: .5, 
		}
	},
}

const hoverLeft = {
	rest: {
		x: 0
	},
	hover: {
		x: -20
	}
}

const hoverRight = {
	rest: {
		x: 0
	},
	hover: {
		x: 20
	}
}

