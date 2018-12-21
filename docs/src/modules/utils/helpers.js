import warning from 'warning';
import upperFirst from 'lodash/upperFirst';
import camelCase from 'lodash/camelCase';

export function titleize(string) {
  warning(
    typeof string === 'string' && string.length > 0,
    'titleize(string) expects a non empty string argument.',
  );

  return string
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

export function pageToTitle(page) {
  if (page.title) {
    return page.title;
  }

  const name = page.pathname.replace(/.*\//, '');

  if (page.pathname.indexOf('/api/') !== -1) {
    return upperFirst(camelCase(name));
  }

  return titleize(name);
}

export function getDependencies(raw, reactVersion = 'latest') {
  const deps = {
    'react-dom': reactVersion,
    react: reactVersion,
  };
  const versions = {
    'date-fns': 'next',
  };
  const re = /^import\s.*\sfrom\s+'([^']+)|import\s'([^']+)'/gm;
  let m;
  // eslint-disable-next-line no-cond-assign
  while ((m = re.exec(raw))) {
    let name;

    if (m[1]) {
      // full import
      // handle scope names
      name = m[1].charAt(0) === '@' ? m[1].split('/', 2).join('/') : m[1].split('/', 1)[0];
    } else {
      name = m[2];
    }

    if (!deps[name]) {
      deps[name] = versions[name] ? versions[name] : 'latest';
    }
  }
  return deps;
}

export function getCookie(name) {
  const regex = new RegExp(`(?:(?:^|.*;*)${name}*=*([^;]*).*$)|^.*$`);
  return document.cookie.replace(regex, '$1');
}
