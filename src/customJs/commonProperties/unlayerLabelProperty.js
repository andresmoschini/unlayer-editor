const React = window.unlayer.React;
import PropTypes from 'prop-types';

// Copied structure of Unlayer label
export const UnlayerLabelProperty = ({ label }) => (
  <div className="blockbuilder-widget-label mb-2">
    <label className="blockbuilder-label-primary">
      <div>
        <span className="has-value same-value">{label}</span>
      </div>
    </label>
  </div>
);

UnlayerLabelProperty.propTypes = {
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};
