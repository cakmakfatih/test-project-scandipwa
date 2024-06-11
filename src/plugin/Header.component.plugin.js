import ModeToggleButton from "../component/ModeToggleButton";

export const renderTopMenu = (args, callback, instance) => {
  return (
    <>
      {callback(...args)}
      <div block="Header" elem="DarkModeToggle">
        <ModeToggleButton />
      </div>
    </>
  );
};

export default {
  "Component/Header/Component": {
    "member-function": {
      renderTopMenu,
    },
  },
};
