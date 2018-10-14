//Importing Gnome-Shell UI
const Main = imports.ui.main;

//Importing Custom Project files
const ExtensionUtils = imports.misc.extensionUtils;
const ME = ExtensionUtils.getCurrentExtension();

const ext = ME.imports.PanelButton;


class Extension {
    constructor() {
        this.label = null;
        this.button = null;
    }

    enable() {
        this.button = new PanelButton();
        this.icon = new ButtonIcon();


        this.button.set_child(this.icon);
        // Use panel from Main namespace to insert button at the beginning of panel's right box.
        Main.panel._rightBox.insert_child_at_index(this.button, 0);
    }


    disable() {
        Main.panel._rightBox.remove_child(this.button);
    }
};


function init() {
    return new ext.Extension();
}
