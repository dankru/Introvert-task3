visibleWidgetNumber = 3;

widgetTestColorCoder = function () {
    var widget = this;
    this.code = null;

    this.yourVar = {};
    this.yourFunc = function () {
    };

    // вызывается один раз при инициализации виджета, в этой функции мы вешаем события на $(document)
    this.bind_actions = function () {
        //пример $(document).on('click', 'selector', function(){});
    };

    // вызывается каждый раз при переходе на страницу
    this.render = function () {
        $('.pipeline_status').not('.h-hidden').each(function (i, obj) {
            if (i + 1 === visibleWidgetNumber) {
                // get underline color
                let color = $(obj).find('.pipeline_status__head_line').css('color');
                // set text color
                $(obj).find('.pipeline_status__head_title').css('color', color);
            }
        });
    };

    // вызывается один раз при инициализации виджета, в этой функции мы загружаем нужные данные, стили и.т.п
    this.init = function () {

    };

    // метод загрузчик, не изменяется
    this.bootstrap = function (code) {
        widget.code = code;
        // если frontend_status не задан, то считаем что виджет выключен
        // var status = yadroFunctions.getSettings(code).frontend_status;
        var status = 1;

        if (status) {
            widget.init();
            widget.render();
            widget.bind_actions();
            $(document).on('widgets:load', function () {
                widget.render();
            });
        }
    }
};
// создание экземпляра виджета и регистрация в системных переменных Yadra
// widget-name - ИД и widgetTestColorCoder - уникальные названия виджета
yadroWidget.widgets['widget-name'] = new widgetTestColorCoder();
yadroWidget.widgets['widget-name'].bootstrap('widget-name');
