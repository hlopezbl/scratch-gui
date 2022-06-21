import React from 'react';
import {FormattedMessage} from 'react-intl';

import ml2scratchIconURL from './ml2scratch.png';
import ml2scratchInsetIconURL from './ml2scratch-small.png';

const translationMap = {
    'ja': {
        'gui.extension.ml2scratch.description': '機械学習を使う'
    },
    'ja-Hira': {
        'gui.extension.ml2scratch.description': 'きかいがくしゅうをつかう'
    }
};

const entry = {
    name: 'Machine Learning',
    extensionId: 'ml2scratch',
    extensionURL: 'https://champierre.github.io/ml2scratch/dist/ml2scratch.mjs',
    // collaborator: 'Brilliant',
    iconURL: ml2scratchIconURL,
    insetIconURL: ml2scratchInsetIconURL,
    description: (
        <FormattedMessage
            defaultMessage="Machine Learning Blocks."
            description="Description for ML2Scratch Blocks."
            id="gui.extension.ml2scratch.description"
        />
    ),
    featured: true,
    disabled: false,
    bluetoothRequired: false,
    internetConnectionRequired: true,
    helpLink: 'https://github.com/champierre/ml2scratch/',
    translationMap: translationMap
};

export {entry}; // loadable-extension needs this line.
export default entry;
