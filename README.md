## Introduction

This web application provides a map view to display a fleet of robots. Built with the Next.js framework and TypeScript, and uses Tailwind CSS for styling.

## Installation

1. To install dependencies

   ```jsx
   npm install
   ```

2. Run the app

   ```jsx
   npm run dev
   ```

   App by default will run on http://localhost:3000/

## Directory Structure

```jsx
robot-fleet-map/
├── public/
│ ├── icons/
│ │ └── arrow-up.svg
│ └── images/
│ │ └── campus_sim.png
├── src/
│ ├── @data/
│ │ ├── mapData.ts
│ ├── components/
│ │ ├── MapChild.tsx
│ │ ├── MapView.tsx
│ │ └── MapView2.tsx
│ ├── helpers/
│ │ ├── index.ts
│ ├── pages/
│ │ ├── _app.tsx
│ │ ├── _document.tsx
│ │ └── index.tsx
│ ├── styles/
│ │ └── globals.css
```

## Main Component

The main component for displaying the map using Mapbox is located in

## Implementation Process & Notes

To create the display of robot fleets on Mapbox, here are the steps I followed:

1. I started by mapping the points of each robot on Figma to determine their locations. I then saved this as a PNG file, which can be found at `/public/images/campus_sim_mapped.png`.
2. Since the robot map's north does not align with the global map view (approximately -7 degrees off), I created separate `MapView.tsx` and `MapChild.tsx` components to accurately trace the correct scale, rotation, and, most importantly, the bounding box coordinates.
3. Once I received the map bound coordinates, I used them in `MapView2.tsx` to implement the bounds within the `<Map />` component.
4. To place the markers correctly, I created the `rotatePoint()` function. This function rotates the points of each robot by an angle from the original local coordinates to provide the new rotated coordinates. To display the markers, I use the top-left bound coordinates as anchor points, which I then offset using the new coordinates obtained from `rotatePoint()`.
5. To display the information of the robot’s local coordinates as well as the headings, I used Mapbox’s `Popup` component. This popup appears when the user hovers over the robot markers, utilizing `useState` to manage the popup state.

## Current Limitations

1. Setting up map bounds coordinates and zoom levels remains a manual process.
2. Marker positions are currently set using offset (x and y coordinates) rather than actual longitude and latitude coordinates.
3. To avoid potential issues with the current setup, zooming and panning functionalities are disabled.
