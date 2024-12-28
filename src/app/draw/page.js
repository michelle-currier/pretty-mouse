"use client";
import styles from "./Draw.module.css";
import { useRef } from "react";

export default function TrailPage() {
  const container = useRef();
  const img = useRef();

  const manageMouseMove = (event) => {
    const { clientX, clientY } = event;
    const containerPosition = container.current.getBoundingClientRect();
    const x = clientX - containerPosition.x;
    const y = clientY - containerPosition.y;
    img.current.style.top = y + "px";
    img.current.style.left = x + "px";
    draw(x, y);
  };

  const draw = (x, y) => {
    const div = document.createElement("div");
    div.classList.add(styles["circle"]);
    div.style.top = y + "px";
    div.style.left = x + "px";
    container.current.append(div);

    if (container.current.childNodes.length > 5000) {
      erase();
    } else {
      setTimeout(() => {
        erase();
      }, 10000);
    }
  };

  const erase = () => {
    container.current.removeChild(container.current.childNodes[1]);
  };

  return (
    <div className={styles.main2}>
      <div
        ref={container}
        onMouseMove={(e) => {
          manageMouseMove(e);
        }}
        className={styles.container}
      >
        <p>Go ahead a draw something!</p>
        <img
          ref={img}
          className={styles.img}
          src="/circle.svg"
          alt="circle for the mouse"
        ></img>
      </div>
    </div>
  );
}
