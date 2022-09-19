
export const types = {
    login: '[Auth] Login',
    logout: '[Auth] Logout',

    //Manejo de errores
    uiSetError: '[UI] set Error',
    uiRemoveError: '[UI] remove Error',

    //Manejo de las cargas de procesos
    uiStartLoading: '[UI] Start loading',
    uiFinishLoadin: '[UI] Finish loading',

    // Manejo de notas.
    notesAddNew: '[Notes] New note',
    notesActive: '[Notes] Set active note',
    notesLoad: '[Notes] Load notes',
    notesUpdated: '[Notes] Updated note',
    notesFileUrl: '[Notes] Updated image url',
    notesDelete: '[Notes] Delete note',
    notesLogoutCleaning: '[Notes] Logout Cleaning',
}