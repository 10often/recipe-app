export const isVisibleLeftArrow = (el: HTMLDivElement) => el.scrollLeft > 10;

export const isVisibleRightArrow = (el: HTMLDivElement) =>
  el.scrollWidth - el.scrollLeft - el.offsetWidth > 10;
