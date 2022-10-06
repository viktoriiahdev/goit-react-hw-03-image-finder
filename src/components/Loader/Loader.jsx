import PropTypes from 'prop-types';

import { Circles } from 'react-loader-spinner';

const Loader = ({ visible = false }) => (
  <Circles
    height="80"
    width="80"
    color="#bff7ca"
    ariaLabel="circles-loading"
    wrapperStyle={{
      position: 'fixed',
      left: '50%',
      top: '50%',
      transform: 'translate(-50%, -50%)',
      zIndex: 99,
    }}
    wrapperClass=""
    visible={visible}
  />
);

export default Loader;

Loader.propTypes = {
  visible: PropTypes.bool,
};
