
const Header = (props) => {

    return (
        <div className={"header-wrap"}>
            <span style={{color: "white", fontSize: "20px"}}>logo</span>
            <form>
                <input type={"text"} />
                <button>search</button>
            </form>
        </div>
    )
}

export default Header;