let handler;

export default {
  bind(el, binding, vnode) {
    handler = (event) => {
      // check that click was ouside the el and its children
      if (!(el === event.target || el.contains(event.target))) {
        // if it did, call method provided in attribute value
        vnode.context[binding.expression](event);
      }
    };
    document.body.addEventListener('click', handler);
  },
  unbind() {
    document.body.removeEventListener('click', handler);
  },
};
