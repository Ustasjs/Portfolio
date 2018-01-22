import { fetchWorks } from './api';
import { makeErrorMessage } from '../errorMessage';

class Works {

  init() {
    return fetchWorks()
      .then((data) => {
        const slider = document.getElementById('slider');

        if (data.type === 'Empty') {
          const errorMessage = 'На данный момент в базе данных нет необходимой информации';
          const error = makeErrorMessage(errorMessage, 'slider__connectionError');

          slider.appendChild(error);

          return;
        }

        slider.innerHTML = data.html;

        return data.data;
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