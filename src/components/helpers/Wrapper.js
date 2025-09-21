const Wrapper = (props) => {
  // Удобно что бы обойти ограничение React с использованием одного root элемента
  return props.children;
};
export default Wrapper;
