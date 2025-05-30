import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import { AppDispatch, RootState } from '../store';

export const useAppDispatch = (): AppDispatch => useDispatch<AppDispatch>();

// Aliasing the useSelector to have types
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
