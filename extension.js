"use strict"
//Importing Native Modules 
const ExtensionUtils = imports.misc.extensionUtils;
const ME = ExtensionUtils.getCurrentExtension();

//Importing from current folder
const panel = ME.imports.PanelButton;

//Importing Gnome UI
const Main = imports.ui.main;

class Extension {
    constructor() {
        this.button = new panel.Button();
        global.GnomeTopPanel = Main.panel;
    }


    enable() {


        global.GnomeTopPanel._rightBox.insert_child_at_index(this.button, 0);
        panel._showHello();
    }


    disable() {
        global.GnomeTopPanel._rightBox.remove_child(this.button);
    }

}

function init() {
    return new Extension();
}
