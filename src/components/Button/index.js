import pTypes from 'prop-types';

export const Button = ({ children, onButtonClick, disabled = false }) => {
  return (
    <button disabled={disabled} onClick={onButtonClick}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: pTypes.node.isRequired,
  onButtonClick: pTypes.func.isRequired,
  disabled: pTypes.bool,
};
