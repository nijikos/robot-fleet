export function rotatePoint(
  x: number,
  y: number,
  angle: number,
  centerX: number,
  centerY: number,
  heading: number
): {
  x: number;
  y: number;
  heading: number;
  headingClass: string;
  originalX: number;
  originalY: number;
  originalHeading: number;
} {
  const radians = (angle * Math.PI) / 180;
  const cos = Math.cos(radians);
  const sin = Math.sin(radians);

  // Translate point to origin
  const translatedX = x - centerX;
  const translatedY = y - centerY;

  // Rotate point
  const rotatedX = translatedX * cos - translatedY * sin;
  const rotatedY = translatedX * sin + translatedY * cos;

  // Translate point back
  const finalX = rotatedX + centerX;
  const finalY = rotatedY + centerY;

  // Rotate heading by -7
  const newHeading = heading + angle;
  const headingClass =
    newHeading === -7
      ? "-rotate-7"
      : newHeading === 53
      ? "rotate-53"
      : newHeading === 233
      ? "rotate-233"
      : newHeading === 323
      ? "rotate-323"
      : "";

  return {
    x: finalX,
    y: finalY,
    heading: newHeading,
    headingClass: headingClass,
    originalX: x,
    originalY: y,
    originalHeading: heading,
  };
}
