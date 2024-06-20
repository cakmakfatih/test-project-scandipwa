import ColorInverter from "scandi-dark-theme/src/component/ColorInverter";

export const render = (args, callback, instance) => {
  return <ColorInverter>{callback(...args)}</ColorInverter>;
};

export default {
  "Component/Image/Component": {
    "member-function": {
      render,
    },
  },
};
