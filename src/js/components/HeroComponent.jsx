const HeroComponent = ({ title, textBody, buttonText }) => {
    return (
        <section className="bg-light p-5">
            <div className="jumbotron">
                <h1 className="display-4">{title}</h1>
                <p className="lead">{textBody}</p>
                <p className="lead">
                    <a className="btn btn-primary btn-lg" href="#" role="button">{buttonText}</a>
                </p>
            </div>
        </section>
    );
};

export default HeroComponent;
