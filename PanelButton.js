const St = imports.gi.St;

class Button extends St.Bin {
    constructor() {
        super();
        this.style_class = "panel-button";
        this.reactive = true;
        this.can_focus = true;
        this.x_fill = true;
        this.y_fill = false;
        this.track_hover = true;
    }
};

class ButtonIcon extends St.Icon {
    constructor() {
        super();
        this.style_class = "system-run-symbolic";
        this.icon_name = "system-run-symbolic";
        this.icon_size = 25;
    }

};
