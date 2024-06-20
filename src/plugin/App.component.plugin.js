import DarkModeReducer from "scandi-dark-theme/src/store/DarkMode/DarkMode.reducer";
import DarkModeProvider from "scandi-dark-theme/src/component/DarkModeProvider";

export const renderRouter = (args, callback, instance) => {
  return <DarkModeProvider key="router">{callback(...args)}</DarkModeProvider>;
};

export const getStaticReducers = (args, callback) => ({
  ...callback(args),
  DarkModeReducer,
});

export default {
  "Store/Index/getStaticReducers": {
    function: getStaticReducers,
  },
  "Component/App/Component": {
    "member-function": {
      renderRouter,
    },
  },
};
