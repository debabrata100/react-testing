import { SAVE_COMMENT } from 'actions/types'
import { saveComment } from 'actions';

describe('saveComment', () => {
    let action;
    beforeEach(()=>{
        action = saveComment('new comment');
    });
    it('has the correct type', () => {
        expect(action.type).toEqual(SAVE_COMMENT);
    });
    it('has the correct payload', () => {
        expect(action.payload).toEqual('new comment');
    });
});