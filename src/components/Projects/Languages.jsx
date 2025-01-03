import {
	faCss3,
	faHtml5,
	faJs,
	faLaravel,
	faPhp,
	faReact,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types'
import { Tooltip } from 'react-tooltip'

function Languages({ languages }) {
	return (
		<div>
			{languages.length > 0 ? (
				<div className='flex flex-col justify-between pl-6 project'>
					<h1 className='text-xl mt-2'>Talen en frameworks voor dit project</h1>
					<div className='flex flex-row flex-wrap pl-2 md:mt-4'>
						{languages.map((language, index) => (
							<div
								key={index}
								className='flex flex-col md:flex-row'
							>
								<div
									className='flex flex-row justify-center mr-1'
									data-tooltip-id='language'
									data-tooltip-content={language}
								>
									{/* Check the language name and give the right fontawesome icon */}
									{language === 'HTML' && (
										<div className='text-white hover:text-[#E34C26] duration-300 transition-all'>
											<FontAwesomeIcon
												icon={faHtml5}
												className='text-5xl mt-2'
											/>
										</div>
									)}
									{language === 'CSS' && (
										<div className='text-white hover:text-[#264de4] duration-300 transition-all'>
											<FontAwesomeIcon
												icon={faCss3}
												className='text-5xl mt-2'
											/>
										</div>
									)}
									{language === 'React' && (
										<div className='text-white hover:text-[#61dbfb] duration-300 transition-all'>
											<FontAwesomeIcon
												icon={faReact}
												className='text-5xl mt-2'
											/>
										</div>
									)}
									{language === 'php' && (
										<div className='text-white hover:text-[#474a8a] duration-300 transition-all'>
											<FontAwesomeIcon
												icon={faPhp}
												className='text-5xl mt-2'
											/>
										</div>
									)}
									{language === 'JavaScript' && (
										<div className='text-white hover:text-[#f0db4f] duration-300 transition-all'>
											<FontAwesomeIcon
												icon={faJs}
												className='text-5xl mt-2'
											/>
										</div>
									)}
									{language === 'Laravel' && (
										<div className='text-white hover:text-[#f05340] duration-300 transition-all'>
											<FontAwesomeIcon
												icon={faLaravel}
												className='text-5xl mt-2'
											/>
										</div>
									)}
								</div>

								{/* Render Tooltip */}
								<Tooltip
									arrowColor='white'
									border={true}
									id='language'
								/>
							</div>
						))}
					</div>
				</div>
			) : (
				<></>
			)}
		</div>
	)
}

Languages.propTypes = {
	languages: PropTypes.arrayOf(PropTypes.string.isRequired),
}

export default Languages
