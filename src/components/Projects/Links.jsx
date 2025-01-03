import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types'

function Links({ links }) {
	return (
		<div>
			{links && links.length > 0 ? (
				<div className='flex flex-col justify-between pl-6 project'>
					<h1 className='text-xl mt-2'>Links voor dit project</h1>
					<div className='flex flex-col flex-wrap pl-2 md:mt-4'>
						{links.map((link, index) => (
							<div
								key={index}
								className='flex flex-col md:flex-row justify-start'
							>
								<a
									target='_blank'
									className='text-purple-500 hover:text-purple-400 transition-all duration-200 underline flex flex-row hover:pl-2'
									href={link.url}
									rel='noreferrer'
								>
									<div className='mr-2 text-lg pt-2'>
										<FontAwesomeIcon icon={faArrowUpRightFromSquare} />
									</div>
									{link.name}
								</a>
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

export default Links

Links.propTypes = {
	links: PropTypes.arrayOf(
		PropTypes.shape({
			name: PropTypes.string.isRequired,
			url: PropTypes.string.isRequired,
		})
	),
}
