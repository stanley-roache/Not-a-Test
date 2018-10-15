import { connect } from 'react-redux'

import {
  getUsers,
  getIsSorted,
  getAlphabeticallySortedUsers
} from '../../state/selectors'
import { removeUserAction } from '../../state/actions'
import UserList from '../../components/UserList'

// I want a new boolean in state to choose whether the list should be sorted.
// If the list was going to get very large I would store the sorted list in state but because in
// this case the user wants to sort and unsort the list and it will be short I will just sort it dynamically
function mapStateToProps(state) {
  const isSorted = getIsSorted(state)
  //  the switching between sorted and unsorted happens here in the container, the component treats the two the same
  return {
    users: isSorted ? getAlphabeticallySortedUsers(state) : getUsers(state),
    isSorted
  }
}

function mapDispatchToProps(dispatch) {
  return {
    removeUser: userNumber => {
      dispatch(removeUserAction(userNumber))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserList)
