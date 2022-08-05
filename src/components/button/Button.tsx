import React from 'react';

export type ButtonPropsType = {
    text: string
}

export const Button = (props: ButtonPropsType) => {
    return (
        <div>
            {props.text}
        </div>
    );
};
