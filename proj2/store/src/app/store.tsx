import { configureStore } from '@reduxjs/toolkit';
import { Provider, TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { pokemonSlice } from '../features/pokemon/pokemonSlice';

const store = configureStore({
    reducer: {
        pokemon: pokemonSlice.reducer
    }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export function useStore() {
    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();
    return {


    };
}

type ReactText = string | number;
type ReactChild = ReactElement | ReactText;

interface ReactNodeArray extends Array<ReactNode> { }
type ReactFragment = {} | ReactNodeArray;
type ReactNode = ReactChild | ReactFragment | ReactPortal | boolean | null | undefined;

type Props = {
    children: ReactNode
}

export function StoreProvider({ children }: Props) {
    return <Provider store={store}> {children} < /Provider>;
}