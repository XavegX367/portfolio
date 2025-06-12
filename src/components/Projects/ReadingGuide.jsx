import PropTypes from 'prop-types'
import parse from 'html-react-parser'

function ReadingGuide({ guide }) {
    return (
        <>
            <div
                className='flex flex-col justify-start'
            >
                <h2 className='text-2xl font-bold mt-4'>Reading Guide</h2>
                {/* Render sections */}
                {guide.map((section, index) => (
                    <div
                        key={index}
                        className='mb-4 max-w-[850px]'
                    >
                        {/* Section Title */}
                        {section.title && (
                            <h3 className='text-2xl font-bold mb-2'>{section.title}</h3>
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
                                        <h4 className='text-xl font-semibold'>{step.title}</h4>
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
                                        <h4 className='text-xl font-semibold'>{idea.title}</h4>
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
                    className='text-xl font-semibold mt-2'
                >
                    {parse(item.content)}
                </h4>
            )
        case 'text':
            return (
                <p
                    key={contentIndex}
                    className='text-lg mt-2'
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
                        <li
                            key={listIndex}
                            className='text-lg'
                        >
                            {parse(listItem)}
                        </li>
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
                        <li
                            key={listIndex}
                            className='text-lg'
                        >
                            {listItem}
                        </li>
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

// ReadingGuide.propTypes = {
//     tag: PropTypes.string.isRequired,
//     guide: PropTypes.shape({
//         sections: PropTypes.arrayOf(
//             PropTypes.shape({
//                 title: PropTypes.string,
//                 content: PropTypes.arrayOf(
//                     PropTypes.shape({
//                         type: PropTypes.string.isRequired,
//                         content: PropTypes.oneOfType([
//                             PropTypes.string,
//                             PropTypes.arrayOf(PropTypes.string),
//                         ]),
//                         src: PropTypes.string,
//                         alt: PropTypes.string,
//                         caption: PropTypes.string,
//                         onClick: PropTypes.func,
//                     })
//                 ),
//                 steps: PropTypes.arrayOf(
//                     PropTypes.shape({
//                         title: PropTypes.string,
//                         content: PropTypes.arrayOf(
//                             PropTypes.shape({
//                                 type: PropTypes.string.isRequired,
//                                 content: PropTypes.oneOfType([
//                                     PropTypes.string,
//                                     PropTypes.arrayOf(PropTypes.string),
//                                 ]),
//                             })
//                         ),
//                     })
//                 ),
//                 ideas: PropTypes.arrayOf(
//                     PropTypes.shape({
//                         title: PropTypes.string,
//                         description: PropTypes.string,
//                         reflection: PropTypes.string,
//                     })
//                 ),
//             })
//         ).isRequired,
//     }).isRequired,
// }

export default ReadingGuide
