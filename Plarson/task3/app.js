function doBeforeAndAfterDOMContentLoaded(e) {
    document.addEventListener('readystatechange', () => {
        if (document.readyState === 'interactive') {
            e();
            document.addEventListener('DOMContentLoaded', () => {
                e()
            });
        }
    })
}

const randomFunction = () => {
    console.log('Код выполняется...!');
}

doBeforeAndAfterDOMContentLoaded(randomFunction)

document.addEventListener('DOMContentLoaded', () => {
    console.log('Дом загрузился');
})
