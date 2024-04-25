const breakPoints = {
  sm: 767,
  md: 1200,
  lg: 1920,
};

function TabletSize() {
  return `@media screen and (max-width: ${breakPoints.md}px)`;
}

function MobileSize() {
  return `@media screen and (max-width: ${breakPoints.sm}px)`;
}

export { MobileSize, TabletSize, breakPoints };
