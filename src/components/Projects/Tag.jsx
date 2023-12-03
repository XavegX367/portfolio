import learning_outcomes from "../../utils/learning_outcomes"
import PropTypes from 'prop-types'

function Tag({kind}) {
    const tag = learning_outcomes[kind];

  return <>
    {
        (tag === undefined || tag === null) ?
        <></>
        :
        <div className={`tag ${kind}`}>
            {tag.name}
        </div>
    }
  </>
}

Tag.propTypes = {
    kind: PropTypes.string.isRequired,
}

export default Tag