'use strict'

import * as vscode from 'vscode'

const INSERT_BEGINNING_OF_LINE = 'extension.insertBeginningOfLine'

export const commands_map = new Map<string, ( args: any ) => void>( [
	[ INSERT_BEGINNING_OF_LINE, ( option: any ) => { insertBeginningOfLine( option ) } ],
] )



function insertBeginningOfLine( option?: any ) {
	if ( !option ) {
		option = {}
	}
	const editor = vscode.window.activeTextEditor
	if ( !editor ) {
		vscode.window.showInformationMessage( 'No editor is active' )
		return
	}
	// console.log( './insert-beginning-of-line insertBeginningOfLine()!' )

	const defaultInsertWord = vscode.workspace.getConfiguration( "insertBeginningOfLine" ).get<string>( "defaultInsertWord" )

	const options: vscode.InputBoxOptions = {
		ignoreFocusOut: true,
		placeHolder: '\\t : tab, \\n : LF',
		prompt: 'Insert Word',
	}
	options.value = defaultInsertWord

	vscode.window.showInputBox( options ).then( inputInsertWord => {
		if ( !inputInsertWord ) {
			return
		}
		if ( !vscode.window.activeTextEditor ) {
			vscode.window.showInformationMessage( 'No editor is active' )
			return
		}
		// "\t" → tab, "(\r)?\n" -> LF だけ対応。
		const eol = editor.document.eol === vscode.EndOfLine.CRLF ? "\r\n" : "\n"
		inputInsertWord = inputInsertWord.replace( /\\t/g, "\t" ).replace( /(\\r)?\\n/g, eol )

		editor.edit( ed => {
			editor.selections.forEach( select => {
				const target_range = new vscode.Range( select.start.line, 0, select.end.line, select.end.character )

				let text = editor.document.getText( target_range )
				// 行頭と、改行後に入力語を入れる
				text = inputInsertWord + text.replace( /\n/g, "\n" + inputInsertWord )

				ed.replace( target_range, text )
			} )
		} )
	} )

}
