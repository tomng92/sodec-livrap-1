
// import 'rxjs/Rx'; // adds ALL RxJS statics & operators to Observable

// See node_module/rxjs/Rxjs.js
// Import just the rxjs statics and operators needed for THIS app.

/**
 *
 * Since this app only uses a few operators, it's better to import each Observable operator and static class method,
 * one-by-one, for a custom Observable implementation tuned precisely to the app's requirements. Put the import statements in one app/rxjs-operators.ts file.
 * Dec 05 2016.
 *
 *
 * Copié de https://angular.io/docs/ts/latest/guide/server-communication.html#enable-rxjs-operators
 */

// Statics
import 'rxjs/add/observable/throw';

// Operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toPromise';

