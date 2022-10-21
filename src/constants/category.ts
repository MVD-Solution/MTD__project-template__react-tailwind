import { ReactComponent as All } from './../assets/resource/category/all.svg';
import { ReactComponent as Css } from './../assets/resource/category/css.svg';
import { ReactComponent as Html } from './../assets/resource/category/html.svg';
import { ReactComponent as Js } from './../assets/resource/category/js.svg';
import { ReactComponent as Node } from './../assets/resource/category/node.svg';
import { ReactComponent as ReactSvg } from './../assets/resource/category/react.svg';
import { ReactComponent as Security } from './../assets/resource/category/security.svg';

export const CATEGORY = {
  ALL: 'all',
  HTML: 'html',
  CSS: 'css',
  JAVASCRIPT: 'javascript',
  REACT: 'react',
  NODE: 'node',
  SECURITY: 'security',
};

export const listCategory = [
  { id: CATEGORY.ALL, text: 'All', icon: All },
  { id: CATEGORY.HTML, text: 'HTML', icon: Html },
  { id: CATEGORY.CSS, text: 'CSS', icon: Css },
  { id: CATEGORY.JAVASCRIPT, text: 'JavaScript', icon: Js },
  { id: CATEGORY.REACT, text: 'React', icon: ReactSvg },
  { id: CATEGORY.NODE, text: 'Node', icon: Node },
  { id: CATEGORY.SECURITY, text: 'Security', icon: Security },
];
export const categoryTable = {
  [CATEGORY.ALL]: 'All',
  [CATEGORY.HTML]: 'HTML',
  [CATEGORY.CSS]: 'CSS',
  [CATEGORY.JAVASCRIPT]: 'JavaScript',
  [CATEGORY.REACT]: 'React',
  [CATEGORY.NODE]: 'Node',
  [CATEGORY.SECURITY]: 'Security',
};
export const categoryColor = {
  [CATEGORY.ALL]: '',
  [CATEGORY.HTML]: 'border-blue-700',
  [CATEGORY.CSS]: 'border-green-700',
  [CATEGORY.JAVASCRIPT]: 'border-pink-700',
  [CATEGORY.REACT]: 'border-red-700',
  [CATEGORY.NODE]: 'border-yellow-700',
  [CATEGORY.SECURITY]: 'border-purple-700',
};
