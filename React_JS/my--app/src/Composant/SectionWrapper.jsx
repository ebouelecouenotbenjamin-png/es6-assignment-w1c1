const sectionWrapper = ({title, children, theme}) => {
    const style = {
        backgroundColor: theme === "dark" ? "#lalala" "#f9f9f9",
        color : theme === "dark" ? "#fff" : "#333",
        bordeRadius : "10px",
        padding: "20px",
        marginBottom: "20px"
    };

    return (
        <section style={style}>
            <h2 style={{borBottom: "2pt solid #9450"}}></h2>
        </section>
    )
};
export default sectionWrapper;
