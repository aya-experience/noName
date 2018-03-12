/**
 * Compute style based on props
 * @param textSize The line text size
 * @param color The line color
 * @param width The line width
 */
export default ({ color = '#efefef', width = '160px' }) => ({
  drawer: {
    height: '100%',
    width,
    position: 'fixed',
    zIndex: 1,
    top: 0,
    left: 0,
    backgroundColor: color,
    overflowX: 'hidden',
  },
  container: {
    paddingLeft: width,
  },
});
