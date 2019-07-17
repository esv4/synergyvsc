//
// Note: This example test is leveraging the Mocha test framework.
// Please refer to their documentation on https://mochajs.org/ for help.
//

// The module 'assert' provides assertion methods from node
import * as assert from 'assert';
import * as vscode from 'vscode';


// You can import and use all API from the 'vscode' module
// as well as import your extension to test it
// import * as vscode from 'vscode';
// import * as myExtension from '../extension';

describe('Languages', function() {
    describe('#getLanguages()', function() {
      it('should contain the definition of Synergy DBL', function(done) {
        vscode.languages.getLanguages().then(function (result : string[]) {
            if (result.indexOf("Synergy DBL") === -1)
            {
                done(new Error("Could not find language in collection"));
            } 
            else
            {
                done();
            }
        });
      });
    });
});