export function generateRandomNumBetween0AndMax(max) {
  return Math.floor(Math.random() * max);
}

export function $(element) {
  return document.querySelector(elementName);
}
