import { fetchSkills } from './api';
import { makeErrorMessage } from '../errorMessage';

class Articles {

  init() {
    return fetchSkills()
      .then((data) => {

        if (data.type === 'Empty') {
          const skills = document.getElementById('skills');
          const errorMessage = 'На данный момент в базе данных нет необходимой информации';
          const error = makeErrorMessage(errorMessage, 'skills__connectionError');

          skills.appendChild(error);

          return;
        }

        const skills = document.querySelector('.skills__circles');

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