import React from 'react'
import { atom, RecoilRoot, selector, useRecoilValue } from 'recoil';
import axios from 'axios'
import { ErrorBoundary } from './ErrorBoundary';

// const tableOfUsers = [{ name: 'Jin' }, { name: 'David' }]

const currentUserIDState = atom({
    key: 'CurrentUserID',
    default: 1,
});

// const currentUserNameState = selector({
//     key: 'CurrentUserName',
//     get: ({ get }) => {
//         return tableOfUsers[get(currentUserIDState)].name;
//     },
// });

const currentUserNameQuery = selector({
    key: 'CurrentUserName',
    get: async ({ get }) => {
        const response = await axios.get(`api/user-name?id=${get(currentUserIDState)}`)
        return response.data.name;
    },
});

function CurrentUserInfo() {
    const userName = useRecoilValue(currentUserNameQuery);
    return <div>{userName}</div>;
}

export default function MyApp() {
    return (
        <ErrorBoundary>
            <React.Suspense fallback={<div>Loading...</div>}>
                <CurrentUserInfo />
            </React.Suspense>
        </ErrorBoundary>
    );
}