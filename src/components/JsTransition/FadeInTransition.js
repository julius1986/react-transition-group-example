import { Transition } from "react-transition-group";

const FadeIn = ({ children, ...props }) => {
  const defaultStyle = {
    transition: `opacity ${props.timeout}ms ease-in-out`,
    opacity: 0,
  };

  const transitionStyles = {
    entering: { opacity: 1 },
    entered: { opacity: 1 },
    exiting: { opacity: 0 },
    exited: { opacity: 0 },
  };

  return (
    <Transition {...props}>
      {(state) => (
        <div
          style={{
            ...defaultStyle,
            ...transitionStyles[state],
          }}
        >
          {children}
        </div>
      )}
    </Transition>
  );
};

export default FadeIn;
