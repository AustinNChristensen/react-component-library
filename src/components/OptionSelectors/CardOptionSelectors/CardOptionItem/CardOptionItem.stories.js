import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { storiesOf } from '@storybook/react';
import { CardOptionItem } from './CardOptionItem';

storiesOf('CardOptionItem', module)
    .add('unselected', () => (
        <>
            <CardOptionItem
                title='Trial'
                callout='1 GB'
                secondary={'$5 / mo'}
                selected={false}
            />
        </>
    ))
    .add('selected', () => (
        <>
            <CardOptionItem
                title='Trial'
                callout='1 GB'
                secondary={'$5 / mo'}
                selected={true}
            />
        </>
    ));