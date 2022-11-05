export default function useMouseWheel(onWheelUp, onWheelDown) {
  return function mouseWheelHandler(e) {
      e.preventDefault();
      e.stopPropagation();

      const direction = e.deltaY || e.detail || e.wheelDelta;

      Math.abs(direction) === 120 ?
        direction > 0 ? onWheelUp():onWheelDown():
        direction < 0 ? onWheelUp():onWheelDown();
    }
}