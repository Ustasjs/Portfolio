import { sendMail } from './fetchData/api';

class MailRequest {

  init(name, email, message) {
    return sendMail(name, email, message)
      .then((res) => res.json())
  }

}

export default MailRequest;