export function makeErrorMessage(text, className) {
  const container = document.createElement('div');
  const content = document.createElement('div');

  container.classList.add('connectionError');

  if (className !== undefined) {
    container.classList.add(className);
  }

  content.classList.add('connectionError__content');
  content.textContent = text;
  container.appendChild(content);

  return container;
}