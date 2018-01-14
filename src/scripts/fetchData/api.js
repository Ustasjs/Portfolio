const url = 'http://localhost:3000';

const articlesApi = '/api/template/blog';
const worksApi = '/api/template/portfolio1';
const skillsApi = '/api/template/skills';
const options = {
  mode: 'cors'
};

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