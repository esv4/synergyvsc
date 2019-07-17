'use strict';

import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	context.subscriptions.push(vscode.commands.registerCommand('synergyvsc.synshell', () => {
		let term = vscode.window.createTerminal(`Synergy Shell`, 'C:\\windows\\system32\\cmd.exe', ['/k', 'c:\\code\\config\\envshell.bat']);
		term.show();
	}));
}

// this method is called when your extension is deactivated
export function deactivate() {}
