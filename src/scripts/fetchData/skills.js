import { fetchSkills } from './api';
import { makeErrorMessage } from '../errorMessage';

class Articles {

  init() {
    return fetchSkills()
      .then((data) => {
        const skills = document.getElementById('skills');

        skills.innerHTML = data;
      })
      .catch((e) => {
        const skills = document.getElementById('skills');
        const errorMessage = `При получении данных с сервера возникла ошибка. ${e.message} Уверяю вас, я уже работаю над этим.`;
        const error = makeErrorMessage(errorMessage, 'skills__connectionError');

        skills.appendChild(error);
      })
  }
}

export default Articles;