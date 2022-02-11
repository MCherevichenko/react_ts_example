const SOME_ACTION = 'SOME_ACTION';

const createAction = <T extends string>(type: T) => {
    const actionCreator = <T extends unknown>(payload: T) => ({ type, payload });
    actionCreator.toString = () => type;
    return actionCreator;
};

export const createSomeAction = createAction(SOME_ACTION);