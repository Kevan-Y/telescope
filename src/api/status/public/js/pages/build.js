import checkForBuild from '../build-log/check-for-build.js';
import buildHeader from '../build-log/build-header.js';

window.addEventListener('load', () => {
  checkForBuild();
  buildHeader();
  setInterval(checkForBuild, 5000);
});
