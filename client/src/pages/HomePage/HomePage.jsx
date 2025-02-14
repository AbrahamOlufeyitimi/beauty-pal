import "./HomePage.scss";

const HomePage = () => {
    const buttons = [
        "🖼️ Schedule",
        "✏️ Dashboard",
        "💻 Income ",
        "🎓 Expense",
        "📊 Analyze data",
        "More"
    ];

    return (
        <div className="container">
            <h1 className="title">What would you like to do?</h1>

            <div className="action-buttons">
                {buttons.map((btn, index) => (
                    <button
                        key={index}
                        className="action-btn"
                        style={{ animationDelay: `${index * 0.2}s` }}
                    >
                        {btn}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default HomePage;





