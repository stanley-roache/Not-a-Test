import { connect } from 'react-redux'

import { setSortingAction } from '../../state/actions'
import { getIsSorted } from '../../state/selectors'
import SortToggle from '../../components/SortToggle'

function mapStateToProps(state) {
  return {
    isSorted: getIsSorted(state)
  }
}
// This could be done differently, since the sorting will always be toggled
// I could have made this dispatcher not take an argument at all and invert the boolena in state
// I felt that this way was more generic
function mapDispatchToProps(dispatch) {
  return {
    setSorting: isSorted => {
      dispatch(setSortingAction(isSorted))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SortToggle)
