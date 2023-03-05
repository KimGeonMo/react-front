import React, {useRef} from 'react';

const InputForm = (props) => {
    const inputRef = useRef();
    const formRef = useRef();

    const onSubmit = (event) => {
        event.preventDefault();
        props.addHabit(inputRef.current.value);
        formRef.current.reset();
    }

    return (
        <form ref={formRef} className={"add-form"} onSubmit={onSubmit}>
            <input ref={inputRef} type={"text"} className={"add-input"} />
            <button className={"add-button"}>Add</button>
        </form>
    )
}

export default InputForm;