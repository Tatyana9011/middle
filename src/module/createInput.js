// eslint-disable-next-line strict
'use strict';

const createInput = () => {
  const elem = `
  <input type="hidden" name="project_name" value="Site Name">
  <input type="hidden" name="admin_email" value="tanya.kamyshnikova@gmail.com">
  <input type="hidden" name="form_subject" value="Form Subject"></input>
  `;

  return elem;
};

export default createInput;
