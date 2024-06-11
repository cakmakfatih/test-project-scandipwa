import DarkModeReducer from "../store/DarkMode/DarkMode.reducer";
import DarkModeProvider from "../component/DarkModeProvider";

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
