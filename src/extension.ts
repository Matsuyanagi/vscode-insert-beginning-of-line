'use strict'
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode'
import { commands_map } from './insert-beginning-of-line'

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate( context: vscode.ExtensionContext ) {
    for ( const [ name, command ] of commands_map ) {
        context.subscriptions.push( vscode.commands.registerCommand( name, ( option: any ) => { command( option ) } ) )
    }
}


// this method is called when your extension is deactivated
export function deactivate() {
}