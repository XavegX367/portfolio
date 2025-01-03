import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import projects from '../utils/projects'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import Btn from '../components/Layout/Btn'
import Outcome from '../components/Projects/Outcome'
import Languages from '../components/Projects/Languages'
import Documents from '../components/Projects/Documents'
import Links from '../components/Projects/Links'

const Project = () => {
	const [project, setProject] = useState(null)
	const { domain } = useParams()

	const navigate = useNavigate()

	useEffect(() => {
		// Zoek het project op basis van het id in de URL
		setProject(projects.find((project) => project.domain === domain))
	}, [domain])

	const goBack = () => {
		navigate('/projects')
	}

	return (
		<div>
			{project && (
				<div className='flex flex-col md:flex-row justify-between p-4'>
					<div className='md:w-3/4'>
						<div>
							<div className='flex flex-row justify-center md:justify-start gap-x-2'>
								<button
									className='cursor-pointer md:mt-2'
									onClick={() => goBack()}
								>
									<FontAwesomeIcon
										icon={faArrowLeft}
										className='text-4xl mb-4'
									/>
								</button>
								<span
									onClick={() => goBack()}
									className='text-3xl mx-1 md:text-5xl text-white header-item text-center justify-center md:text-start'
								>
									{project.name}
								</span>
							</div>
							<p className='text-base flex flex-wrap md:pl-2 md:mt-4 text-center md:text-start'>
								{project.description}
							</p>
						</div>

						{/* Render outcomes */}
						{project.learning_outcomes &&
							Object.entries(project.learning_outcomes).map(
								([key, outcome]) => (
									<div
										key={key}
										id={outcome.title.toLowerCase()}
									>
										<div>
											<Outcome
												id={key}
												tag={outcome.title.toLowerCase()}
												outcome={outcome}
											/>
										</div>
									</div>
								)
							)}

						{/* Buildup */}
						{project.buildup !== undefined && project.buildup === true ? (
							<div className='mt-2'>
								<Btn
									content={'Portfolio Research'}
									internal={true}
									link={'/buildup'}
								/>
							</div>
						) : null}
					</div>

					{/* Rechterkolom */}
					<div className='md:w-1/4 flex flex-col'>
						{/* Gebruikte talen */}
						<Languages languages={project.used_languages} />

						{/* Documenten */}
						<Documents documents={project.documents} />

						{/* Links */}
						<Links links={project.links} />
					</div>
				</div>
			)}
		</div>
	)
}

export default Project
