import {makeProject} from '@motion-canvas/core';

import example2 from './scenes/example2?scene';
import example from "./scenes/example?scene";

export default makeProject({
  scenes: [example2, example],
});
