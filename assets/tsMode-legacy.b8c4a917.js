System.register(["./index-legacy.f19a3067.js","./preload-helper-legacy.1d617001.js","./index-legacy.cf8f704b.js","./index-legacy.f2a465ed.js","./useAnimate-legacy.7eef3c2c.js","./editorWorker-legacy.a70776a5.js"],(function(e){"use strict";var t,n,r,i,s,o,a;return{setters:[function(e){t=e.e,n=e.U,r=e.M,i=e.a,s=e.R,o=e.l,a=e.t},function(){},function(){},function(){},function(){},function(){}],execute:function(){e({getJavaScriptWorker:function(){return new Promise((function(e,t){if(!O)return t("JavaScript not registered!");e(O)}))},getTypeScriptWorker:function(){return new Promise((function(e,t){if(!N)return t("TypeScript not registered!");e(N)}))},setupJavaScript:function(e){O=j(e,"javascript")},setupTypeScript:function(e){N=j(e,"typescript")}});var u,c,l=function(e,t,n,r){return new(n||(n=Promise))((function(i,s){function o(e){try{u(r.next(e))}catch(t){s(t)}}function a(e){try{u(r.throw(e))}catch(t){s(t)}}function u(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,a)}u((r=r.apply(e,t||[])).next())}))},d=function(e,t){var n,r,i,s,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return s={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function a(s){return function(a){return function(s){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,r&&(i=2&s[0]?r.return:s[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,s[1])).done)return i;switch(r=0,i&&(s=[2&s[0],i.value]),s[0]){case 0:case 1:i=s;break;case 4:return o.label++,{value:s[1],done:!1};case 5:o.label++,r=s[1],s=[0];continue;case 7:s=o.ops.pop(),o.trys.pop();continue;default:if(!((i=(i=o.trys).length>0&&i[i.length-1])||6!==s[0]&&2!==s[0])){o=0;continue}if(3===s[0]&&(!i||s[1]>i[0]&&s[1]<i[3])){o.label=s[1];break}if(6===s[0]&&o.label<i[1]){o.label=i[1],i=s;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(s);break}i[2]&&o.ops.pop(),o.trys.pop();continue}s=t.call(e,o)}catch(a){s=[6,a],r=0}finally{n=i=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,a])}}},f=function(){function e(e,t){var n=this;this._modeId=e,this._defaults=t,this._worker=null,this._client=null,this._configChangeListener=this._defaults.onDidChange((function(){return n._stopWorker()})),this._updateExtraLibsToken=0,this._extraLibsChangeListener=this._defaults.onDidExtraLibsChange((function(){return n._updateExtraLibs()}))}return e.prototype._stopWorker=function(){this._worker&&(this._worker.dispose(),this._worker=null),this._client=null},e.prototype.dispose=function(){this._configChangeListener.dispose(),this._extraLibsChangeListener.dispose(),this._stopWorker()},e.prototype._updateExtraLibs=function(){return l(this,void 0,void 0,(function(){var e,t;return d(this,(function(n){switch(n.label){case 0:return this._worker?(e=++this._updateExtraLibsToken,[4,this._worker.getProxy()]):[2];case 1:return t=n.sent(),this._updateExtraLibsToken!==e||t.updateExtraLibs(this._defaults.getExtraLibs()),[2]}}))}))},e.prototype._getClient=function(){var e=this;if(!this._client){this._worker=t.createWebWorker({moduleId:"vs/language/typescript/tsWorker",label:this._modeId,keepIdleModels:!0,createData:{compilerOptions:this._defaults.getCompilerOptions(),extraLibs:this._defaults.getExtraLibs(),customWorkerPath:this._defaults.workerOptions.customWorkerPath}});var n=this._worker.getProxy();this._defaults.getEagerModelSync()&&(n=n.then((function(n){return e._worker?e._worker.withSyncedResources(t.getModels().filter((function(t){return t.getModeId()===e._modeId})).map((function(e){return e.uri}))):n}))),this._client=n}return this._client},e.prototype.getLanguageServiceWorker=function(){for(var e,t=this,n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return this._getClient().then((function(t){e=t})).then((function(e){if(t._worker)return t._worker.withSyncedResources(n)})).then((function(t){return e}))},e}(),p={"lib.d.ts":!0,"lib.dom.d.ts":!0,"lib.dom.iterable.d.ts":!0,"lib.es2015.collection.d.ts":!0,"lib.es2015.core.d.ts":!0,"lib.es2015.d.ts":!0,"lib.es2015.generator.d.ts":!0,"lib.es2015.iterable.d.ts":!0,"lib.es2015.promise.d.ts":!0,"lib.es2015.proxy.d.ts":!0,"lib.es2015.reflect.d.ts":!0,"lib.es2015.symbol.d.ts":!0,"lib.es2015.symbol.wellknown.d.ts":!0,"lib.es2016.array.include.d.ts":!0,"lib.es2016.d.ts":!0,"lib.es2016.full.d.ts":!0,"lib.es2017.d.ts":!0,"lib.es2017.full.d.ts":!0,"lib.es2017.intl.d.ts":!0,"lib.es2017.object.d.ts":!0,"lib.es2017.sharedmemory.d.ts":!0,"lib.es2017.string.d.ts":!0,"lib.es2017.typedarrays.d.ts":!0,"lib.es2018.asyncgenerator.d.ts":!0,"lib.es2018.asynciterable.d.ts":!0,"lib.es2018.d.ts":!0,"lib.es2018.full.d.ts":!0,"lib.es2018.intl.d.ts":!0,"lib.es2018.promise.d.ts":!0,"lib.es2018.regexp.d.ts":!0,"lib.es2019.array.d.ts":!0,"lib.es2019.d.ts":!0,"lib.es2019.full.d.ts":!0,"lib.es2019.object.d.ts":!0,"lib.es2019.string.d.ts":!0,"lib.es2019.symbol.d.ts":!0,"lib.es2020.bigint.d.ts":!0,"lib.es2020.d.ts":!0,"lib.es2020.full.d.ts":!0,"lib.es2020.intl.d.ts":!0,"lib.es2020.promise.d.ts":!0,"lib.es2020.sharedmemory.d.ts":!0,"lib.es2020.string.d.ts":!0,"lib.es2020.symbol.wellknown.d.ts":!0,"lib.es2021.d.ts":!0,"lib.es2021.full.d.ts":!0,"lib.es2021.promise.d.ts":!0,"lib.es2021.string.d.ts":!0,"lib.es2021.weakref.d.ts":!0,"lib.es5.d.ts":!0,"lib.es6.d.ts":!0,"lib.esnext.d.ts":!0,"lib.esnext.full.d.ts":!0,"lib.esnext.intl.d.ts":!0,"lib.esnext.promise.d.ts":!0,"lib.esnext.string.d.ts":!0,"lib.esnext.weakref.d.ts":!0,"lib.scripthost.d.ts":!0,"lib.webworker.d.ts":!0,"lib.webworker.importscripts.d.ts":!0,"lib.webworker.iterable.d.ts":!0},g=(u=function(e,t){return(u=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}u(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),h=function(e,t,n,r){return new(n||(n=Promise))((function(i,s){function o(e){try{u(r.next(e))}catch(t){s(t)}}function a(e){try{u(r.throw(e))}catch(t){s(t)}}function u(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,a)}u((r=r.apply(e,t||[])).next())}))},m=function(e,t){var n,r,i,s,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return s={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function a(s){return function(a){return function(s){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,r&&(i=2&s[0]?r.return:s[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,s[1])).done)return i;switch(r=0,i&&(s=[2&s[0],i.value]),s[0]){case 0:case 1:i=s;break;case 4:return o.label++,{value:s[1],done:!1};case 5:o.label++,r=s[1],s=[0];continue;case 7:s=o.ops.pop(),o.trys.pop();continue;default:if(!((i=(i=o.trys).length>0&&i[i.length-1])||6!==s[0]&&2!==s[0])){o=0;continue}if(3===s[0]&&(!i||s[1]>i[0]&&s[1]<i[3])){o.label=s[1];break}if(6===s[0]&&o.label<i[1]){o.label=i[1],i=s;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(s);break}i[2]&&o.ops.pop(),o.trys.pop();continue}s=t.call(e,o)}catch(a){s=[6,a],r=0}finally{n=i=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,a])}}};function b(e,t,n){if(void 0===n&&(n=0),"string"==typeof e)return e;if(void 0===e)return"";var r="";if(n){r+=t;for(var i=0;i<n;i++)r+="  "}if(r+=e.messageText,n++,e.next)for(var s=0,o=e.next;s<o.length;s++)r+=b(o[s],t,n);return r}function v(e){return e?e.map((function(e){return e.text})).join(""):""}!function(e){e[e.None=0]="None",e[e.Block=1]="Block",e[e.Smart=2]="Smart"}(c||(c={}));var y,_=function(){function e(e){this._worker=e}return e.prototype._textSpanToRange=function(e,t){var n=e.getPositionAt(t.start),r=e.getPositionAt(t.start+t.length);return{startLineNumber:n.lineNumber,startColumn:n.column,endLineNumber:r.lineNumber,endColumn:r.column}},e}(),w=function(){function e(e){this._worker=e,this._libFiles={},this._hasFetchedLibFiles=!1,this._fetchLibFilesPromise=null}return e.prototype.isLibFile=function(e){return!!e&&0===e.path.indexOf("/lib.")&&!!p[e.path.slice(1)]},e.prototype.getOrCreateModel=function(e){var n=t.getModel(e);return n||(this.isLibFile(e)&&this._hasFetchedLibFiles?t.createModel(this._libFiles[e.path.slice(1)],"typescript",e):null)},e.prototype._containsLibFile=function(e){for(var t=0,n=e;t<n.length;t++){var r=n[t];if(this.isLibFile(r))return!0}return!1},e.prototype.fetchLibFilesIfNecessary=function(e){return h(this,void 0,void 0,(function(){return m(this,(function(t){switch(t.label){case 0:return this._containsLibFile(e)?[4,this._fetchLibFiles()]:[2];case 1:return t.sent(),[2]}}))}))},e.prototype._fetchLibFiles=function(){var e=this;return this._fetchLibFilesPromise||(this._fetchLibFilesPromise=this._worker().then((function(e){return e.getLibFiles()})).then((function(t){e._hasFetchedLibFiles=!0,e._libFiles=t}))),this._fetchLibFilesPromise},e}();!function(e){e[e.Warning=0]="Warning",e[e.Error=1]="Error",e[e.Suggestion=2]="Suggestion",e[e.Message=3]="Message"}(y||(y={}));var S=function(e){function s(n,r,i,s){var o=e.call(this,s)||this;o._libFiles=n,o._defaults=r,o._selector=i,o._disposables=[],o._listener=Object.create(null);var a=function(e){if(e.getModeId()===i){var n,r=function(){o._defaults.getDiagnosticsOptions().onlyVisible?e.isAttachedToEditor()&&o._doValidate(e):o._doValidate(e)},s=e.onDidChangeContent((function(){clearTimeout(n),n=setTimeout(r,500)})),a=e.onDidChangeAttached((function(){o._defaults.getDiagnosticsOptions().onlyVisible&&(e.isAttachedToEditor()?r():t.setModelMarkers(e,o._selector,[]))}));o._listener[e.uri.toString()]={dispose:function(){s.dispose(),a.dispose(),clearTimeout(n)}},r()}},u=function(e){t.setModelMarkers(e,o._selector,[]);var n=e.uri.toString();o._listener[n]&&(o._listener[n].dispose(),delete o._listener[n])};o._disposables.push(t.onDidCreateModel((function(e){return a(e)}))),o._disposables.push(t.onWillDisposeModel(u)),o._disposables.push(t.onDidChangeModelLanguage((function(e){u(e.model),a(e.model)}))),o._disposables.push({dispose:function(){for(var e=0,n=t.getModels();e<n.length;e++){var r=n[e];u(r)}}});var c=function(){for(var e=0,n=t.getModels();e<n.length;e++){var r=n[e];u(r),a(r)}};return o._disposables.push(o._defaults.onDidChange(c)),o._disposables.push(o._defaults.onDidExtraLibsChange(c)),t.getModels().forEach((function(e){return a(e)})),o}return g(s,e),s.prototype.dispose=function(){this._disposables.forEach((function(e){return e&&e.dispose()})),this._disposables=[]},s.prototype._doValidate=function(e){return h(this,void 0,void 0,(function(){var r,i,s,o,a,u,c,l,d,f=this;return m(this,(function(p){switch(p.label){case 0:return[4,this._worker(e.uri)];case 1:return r=p.sent(),e.isDisposed()?[2]:(i=[],s=this._defaults.getDiagnosticsOptions(),o=s.noSyntaxValidation,a=s.noSemanticValidation,u=s.noSuggestionDiagnostics,o||i.push(r.getSyntacticDiagnostics(e.uri.toString())),a||i.push(r.getSemanticDiagnostics(e.uri.toString())),u||i.push(r.getSuggestionDiagnostics(e.uri.toString())),[4,Promise.all(i)]);case 2:return!(c=p.sent())||e.isDisposed()?[2]:(l=c.reduce((function(e,t){return t.concat(e)}),[]).filter((function(e){return-1===(f._defaults.getDiagnosticsOptions().diagnosticCodesToIgnore||[]).indexOf(e.code)})),d=l.map((function(e){return e.relatedInformation||[]})).reduce((function(e,t){return t.concat(e)}),[]).map((function(e){return e.file?n.parse(e.file.fileName):null})),[4,this._libFiles.fetchLibFilesIfNecessary(d)]);case 3:return p.sent(),e.isDisposed()||t.setModelMarkers(e,this._selector,l.map((function(t){return f._convertDiagnostics(e,t)}))),[2]}}))}))},s.prototype._convertDiagnostics=function(e,t){var n=t.start||0,i=t.length||1,s=e.getPositionAt(n),o=s.lineNumber,a=s.column,u=e.getPositionAt(n+i),c=u.lineNumber,l=u.column,d=[];return t.reportsUnnecessary&&d.push(r.Unnecessary),t.reportsDeprecated&&d.push(r.Deprecated),{severity:this._tsDiagnosticCategoryToMarkerSeverity(t.category),startLineNumber:o,startColumn:a,endLineNumber:c,endColumn:l,message:b(t.messageText,"\n"),code:t.code.toString(),tags:d,relatedInformation:this._convertRelatedInformation(e,t.relatedInformation)}},s.prototype._convertRelatedInformation=function(e,t){var r=this;if(!t)return[];var i=[];return t.forEach((function(t){var s=e;if(t.file){var o=n.parse(t.file.fileName);s=r._libFiles.getOrCreateModel(o)}if(s){var a=t.start||0,u=t.length||1,c=s.getPositionAt(a),l=c.lineNumber,d=c.column,f=s.getPositionAt(a+u),p=f.lineNumber,g=f.column;i.push({resource:s.uri,startLineNumber:l,startColumn:d,endLineNumber:p,endColumn:g,message:b(t.messageText,"\n")})}})),i},s.prototype._tsDiagnosticCategoryToMarkerSeverity=function(e){switch(e){case y.Error:return i.Error;case y.Message:return i.Info;case y.Warning:return i.Warning;case y.Suggestion:return i.Hint}return i.Info},s}(_),k=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return g(t,e),Object.defineProperty(t.prototype,"triggerCharacters",{get:function(){return["."]},enumerable:!1,configurable:!0}),t.prototype.provideCompletionItems=function(e,n,r,i){return h(this,void 0,void 0,(function(){var r,i,a,u,c,l;return m(this,(function(d){switch(d.label){case 0:return r=e.getWordUntilPosition(n),i=new s(n.lineNumber,r.startColumn,n.lineNumber,r.endColumn),a=e.uri,u=e.getOffsetAt(n),[4,this._worker(a)];case 1:return c=d.sent(),e.isDisposed()?[2]:[4,c.getCompletionsAtPosition(a.toString(),u)];case 2:return!(l=d.sent())||e.isDisposed()?[2]:[2,{suggestions:l.entries.map((function(r){var c,l=i;if(r.replacementSpan){var d=e.getPositionAt(r.replacementSpan.start),f=e.getPositionAt(r.replacementSpan.start+r.replacementSpan.length);l=new s(d.lineNumber,d.column,f.lineNumber,f.column)}var p=[];return-1!==(null===(c=r.kindModifiers)||void 0===c?void 0:c.indexOf("deprecated"))&&p.push(o.CompletionItemTag.Deprecated),{uri:a,position:n,offset:u,range:l,label:r.name,insertText:r.name,sortText:r.sortText,kind:t.convertKind(r.kind),tags:p}}))}]}}))}))},t.prototype.resolveCompletionItem=function(e,n){return h(this,void 0,void 0,(function(){var n,r,i,s,o;return m(this,(function(a){switch(a.label){case 0:return r=(n=e).uri,i=n.position,s=n.offset,[4,this._worker(r)];case 1:return[4,a.sent().getCompletionEntryDetails(r.toString(),s,n.label)];case 2:return(o=a.sent())?[2,{uri:r,position:i,label:o.name,kind:t.convertKind(o.kind),detail:v(o.displayParts),documentation:{value:t.createDocumentationString(o)}}]:[2,n]}}))}))},t.convertKind=function(e){switch(e){case A.primitiveType:case A.keyword:return o.CompletionItemKind.Keyword;case A.variable:case A.localVariable:return o.CompletionItemKind.Variable;case A.memberVariable:case A.memberGetAccessor:case A.memberSetAccessor:return o.CompletionItemKind.Field;case A.function:case A.memberFunction:case A.constructSignature:case A.callSignature:case A.indexSignature:return o.CompletionItemKind.Function;case A.enum:return o.CompletionItemKind.Enum;case A.module:return o.CompletionItemKind.Module;case A.class:return o.CompletionItemKind.Class;case A.interface:return o.CompletionItemKind.Interface;case A.warning:return o.CompletionItemKind.File}return o.CompletionItemKind.Property},t.createDocumentationString=function(e){var t=v(e.documentation);if(e.tags)for(var n=0,r=e.tags;n<r.length;n++)t+="\n\n"+x(r[n]);return t},t}(_);function x(e){var t="*@"+e.name+"*";if("param"===e.name&&e.text){var n=e.text,r=n[0],i=n.slice(1);t+="`"+r.text+"`",i.length>0&&(t+=" — "+i.map((function(e){return e.text})).join(" "))}else e.text&&(t+=" — "+e.text);return t}var C=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.signatureHelpTriggerCharacters=["(",","],t}return g(t,e),t._toSignatureHelpTriggerReason=function(e){switch(e.triggerKind){case o.SignatureHelpTriggerKind.TriggerCharacter:return e.triggerCharacter?e.isRetrigger?{kind:"retrigger",triggerCharacter:e.triggerCharacter}:{kind:"characterTyped",triggerCharacter:e.triggerCharacter}:{kind:"invoked"};case o.SignatureHelpTriggerKind.ContentChange:return e.isRetrigger?{kind:"retrigger"}:{kind:"invoked"};case o.SignatureHelpTriggerKind.Invoke:default:return{kind:"invoked"}}},t.prototype.provideSignatureHelp=function(e,n,r,i){return h(this,void 0,void 0,(function(){var r,s,o,a,u;return m(this,(function(c){switch(c.label){case 0:return r=e.uri,s=e.getOffsetAt(n),[4,this._worker(r)];case 1:return o=c.sent(),e.isDisposed()?[2]:[4,o.getSignatureHelpItems(r.toString(),s,{triggerReason:t._toSignatureHelpTriggerReason(i)})];case 2:return!(a=c.sent())||e.isDisposed()?[2]:(u={activeSignature:a.selectedItemIndex,activeParameter:a.argumentIndex,signatures:[]},a.items.forEach((function(e){var t={label:"",parameters:[]};t.documentation={value:v(e.documentation)},t.label+=v(e.prefixDisplayParts),e.parameters.forEach((function(n,r,i){var s=v(n.displayParts),o={label:s,documentation:{value:v(n.documentation)}};t.label+=s,t.parameters.push(o),r<i.length-1&&(t.label+=v(e.separatorDisplayParts))})),t.label+=v(e.suffixDisplayParts),u.signatures.push(t)})),[2,{value:u,dispose:function(){}}])}}))}))},t}(_),D=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return g(t,e),t.prototype.provideHover=function(e,t,n){return h(this,void 0,void 0,(function(){var n,r,i,s,o,a,u;return m(this,(function(c){switch(c.label){case 0:return n=e.uri,r=e.getOffsetAt(t),[4,this._worker(n)];case 1:return i=c.sent(),e.isDisposed()?[2]:[4,i.getQuickInfoAtPosition(n.toString(),r)];case 2:return!(s=c.sent())||e.isDisposed()?[2]:(o=v(s.documentation),a=s.tags?s.tags.map((function(e){return x(e)})).join("  \n\n"):"",u=v(s.displayParts),[2,{range:this._textSpanToRange(e,s.textSpan),contents:[{value:"```typescript\n"+u+"\n```\n"},{value:o+(a?"\n\n"+a:"")}]}])}}))}))},t}(_),F=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return g(t,e),t.prototype.provideDocumentHighlights=function(e,t,n){return h(this,void 0,void 0,(function(){var n,r,i,s,a=this;return m(this,(function(u){switch(u.label){case 0:return n=e.uri,r=e.getOffsetAt(t),[4,this._worker(n)];case 1:return i=u.sent(),e.isDisposed()?[2]:[4,i.getOccurrencesAtPosition(n.toString(),r)];case 2:return!(s=u.sent())||e.isDisposed()?[2]:[2,s.map((function(t){return{range:a._textSpanToRange(e,t.textSpan),kind:t.isWriteAccess?o.DocumentHighlightKind.Write:o.DocumentHighlightKind.Text}}))]}}))}))},t}(_),I=function(e){function r(t,n){var r=e.call(this,n)||this;return r._libFiles=t,r}return g(r,e),r.prototype.provideDefinition=function(e,r,i){return h(this,void 0,void 0,(function(){var i,s,o,u,c,l,d,f,p,g,h,b;return m(this,(function(m){switch(m.label){case 0:return i=e.uri,s=e.getOffsetAt(r),[4,this._worker(i)];case 1:return o=m.sent(),e.isDisposed()?[2]:[4,o.getDefinitionAtPosition(i.toString(),s)];case 2:return!(u=m.sent())||e.isDisposed()?[2]:[4,this._libFiles.fetchLibFilesIfNecessary(u.map((function(e){return n.parse(e.fileName)})))];case 3:if(m.sent(),e.isDisposed())return[2];for(c=[],l=0,d=u;l<d.length;l++)if(f=d[l],p=n.parse(f.fileName),g=this._libFiles.getOrCreateModel(p))c.push({uri:p,range:this._textSpanToRange(g,f.textSpan)});else if(h=a.getExtraLibs()[f.fileName])return b=t.createModel(h.content,"typescript",p),[2,{uri:p,range:this._textSpanToRange(b,f.textSpan)}];return[2,c]}}))}))},r}(_),T=function(e){function t(t,n){var r=e.call(this,n)||this;return r._libFiles=t,r}return g(t,e),t.prototype.provideReferences=function(e,t,r,i){return h(this,void 0,void 0,(function(){var r,i,s,o,a,u,c,l,d,f;return m(this,(function(p){switch(p.label){case 0:return r=e.uri,i=e.getOffsetAt(t),[4,this._worker(r)];case 1:return s=p.sent(),e.isDisposed()?[2]:[4,s.getReferencesAtPosition(r.toString(),i)];case 2:return!(o=p.sent())||e.isDisposed()?[2]:[4,this._libFiles.fetchLibFilesIfNecessary(o.map((function(e){return n.parse(e.fileName)})))];case 3:if(p.sent(),e.isDisposed())return[2];for(a=[],u=0,c=o;u<c.length;u++)l=c[u],d=n.parse(l.fileName),(f=this._libFiles.getOrCreateModel(d))&&a.push({uri:d,range:this._textSpanToRange(f,l.textSpan)});return[2,a]}}))}))},t}(_),P=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return g(t,e),t.prototype.provideDocumentSymbols=function(e,t){return h(this,void 0,void 0,(function(){var t,n,r,i,s,a=this;return m(this,(function(u){switch(u.label){case 0:return t=e.uri,[4,this._worker(t)];case 1:return n=u.sent(),e.isDisposed()?[2]:[4,n.getNavigationBarItems(t.toString())];case 2:return!(r=u.sent())||e.isDisposed()?[2]:(i=function(t,n,r){var s={name:n.text,detail:"",kind:L[n.kind]||o.SymbolKind.Variable,range:a._textSpanToRange(e,n.spans[0]),selectionRange:a._textSpanToRange(e,n.spans[0]),tags:[]};if(r&&(s.containerName=r),n.childItems&&n.childItems.length>0)for(var u=0,c=n.childItems;u<c.length;u++){var l=c[u];i(t,l,s.name)}t.push(s)},s=[],r.forEach((function(e){return i(s,e)})),[2,s])}}))}))},t}(_),A=function(){function e(){}return e.unknown="",e.keyword="keyword",e.script="script",e.module="module",e.class="class",e.interface="interface",e.type="type",e.enum="enum",e.variable="var",e.localVariable="local var",e.function="function",e.localFunction="local function",e.memberFunction="method",e.memberGetAccessor="getter",e.memberSetAccessor="setter",e.memberVariable="property",e.constructorImplementation="constructor",e.callSignature="call",e.indexSignature="index",e.constructSignature="construct",e.parameter="parameter",e.typeParameter="type parameter",e.primitiveType="primitive type",e.label="label",e.alias="alias",e.const="const",e.let="let",e.warning="warning",e}(),L=Object.create(null);L[A.module]=o.SymbolKind.Module,L[A.class]=o.SymbolKind.Class,L[A.enum]=o.SymbolKind.Enum,L[A.interface]=o.SymbolKind.Interface,L[A.memberFunction]=o.SymbolKind.Method,L[A.memberVariable]=o.SymbolKind.Property,L[A.memberGetAccessor]=o.SymbolKind.Property,L[A.memberSetAccessor]=o.SymbolKind.Property,L[A.variable]=o.SymbolKind.Variable,L[A.const]=o.SymbolKind.Variable,L[A.localVariable]=o.SymbolKind.Variable,L[A.variable]=o.SymbolKind.Variable,L[A.function]=o.SymbolKind.Function,L[A.localFunction]=o.SymbolKind.Function;var O,N,E=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return g(t,e),t._convertOptions=function(e){return{ConvertTabsToSpaces:e.insertSpaces,TabSize:e.tabSize,IndentSize:e.tabSize,IndentStyle:c.Smart,NewLineCharacter:"\n",InsertSpaceAfterCommaDelimiter:!0,InsertSpaceAfterSemicolonInForStatements:!0,InsertSpaceBeforeAndAfterBinaryOperators:!0,InsertSpaceAfterKeywordsInControlFlowStatements:!0,InsertSpaceAfterFunctionKeywordForAnonymousFunctions:!0,InsertSpaceAfterOpeningAndBeforeClosingNonemptyParenthesis:!1,InsertSpaceAfterOpeningAndBeforeClosingNonemptyBrackets:!1,InsertSpaceAfterOpeningAndBeforeClosingTemplateStringBraces:!1,PlaceOpenBraceOnNewLineForControlBlocks:!1,PlaceOpenBraceOnNewLineForFunctions:!1}},t.prototype._convertTextChanges=function(e,t){return{text:t.newText,range:this._textSpanToRange(e,t.span)}},t}(_),K=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return g(t,e),t.prototype.provideDocumentRangeFormattingEdits=function(e,t,n,r){return h(this,void 0,void 0,(function(){var r,i,s,o,a,u=this;return m(this,(function(c){switch(c.label){case 0:return r=e.uri,i=e.getOffsetAt({lineNumber:t.startLineNumber,column:t.startColumn}),s=e.getOffsetAt({lineNumber:t.endLineNumber,column:t.endColumn}),[4,this._worker(r)];case 1:return o=c.sent(),e.isDisposed()?[2]:[4,o.getFormattingEditsForRange(r.toString(),i,s,E._convertOptions(n))];case 2:return!(a=c.sent())||e.isDisposed()?[2]:[2,a.map((function(t){return u._convertTextChanges(e,t)}))]}}))}))},t}(E),M=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return g(t,e),Object.defineProperty(t.prototype,"autoFormatTriggerCharacters",{get:function(){return[";","}","\n"]},enumerable:!1,configurable:!0}),t.prototype.provideOnTypeFormattingEdits=function(e,t,n,r,i){return h(this,void 0,void 0,(function(){var i,s,o,a,u=this;return m(this,(function(c){switch(c.label){case 0:return i=e.uri,s=e.getOffsetAt(t),[4,this._worker(i)];case 1:return o=c.sent(),e.isDisposed()?[2]:[4,o.getFormattingEditsAfterKeystroke(i.toString(),s,n,E._convertOptions(r))];case 2:return!(a=c.sent())||e.isDisposed()?[2]:[2,a.map((function(t){return u._convertTextChanges(e,t)}))]}}))}))},t}(E),R=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return g(t,e),t.prototype.provideCodeActions=function(e,t,n,r){return h(this,void 0,void 0,(function(){var r,i,s,o,a,u,c,l=this;return m(this,(function(d){switch(d.label){case 0:return r=e.uri,i=e.getOffsetAt({lineNumber:t.startLineNumber,column:t.startColumn}),s=e.getOffsetAt({lineNumber:t.endLineNumber,column:t.endColumn}),o=E._convertOptions(e.getOptions()),a=n.markers.filter((function(e){return e.code})).map((function(e){return e.code})).map(Number),[4,this._worker(r)];case 1:return u=d.sent(),e.isDisposed()?[2]:[4,u.getCodeFixesAtPosition(r.toString(),i,s,a,o)];case 2:return!(c=d.sent())||e.isDisposed()?[2,{actions:[],dispose:function(){}}]:[2,{actions:c.filter((function(e){return 0===e.changes.filter((function(e){return e.isNewFile})).length})).map((function(t){return l._tsCodeFixActionToMonacoCodeAction(e,n,t)})),dispose:function(){}}]}}))}))},t.prototype._tsCodeFixActionToMonacoCodeAction=function(e,t,n){for(var r=[],i=0,s=n.changes;i<s.length;i++)for(var o=0,a=s[i].textChanges;o<a.length;o++){var u=a[o];r.push({resource:e.uri,edit:{range:this._textSpanToRange(e,u.span),text:u.newText}})}return{title:n.description,edit:{edits:r},diagnostics:t.markers,kind:"quickfix"}},t}(E),W=function(e){function r(){return null!==e&&e.apply(this,arguments)||this}return g(r,e),r.prototype.provideRenameEdits=function(e,r,i,s){return h(this,void 0,void 0,(function(){var s,o,a,u,c,l,d,f,p,g,h,b;return m(this,(function(m){switch(m.label){case 0:return s=e.uri,o=s.toString(),a=e.getOffsetAt(r),[4,this._worker(s)];case 1:return u=m.sent(),e.isDisposed()?[2]:[4,u.getRenameInfo(o,a,{allowRenameOfImportPath:!1})];case 2:if(!1===(c=m.sent()).canRename)return[2,{edits:[],rejectReason:c.localizedErrorMessage}];if(void 0!==c.fileToRename)throw new Error("Renaming files is not supported.");return[4,u.findRenameLocations(o,a,!1,!1,!1)];case 3:if(!(l=m.sent())||e.isDisposed())return[2];for(d=[],f=0,p=l;f<p.length;f++){if(g=p[f],h=n.parse(g.fileName),!(b=t.getModel(h)))throw new Error("Unknown URI "+h+".");d.push({resource:h,edit:{range:this._textSpanToRange(b,g.textSpan),text:i}})}return[2,{edits:d}]}}))}))},r}(_);function j(e,t){var n=new f(t,e),r=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return n.getLanguageServiceWorker.apply(n,e)},i=new w(r);return o.registerCompletionItemProvider(t,new k(r)),o.registerSignatureHelpProvider(t,new C(r)),o.registerHoverProvider(t,new D(r)),o.registerDocumentHighlightProvider(t,new F(r)),o.registerDefinitionProvider(t,new I(i,r)),o.registerReferenceProvider(t,new T(i,r)),o.registerDocumentSymbolProvider(t,new P(r)),o.registerDocumentRangeFormattingEditProvider(t,new K(r)),o.registerOnTypeFormattingEditProvider(t,new M(r)),o.registerCodeActionProvider(t,new R(r)),o.registerRenameProvider(t,new W(r)),new S(i,e,t,r),r}}}}));
