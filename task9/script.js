let app = document.querySelector('#app');

let menu = document.querySelector('[data-role="menu"]');
const show_item = e => {

    app.innerHTML = '';

    var click = e.target;
    let check = click.dataset.target;
    switch (check) {
        case 'about_me':
            app.append(component1());
            break;
        case 'work_history':
            app.append(component2());
            break;
        case 'core_skillset':
            app.append(component3());
            break;
        case 'vendor':
            app.append(component4());
            break;
        case 'education':
            app.append(component5());
            break;
        default:
            break;
    }
}

menu.querySelectorAll('li').forEach(menuItem => {
    menuItem.addEventListener('click', show_item);
});


menu.querySelectorAll('li').forEach((menuItem) => {

    menuItem.addEventListener('keyup', e => {
        if (e.keyCode == 9) {
            show_item(e)
        }
    })
});


