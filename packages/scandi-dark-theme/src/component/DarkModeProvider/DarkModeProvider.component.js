import PropTypes from "prop-types";
import { PureComponent } from "react";

import "./DarkModeProvider.style";

/** @namespace TestAppCsa/Component/DarkModeProvider/Component */
export class DarkModeProviderComponent extends PureComponent {
  static propTypes = {
    isDarkModeEnabled: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
  };

  render() {
    const { children, isDarkModeEnabled } = this.props;

    return (
      <div block="DarkModeProvider" mods={{ isEnabled: isDarkModeEnabled }}>
        {children}
      </div>
    );
  }
}

export default DarkModeProviderComponent;
