import { makeScene2D, Circle, Txt } from '@motion-canvas/2d';
import { createSignal } from '@motion-canvas/core';

export default makeScene2D(function* (view) {
  view.fill('#212121'); // set the background of this scen

  const bocaDePacman = createSignal(0);
  const bocaDePacman2 = createSignal(0);
  const circleRadius = 250;

  view.add(
    <>
      <Circle
        size={circleRadius * 2}
        fill={'black'}
        startAngle={0}
        endAngle={bocaDePacman}
        closed={true}
        rotation={-27.5}
      />
      <Circle
        size={circleRadius * 2}
        fill={'yellow'}
        startAngle={0}
        endAngle={bocaDePacman2}
        closed={true}
        rotation={27}
      />
      <Txt
        x={0}
        y={-circleRadius - 100}
        text={() => "Mouth Angle: " + bocaDePacman().toFixed(2)}
        fill={'white'}
        fontSize={40}
      />
      <Txt
        x={0}
        y={circleRadius + 100}
        text={() => "Body Angle: " + bocaDePacman2().toFixed(2)}
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

  yield* bocaDePacman(55, 2);
  yield* bocaDePacman2(305, 2);
});
