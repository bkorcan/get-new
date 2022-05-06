import create from 'zustand'

const useStore = create(set => ({
  id:'101',
  setId: (v) => set(state => ({ id: v })),
}))

export {useStore}