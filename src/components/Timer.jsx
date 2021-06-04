import { useEffect } from 'react';
import { connect } from 'react-redux';
import updateTimerAction from '../redux/actions';

function Timer({ updateTimer }) {
  useEffect(() => {
    setInterval(() => {
      updateTimer();
    }, 500);
  });

  return null;
}

const mapDispatchToProps = (dispatch) => ({
  updateTimer: () => dispatch(updateTimerAction()),
});

export default connect(null, mapDispatchToProps)(Timer);
