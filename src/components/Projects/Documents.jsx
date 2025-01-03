import PropTypes from 'prop-types'

function Documents({ documents }) {
	return (
		<div>
			{documents && documents.length > 0 ? (
				<div className='flex flex-col justify-between pl-6 project'>
					<h1 className='text-xl mt-2'>Documenten</h1>
					<div className='flex flex-col flex-wrap pl-2 md:mt-4'>
						{documents.map((link, index) => (
							<div
								key={index}
								className='flex flex-col md:flex-row justify-start'
							>
								<span>{link}</span>
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

export default Documents

Documents.propTypes = {
	documents: PropTypes.arrayOf(
		PropTypes.shape({
			name: PropTypes.string.isRequired,
			url: PropTypes.string.isRequired,
		})
	),
}
