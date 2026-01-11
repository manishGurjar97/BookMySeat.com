const BlurEffect = ({ top, right }) => {
  return (
    <div
      className="
        pointer-events-none
        absolute
        -z-10
        w-72
        h-72
        rounded-full
        bg-primary/40
        blur-3xl
        opacity-40
      "
      style={{ top, right }}
    />
  );
};

export default BlurEffect;
