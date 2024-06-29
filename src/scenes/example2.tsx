import { makeScene2D, Circle, Txt } from '@motion-canvas/2d';
import { createRef, createSignal } from '@motion-canvas/core';

export default makeScene2D(function* (view) {
  view.fill('#212121'); // set the background of this scen

  const pacmanMouthSignal = createSignal(0);
  const pacmanBodySignal = createSignal(0);
  const circleRadius = 250;

  const pacmanMouthRef = createRef<Circle>();
  const pacmanBodyRef = createRef<Circle>();

  const getAnimationTime = (distance: number) => {
    return distance / animationSpeed;
  }

  const commonAttributes = {
    startAngle: 0,
    closed: true,
    size: circleRadius * 2,
  }

  const animationSpeed = 100;

  view.add(
    <>
      <Circle
        fill={'black'}
        ref={pacmanMouthRef}
        endAngle={pacmanMouthSignal}
        rotation={-27.5}
        {...commonAttributes}
      />
      <Circle
        fill={'yellow'}
        ref={pacmanBodyRef}
        endAngle={pacmanBodySignal}
        rotation={27}
        {...commonAttributes}
      />
      <Txt
        x={0}
        y={-circleRadius - 100}
        text={() => "Mouth Angle: " + pacmanMouthSignal().toFixed(2)}
        fill={'white'}
        fontSize={40}
      />
      <Txt
        x={0}
        y={circleRadius + 100}
        text={() => "Body Angle: " + pacmanBodySignal().toFixed(2)}
        fill={'white'}
        fontSize={40}
      />
    </>,

    // <Txt
    //   x={0}
    //   y={-circleRadius - 50}
    //   text={() => (bocaDePacman() / 360 * 100).toFixed(2) + "%"}
    //   fill={'white'}
    //   fontSize={40}
    // />
  );

  yield* pacmanMouthSignal(55, getAnimationTime(55));

  // Animate pacmanMouthSignal with linear function


  yield* pacmanBodySignal(305, getAnimationTime(305));
});
