import React from 'react';

type ButtonPropsType = {
    name: string
    callBack: () => void
    disabled: boolean

}

export const Button = (props: ButtonPropsType) => {

    const onClickHandler = () => {
        props.callBack()
    }
    return (
        <button disabled={props.disabled} onClick={onClickHandler}>{props.name}</button>
    );
};
