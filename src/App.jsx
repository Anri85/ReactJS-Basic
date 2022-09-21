// import logo from "./logo.svg";

function App({ name, comment, date, avatar }) {
    return (
        <div className="ui container comments">
            <div className="comment">
                <a href="/" className="avatar">
                    <img src={avatar} alt="avatar" />
                </a>
                <div className="content">
                    <a href="/" className="author">
                        {name}
                    </a>
                    <div className="metadata">
                        <span className="date">{date}</span>
                    </div>
                    <div className="text">{comment}</div>
                </div>
            </div>
        </div>
    );
}

export default App;
