import React, { ReactElement } from 'react';
import './App.css';

export const App = (): ReactElement => {
    return (
        <div className='App'>
            <header className='App-header'>
                <p>
                    Run <code>npm run startStorybook</code> to view React Component Library
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
            </header>
        </div>
    );
};