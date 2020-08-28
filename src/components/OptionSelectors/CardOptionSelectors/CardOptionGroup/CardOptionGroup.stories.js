import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { storiesOf } from '@storybook/react';
import {CardOptionGroup } from './CardOptionGroup';

storiesOf('CardOptionGroup', module)
    .add('selected item', () => (
        <>
            <CardOptionGroup />
        </>
    ))
    .add('all unselected', () => (
        <>
            <CardOptionGroup />
        </>
    ));