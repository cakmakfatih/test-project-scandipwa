import { connect } from 'react-redux';

import DarkModeProvider from './DarkModeProvider.component';

/** @namespace TestAppCsa/Component/DarkModeProvider/Container/mapStateToProps */
export const mapStateToProps = (state) => ({
    isDarkModeEnabled: state.DarkModeReducer.enabled,
});

/** @namespace TestAppCsa/Component/DarkModeProvider/Container/mapDispatchToProps */
export const mapDispatchToProps = (_dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(DarkModeProvider);
