
// TODO: can electron tile it in that way automatically?
export function resize() {
    setTimeout( () => {
        const contentBounds = global.mainWindow.getContentBounds();
        global.currentView.setBounds({
            x: 50,
            y: 0,
            width: contentBounds.width-50,
            height: contentBounds.height,
        });
        global.menuView.setBounds({
            x: 0,
            y: 0,
            width: 50,
            height: contentBounds.height,
        });
    });
}