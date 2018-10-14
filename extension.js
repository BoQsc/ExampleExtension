//Importing Native Modules 
const ExtensionUtils = imports.misc.extensionUtils;
const ME = ExtensionUtils.getCurrentExtension();

//Importing Gnome-Shell UI
const Main = imports.ui.main;

//Importing Custom Project files
const PanelButton = ME.imports.PanelButton;


class Extension {
    constructor() {
        this.button = new PanelButton.Button();
        this.icon = new PanelButton.ButtonIcon();
        // Add icon inside the button
        this.button.set_child(this.icon);
    }

    enable() {
        // Use panel from Main namespace to insert button at the beginning of panel's right box.
        Main.panel._rightBox.insert_child_at_index(this.button, 0);
        button.connect('button-press-event', PanelButton._showHello);
    }


    disable() {
        Main.panel._rightBox.remove_child(this.button);
    }
};


function init() {
    return new Extension();
}
