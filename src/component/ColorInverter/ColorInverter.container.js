import { connect } from "react-redux";

import ColorInverter from "./ColorInverter.component";

/** @namespace TestAppCsa/Component/ColorInverter/Container/mapStateToProps */
export const mapStateToProps = (state) => ({
  isDarkModeEnabled: state.DarkModeReducer.enabled,
});

/** @namespace TestAppCsa/Component/ColorInverter/Container/mapDispatchToProps */
export const mapDispatchToProps = (_dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(ColorInverter);
