const HeroComponent = ({ title, textBody, buttonText }) => {
    return (
        <section className="bg-light p-5">
            <div class="jumbotron">
                <h1 class="display-4">{title}</h1>
                <p class="lead">{textBody}</p>
                <p class="lead">
                    <a class="btn btn-primary btn-lg" href="#" role="button">{buttonText}</a>
                </p>
            </div>
        </section>
    );
};

export default HeroComponent;
