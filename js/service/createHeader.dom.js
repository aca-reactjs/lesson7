function createHeader(type, text) {
  const header = document.createElement(type);

  header.textContent = text;

  return header;
}

export default createHeader;
