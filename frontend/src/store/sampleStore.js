import { create } from 'zustand'

export const useCounterStore = create( (set) => ({
    count: 0,
    increment: () => {
        set({count: 1})
    },
    decrement: () => {},
}))