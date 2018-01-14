const url = 'http://92.53.104.80:3000';

const authApi = '/user';
const mailApi = '/contact';
const articlesApi = '/api/template/blog';
const worksApi = '/api/template/portfolio';
const skillsApi = '/api/template/skills';
const options = {
  mode: 'cors'
};

// Auth

export function auth(login, password) {
  const data = { login, password };
  const JSONData = JSON.stringify(data);
  const myHeaders = new Headers({ 'Content-Type': 'application/json' });

  const addOption = Object.assign({}, options, {
    method: 'POST',
    body: JSONData,
    credentials: 'include',
    headers: myHeaders
  });

  return fetch(url + authApi, addOption).then(res => {
    if (res.status >= 400) {
      return res.json()
        .then((data) => {
          throw new Error(`${data.message}`);
        })
    }

    return res;
  });
}

// Auth

export function sendMail(name, email, message) {
  const data = { name, email, message };
  const JSONData = JSON.stringify(data);
  const myHeaders = new Headers({ 'Content-Type': 'application/json' });

  const addOption = Object.assign({}, options, {
    method: 'POST',
    body: JSONData,
    credentials: 'include',
    headers: myHeaders
  });

  return fetch(url + mailApi, addOption).then(res => {
    if (res.status >= 400) {
      return res.json()
        .then((data) => {
          throw new Error(`${data.message}`);
        })
    }

    return res;
  });
}

// skills
// fetch

export function fetchSkills() {
  return fetch(url + skillsApi, options).then(res => {
    if (res.status >= 400) {
      throw new Error(`Server side error: ${res.statusText}`);
    }

    return res.json();
  });
}

// articles
// fetch

export function fetchArticles() {
  return fetch(url + articlesApi, options).then(res => {
    if (res.status >= 400) {
      throw new Error(`Server side error: ${res.statusText}`);
    }

    return res.json();
  });
}

// works
// fetch

export function fetchWorks() {
  return fetch(url + worksApi, options).then(res => {
    if (res.status >= 400) {
      throw new Error(`Server side error: ${res.statusText}`);
    }

    return res.json();
  });
}