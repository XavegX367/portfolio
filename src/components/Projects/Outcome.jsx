import Tag from './Tag'
import PropTypes from 'prop-types'
import parse from 'html-react-parser'

function Outcome({ tag, outcome }) {
	return (
		<>
			<div
				id={tag}
				className='flex flex-col justify-start'
			>
				<hr className='mt-4 mb-4' />
				<div>
					<Tag kind={tag} />
				</div>

				{/* Render sections */}
				{outcome.sections.map((section, index) => (
					<div
						key={index}
						className='mb-4'
					>
						{/* Section Title */}
						{section.title && (
							<h3 className='text-lg font-bold mb-2'>{section.title}</h3>
						)}

						{/* Render section content */}
						{section.content &&
							section.content.map((item, contentIndex) =>
								renderContent(item, contentIndex)
							)}

						{/* Render steps if they exist */}
						{section.steps &&
							section.steps.map((step, stepIndex) => (
								<div
									key={stepIndex}
									className='mt-4'
								>
									{step.title && (
										<h4 className='text-md font-semibold'>{step.title}</h4>
									)}
									{step.content &&
										step.content.map((item, contentIndex) =>
											renderContent(item, contentIndex)
										)}
								</div>
							))}

						{/* Render ideas if they exist */}
						{section.ideas &&
							section.ideas.map((idea, ideaIndex) => (
								<div
									key={ideaIndex}
									className='mt-4'
								>
									{idea.title && (
										<h4 className='text-md font-semibold'>{idea.title}</h4>
									)}
									{idea.description && (
										<p className='mt-2'>{idea.description}</p>
									)}
									{idea.reflection && (
										<p className='italic text-sm mt-2'>{idea.reflection}</p>
									)}
								</div>
							))}
					</div>
				))}
			</div>
		</>
	)
}

/**
 * Helper function to render content based on type
 */
function renderContent(item, contentIndex) {
	switch (item.type) {
		case 'subheader':
			return (
				<h4
					key={contentIndex}
					className='text-md font-semibold mt-2'
				>
					{parse(item.content)}
				</h4>
			)
		case 'text':
			return (
				<p
					key={contentIndex}
					className='text-base mt-2'
				>
					{parse(item.content)}
				</p>
			)
		case 'list':
			return (
				<ul
					key={contentIndex}
					className='list-disc pl-6 mt-2'
				>
					{item.content.map((listItem, listIndex) => (
						<li key={listIndex}>{parse(listItem)}</li>
					))}
				</ul>
			)
		case 'ordered-list':
			return (
				<ol
					key={contentIndex}
					className='list-decimal pl-6 mt-2'
				>
					{item.content.map((listItem, listIndex) => (
						<li key={listIndex}>{listItem}</li>
					))}
				</ol>
			)
		case 'image':
			return (
				<div
					key={contentIndex}
					className='mt-4'
				>
					<img
						src={item.src}
						alt={item.alt || 'Image'}
						className='w-full max-w-md mx-auto'
					/>
					{item.caption && (
						<p className='text-sm text-center mt-2 italic'>{item.caption}</p>
					)}
				</div>
			)
		case 'video':
			return (
				<div
					key={contentIndex}
					className='mt-4'
				>
					<video
						controls
						src={item.src}
						className='w-full max-w-lg mx-auto'
					/>
					{item.caption && (
						<p className='text-sm text-center mt-2 italic'>{item.caption}</p>
					)}
				</div>
			)
		case 'button':
			return (
				<div
					key={contentIndex}
					className='mt-4'
				>
					<button
						onClick={item.onClick}
						className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700'
					>
						{item.content}
					</button>
				</div>
			)
		default:
			return null
	}
}

Outcome.propTypes = {
	tag: PropTypes.string.isRequired,
	outcome: PropTypes.shape({
		sections: PropTypes.arrayOf(
			PropTypes.shape({
				title: PropTypes.string,
				content: PropTypes.arrayOf(
					PropTypes.shape({
						type: PropTypes.string.isRequired,
						content: PropTypes.oneOfType([
							PropTypes.string,
							PropTypes.arrayOf(PropTypes.string),
						]),
						src: PropTypes.string,
						alt: PropTypes.string,
						caption: PropTypes.string,
						onClick: PropTypes.func,
					})
				),
				steps: PropTypes.arrayOf(
					PropTypes.shape({
						title: PropTypes.string,
						content: PropTypes.arrayOf(
							PropTypes.shape({
								type: PropTypes.string.isRequired,
								content: PropTypes.oneOfType([
									PropTypes.string,
									PropTypes.arrayOf(PropTypes.string),
								]),
							})
						),
					})
				),
				ideas: PropTypes.arrayOf(
					PropTypes.shape({
						title: PropTypes.string,
						description: PropTypes.string,
						reflection: PropTypes.string,
					})
				),
			})
		).isRequired,
	}).isRequired,
}

export default Outcome
