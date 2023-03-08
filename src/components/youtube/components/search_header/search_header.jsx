import React, {useRef} from 'react';
import styles from './search_header.module.css'


const SearchHeader = ({onSearch}) => {
    const CONTEXT_PATH = 'react-front';
    const inputRef = useRef();

    const handleSearch = () => {
        const value = inputRef.current.value;
        onSearch(value);
    }

    const onClick = () => {
        handleSearch();
    }

    const onKeypress = (event) => {
        if(event.key === 'Enter') {
            handleSearch();
        }
    }

    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <img
                    className={styles.img}
                    src={CONTEXT_PATH + "/images/logo.png"}
                    alt="logo"
                />
                <h1 className={styles.title}>Youtube</h1>
            </div>
            <input
                ref={inputRef}
                className={styles.input}
                type={"search"}
                placeholder={"Search ..."}
                onKeyPress={onKeypress}
            />
            <button className={styles.button} type={"submit"} onClick={onClick}>
                <img
                    className={styles.buttonImg}
                    src={CONTEXT_PATH + "/images/search.png"}
                    alt={"search"}
                />
            </button>
        </header>
    )
}

export default SearchHeader;