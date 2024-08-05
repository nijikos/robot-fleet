export interface ICoordinate {
  x: number;
  y: number;
  heading: number;
}

export interface IPopup extends ICoordinate {
  originalX: number;
  originalY: number;
  originalHeading: number;
  headingClass: string;
  label?: string;
}
