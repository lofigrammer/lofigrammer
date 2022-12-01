import styles from "./DotRing.module.css";
import useMousePosition from "../../hooks/useMousePosition";

const DotRing = () => {
  // 1.
  const { x, y } = useMousePosition();
  return (
    <>
      <div
        style={{ left: `${x}px`, top: `${y}px` }}
        className={styles.ring}
      ></div>
    </>
  );
};

export default DotRing;
