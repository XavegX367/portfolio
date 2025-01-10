import { faDownload } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types'

function Documents({ documents }) {
	return (
		<div>
			{documents && documents.length > 0 ? (
				<div className='flex flex-col justify-between pl-6 project'>
					<h1 className='text-xl mt-2'>Documenten</h1>
					<div className='flex flex-col flex-wrap pl-2 md:mt-4'>
						{documents.map((link, index) => (
							<a
								key={index}
								className='flex flex-row md:flex-row justify-start link mb-3'
								href={link.url}
							>
								<span className='text-zinc-300'>{index + 1}.</span>
								<span className='ml-2'>{link.name}</span>
								<FontAwesomeIcon
									icon={faDownload}
									className='ml-2'
								/>
							</a>
						))}
					</div>
				</div>
			) : (
				<></>
			)}
		</div>
	)
}

export default Documents

Documents.propTypes = {
	documents: PropTypes.arrayOf(
		PropTypes.shape({
			name: PropTypes.string.isRequired,
			url: PropTypes.string.isRequired,
		})
	),
}
