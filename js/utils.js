export const main = document.getElementById(`main`);

export const parseHTML = (html) => {
  const wrapper = document.createElement(`div`);
  wrapper.innerHTML = html.trim();
  return wrapper;
};

export const showScreenByNum = (template) => {
  main.innerHTML = ``;
  main.appendChild(template);
};

export const ifChecked = (array) => {
  return array.some((input) => input.checked);
};
