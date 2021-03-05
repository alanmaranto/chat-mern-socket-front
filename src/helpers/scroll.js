import { animateScroll } from "react-scroll";

export const scrollToBottom = (id, duration = 0) => {
  animateScroll.scrollToBottom({
    containerId: id,
    duration,
  });
};
