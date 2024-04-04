import { makeScene2D, Rect, Txt } from '@motion-canvas/2d';
import { all, chain, createRef, makeRef, range, sequence, Vector2, waitFor } from '@motion-canvas/core';

export default makeScene2D(function* (view) {
  const rects: Rect[] = [];
  const text = createRef<Txt>();

  const initialColor = "#5adcff";
  const finalColor = "#ff5656";

  // Create some rects
  view.add(
    range(5).map(i => (
      <>
      <Rect
        ref={makeRef(rects, i)}
        width={100}
        height={100}
        x={-350 + 200 * i}
        y={-600}
        fill={initialColor}
        radius={10}
      >
        <Txt
          ref={text}
          text={(i + 1).toString()}
          fontSize={60}
        />
      </Rect>
      </>
    )),
  );

  yield* waitFor(1);

  const delay = 1.5;

  yield* chain(
    ...rects.map((rect, i) => rect.position(new Vector2(-250 + 125 * i,0), delay)),
  );

  yield* all(
    ...rects.map((rect, i) => rect.fill(finalColor, delay*2)),
  );

  yield* sequence(
    delay,
    ...rects.map(rect => rect.position.y(100, 1).to(-100, 2).to(0, 1)),
  );
});
