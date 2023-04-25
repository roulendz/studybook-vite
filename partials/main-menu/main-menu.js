import { Collapse } from 'flowbite';

// set the target element that will be collapsed or expanded (eg. navbar menu)
const $targetEl = document.getElementById('mobile-menu-2');

// optionally set a trigger element (eg. a button, hamburger icon)
const $triggerEl = document.querySelector('button[data-collapse-toggle="mobile-menu-2"]');

// optional options with default values and callback functions
const options = {
  onCollapse: () => {
      console.log('element has been collapsed')
  },
  onExpand: () => {
      console.log('element has been expanded')
  },
  onToggle: () => {
      console.log('element has been toggled')
  }
};

const collapse = new Collapse($targetEl, $triggerEl, options);