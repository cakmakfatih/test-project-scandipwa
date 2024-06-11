import PropTypes from 'prop-types';
import { PureComponent } from "react";

import "./ColorInverter.style";

/* @namespace Component/ColorInverter/Component/ColorInverterComponent*/
export class ColorInverterComponent extends PureComponent {
  static propTypes = {
    isDarkModeEnabled: PropTypes.bool.isRequired,
    children: PropTypes.any,
  };

  render() {
    const { isDarkModeEnabled, children } = this.props;

    return (
      <div block="ColorInverter" mods={{ isInverted: isDarkModeEnabled }}>
        {children}
      </div>
    );
  }
}

export default ColorInverterComponent;
