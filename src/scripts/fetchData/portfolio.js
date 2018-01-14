import { fetchWorks } from './api';
import { makeErrorMessage } from '../errorMessage';

class Works {

  init() {
    return fetchWorks()
      .then((resultData) => {
        const slider = document.getElementById('slider');

        slider.innerHTML = resultData.html;

        return resultData.data;
      })
      .catch((e) => {
        const slider = document.getElementById('slider');
        const errorMessage = `При получении данных с сервера возникла ошибка. ${e.message} Уверяю вас, я уже работаю над этим.`;
        const error = makeErrorMessage(errorMessage, 'slider__connectionError');

        slider.appendChild(error);
      })
  }
}

export default Works;