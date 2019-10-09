function component2() {
    let el = document.createElement('div');
    el.innerHTML = `<div class="about_me_container">
            <div class="paragraph">
                <div class="pause"></div>
                <h1>Work history</h1>
            </div>
            <div class="content_work_history">
                <div class="line_history">
                    <div class="item_circle">
                        <div class="circle"></div>
                        <div class="item_par">
                            <h2><b>UI/UX Designer</b> @Ajkerdeal</h2>
                        </div>
                    </div>
                </div>
                <div class="line_item">
                    <div class="line"></div>
                    <div class="line_item_text">
                        <h2>October 2018 - Now</h2><br>
                        <h2>Designed full UI of a brand new app from scratch, brought couple of new features to life
                            and improved few existing products' user experience.</h2>
                    </div>
                </div>
            </div>
            <div class="content_work_history">
                <div class="line_history">
                    <div class="item_circle">
                        <div class="circle"></div>
                        <div class="item_par">
                            <h2><b>UI/UX Designer</b> @Ajkerdeal</h2>
                        </div>
                    </div>
                </div>
                <div class="line_item">
                    <div class="line_last"></div>
                    <div class="line_item_text ">
                        <h2><p><b>SOFTWARE ENGINEER</b>@Beshto</p></h2>
                        <br>
                        <h2><p>September 2014 - Now</p></h2>
                        <br>
                        <h2><p>Involved in developing web apps &<br>
                            and improving existing service</h2>
                        </p><br>
                    </div>
                </div>
            </div>
        </div>
`;

    return el;
}