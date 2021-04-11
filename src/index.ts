import { CondensateCommits } from '@uprtcl/evees';
import { StoreStub } from './stubs/store';

console.log('Hello world');

const store = new StoreStub();
const a = new CondensateCommits(store, []);

console.log(a);
