import configureMockStore from 'redux-mock-store';
import * as Redux from 'react-redux';

export const mockSelectors = (key,storeValues) => {

    const res ={}
    res[key]={}
    res[key]={...storeValues}
    const mockStore = configureMockStore()(res)
    //
    // const mockStore = configureMockStore()({
    //     player: {
    //         isBuffering: false,
    //         ...storeValues
    //     },
    // });

    jest
        .spyOn(Redux, 'useSelector')
        .mockImplementation(callback => {
            return  callback(mockStore.getState());

        });



};
