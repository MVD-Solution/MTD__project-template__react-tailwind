import { ReactComponent as All } from './../assets/resource/topics/all.svg';
import { ReactComponent as Css } from './../assets/resource/topics/css.svg';
import { ReactComponent as Html } from './../assets/resource/topics/html.svg';
import { ReactComponent as Js } from './../assets/resource/topics/js.svg';
import { ReactComponent as Node } from './../assets/resource/topics/node.svg';
import { ReactComponent as ReactSvg } from './../assets/resource/topics/react.svg';
import { ReactComponent as Security } from './../assets/resource/topics/security.svg';

export const TOPIC = {
  ALL: 'all',
  HTML: 'html',
  CSS: 'css',
  JAVASCRIPT: 'javascript',
  REACT: 'react',
  NODE: 'node',
  SECURITY: 'security',
};

export const listTopics = [
  { id: TOPIC.ALL, text: 'All', icon: All },
  { id: TOPIC.HTML, text: 'HTML', icon: Html },
  { id: TOPIC.CSS, text: 'CSS', icon: Css },
  { id: TOPIC.JAVASCRIPT, text: 'JavaScript', icon: Js },
  { id: TOPIC.REACT, text: 'React', icon: ReactSvg },
  { id: TOPIC.NODE, text: 'Node', icon: Node },
  { id: TOPIC.SECURITY, text: 'Security', icon: Security },
];
export const topicTable = {
  [TOPIC.ALL]: 'All',
  [TOPIC.HTML]: 'HTML',
  [TOPIC.CSS]: 'CSS',
  [TOPIC.JAVASCRIPT]: 'JavaScript',
  [TOPIC.REACT]: 'React',
  [TOPIC.NODE]: 'Node',
  [TOPIC.SECURITY]: 'Security',
};
