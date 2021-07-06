export const isEmpty = function (parent) {
  const message = 'campo obrigatorio'
  if (!parent.content) {
    parent.error = message;
    return parent.validator;
  }
  parent.error = (parent.error === message) ? "" : parent.error;
  return parent.validator;
}

export const isMin = function (parent, tam) {
  const message = `mínimo de ${tam} caracteres`;
  if (parent.content) {
    parent.error = (parent.content.length < tam) ? message : "";
    return parent.validator;
  }
  parent.error = (parent.error === message) ? "" : parent.error;
  return parent.validator;
}

