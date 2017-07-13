import messages from 'box-ui-elements/lib/i18n/en-US';

export default function getLocalizedMessage(id, replacements) {
    return messages[id].replace(/{\s*(\w+)\s*}/g, (match, key) => replacements[key]);
};
