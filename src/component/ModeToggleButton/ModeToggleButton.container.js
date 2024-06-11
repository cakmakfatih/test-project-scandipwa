import { connect, dispatch } from "react-redux";

import ModeToggleButton from "./ModeToggleButton.component";
import { enableDarkMode } from "../../store/DarkMode/DarkMode.action";

/** @namespace TestAppCsa/Component/ModeToggleButton/Container/mapStateToProps */
export const mapStateToProps = (state) => ({
  isDarkModeEnabled: state.DarkModeReducer.enabled,
});

/** @namespace TestAppCsa/Component/ModeToggleButton/Container/mapDispatchToProps */
export const mapDispatchToProps = (dispatch) => ({
  enableDarkMode: (enabled) => dispatch(enableDarkMode(enabled)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModeToggleButton);