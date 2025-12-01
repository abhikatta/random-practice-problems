import { BallProps } from "./Ball";

interface RandomNumberProps {
  range?: number;
  roundingMethod?: "floor" | "ceil" | "round";
}

export function getRand(
  range: RandomNumberProps["range"] = 1,
  roundingMethod?: RandomNumberProps["roundingMethod"]
) {
  const randomValue = Math.random() * range;
  switch (roundingMethod) {
    case "floor":
      return Math.floor(randomValue);
    case "ceil":
      return Math.ceil(randomValue);
    case "round":
      return Math.round(randomValue);
    default:
      return randomValue;
  }
}

export const createRandomColor = () => {
  return {
    R: getRand(255, "round"),
    G: getRand(255, "round"),
    B: getRand(255, "round"),
  };
};

export function drawBall(canvas: HTMLCanvasElement, balls: BallProps[]) {
  const context = canvas.getContext("2d");
  if (context) {
    for (let index = 0; index < balls.length; index++) {
      context.beginPath();
      const ball = balls[index];
      context.arc(
        ball.centerX,
        ball.centerY,
        ball.radius,
        0,
        2 * Math.PI,
        false
      );
      context.fillStyle = ball.fillStyle;
      context.fill();
      context.stroke();
      context.closePath();
    }
  }
}
