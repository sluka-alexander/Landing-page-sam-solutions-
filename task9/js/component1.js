function component1() {
    let el = document.createElement('div');
    el.innerHTML = `<div class="about_me_container">
            <div class="paragraph">
                <div class="pause"></div>
                <h1>About me</h1>
            </div>
            <div class="output_info">
                <h2>I'm focused on solving problems by creating meaningful experience through design. I love to take new
                    challenge and am able to take ideas from concept to wireframe to prototype to production.
                </h2>
            </div>
        </div>
`;

    return el;
}