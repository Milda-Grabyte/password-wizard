import english from './en.json';
import spanish from './es.json';

const locale = navigator.language;
const language = locale === 'es-ES' ? spanish : english;

export default language;
