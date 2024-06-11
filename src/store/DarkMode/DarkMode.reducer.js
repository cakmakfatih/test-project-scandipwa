import { DARKMODE_ENABLE } from './DarkMode.action';
import BrowserDatabase from "@scandipwa/scandipwa/src/util/BrowserDatabase";    

export const DARKMODE_STORAGE_KEY = "DARK_MODE_ENABLED";

/** @namespace TestAppCsa/Store/DarkMode/Reducer/getInitialState */
export const getInitialState = () => ({
    enabled: BrowserDatabase.getItem(DARKMODE_STORAGE_KEY) || false,
});

/** @namespace TestAppCsa/Store/DarkMode/Reducer/DarkModeReducer */
export const DarkModeReducer = (state = getInitialState(), action) => {
    switch (action.type) {
    case DARKMODE_ENABLE:
        const { enabled } = action;

        if(enabled) {
            BrowserDatabase.setItem(true, DARKMODE_STORAGE_KEY);
        } else {
            BrowserDatabase.deleteItem(DARKMODE_STORAGE_KEY);
        }

        return {
            enabled,
        };
    default:
        return state;
    }
};

export default DarkModeReducer;