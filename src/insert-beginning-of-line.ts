'use strict'

import * as vscode from 'vscode'

const INSERT_BEGINNING_OF_LINE = 'extension.insertBeginningOfLine'

export const commands_map = new Map<string, ( args: any ) => void>( [
	[ INSERT_BEGINNING_OF_LINE, ( option: any ) => { insertBeginningOfLine( option ) } ],
] )



function insertBeginningOfLine( option?: any ) {
	if ( !option ) {
		option = {}
	}	const editor = vscode.window.activeTextEditor
	if ( !editor ) {
		vscode.window.showInformationMessage( 'No editor is active' )
		return
	}
	console.log( './insert-beginning-of-line insertBeginningOfLine()!' )

	const defaultHeaderWord = vscode.workspace.getConfiguration( "insertBeginningOfLine" ).get<string>( "defaultHeaderWord" )


/*

	// 選択部分は複数あり得る
	const selections = [ ...editor.selections ].sort( ( a, b ) => a.start.line - b.start.line )
	const lastSelection = selections[ selections.length - 1 ]
	const largestLineNumber = lastSelection.end.line + 1
	const largestLineNumberLength = largestLineNumber.toString().length

	let codeLine = ""
	let copyText = ""
	let tabSize: number = 4

	selections.forEach( ( selection, i ) => {

		if ( multipleSelectionCreateMultipleCodeBlocks || i === 0 ) {
			const topLineNumber = selection.start.line + 1
			placeHolderMap.set( "topLineNumber", { re: /\$\{topLineNumber\}/g, str: topLineNumber.toString() } )
			let codeBlockHeader = replacePlaceHolderMap( codeBlockHeaderFormat, placeHolderMap )
			codeLine = replacePlaceHolderMap( codeLineFormat, placeHolderMap )
			copyText += codeBlockHeader
		} else {
			let multipleSelectionsBoundalyMarker = replacePlaceHolderMap( multipleSelectionsBoundalyMarkerFormat, placeHolderMap )
			copyText += multipleSelectionsBoundalyMarker
		}

		for ( let n = selection.start.line; n <= selection.end.line; n += 1 ) {
			const number = leftPad( String( n + 1 ), largestLineNumberLength, ' ' )
			let line = document.lineAt( n ).text
			if ( forceSpaceIndent ) {
				//	強制的に先頭のインデントタブを空白に置き換える。置き換え幅はエディタの設定に従う
				line = line.replace( /^(\t+)/, function ( match: string, p1: string, offset: number, str: string ) {
					return ' '.repeat( p1.length * tabSize )
				} )
			}

			let c = codeLine.replace( "${LINENUMBER}", number )
			c = c.replace( "${CODE}", line )
			copyText += c
		}
		if ( multipleSelectionCreateMultipleCodeBlocks || i === selections.length - 1 ) {
			let codeBlockFooter = replacePlaceHolderMap( codeBlockFooterFormat, placeHolderMap )
			copyText += codeBlockFooter
		}
	// copy( copyText )
	 */


/* 		if ( !option ) {
			option = {}
		}
		const defaultSeparator = vscode.workspace.getConfiguration( "splitJoinText" ).get<string>( "defaultSeparator" )

		const options: vscode.InputBoxOptions = {
			ignoreFocusOut: true,
			placeHolder: 'separator letter',
			prompt: 'separator',
		}
		options.value = defaultSeparator

		vscode.window.showInputBox( options ).then( inputSeparatorCharacter => {
			if ( !inputSeparatorCharacter ) {
				return
			}
			if ( !vscode.window.activeTextEditor ) {
				vscode.window.showInformationMessage( 'No editor is active' )
				return
			}

			//	正規表現記号をエスケープする
			const separatorCharacter = escapeRegExp( inputSeparatorCharacter )
			const replaceRegexp = new RegExp( separatorCharacter, 'g' )
			// const replaceRegexp = new RegExp( inputSeparatorCharacter, 'g' )

			const editor: vscode.TextEditor = vscode.window.activeTextEditor

			const deleteSeparator = !!option.deleteSeparator
			//	カーソル行、選択行を取得する
			//	ソートして大きい行の方から置き換える
			const selections = [ ...editor.selections ].sort( ( a, b ) => -( a.start.line - b.start.line ) )

			//	選択にかかる行は先頭から最後までを置き換える

			selections.forEach( ( select ) => {
				let target_range = new vscode.Range( select.start, select.end )
				if ( select.isEmpty ) {
					// 選択範囲が無い。カーソル行を処理する
					const line = editor.document.lineAt( select.start.line )
					target_range = new vscode.Range( line.range.start, line.range.end )
				}

				let text = editor.document.getText( target_range )

				if ( deleteSeparator ) {
					text = text.replace( replaceRegexp, "\n" )
				} else {
					text = text.replace( replaceRegexp, separatorCharacter + "\n" )
				}

				//	置き換える
				editor.edit( ( ed ) => {
					ed.replace( target_range, text )
				} )
			} )
		} )
 */




}