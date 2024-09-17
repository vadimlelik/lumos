import { create } from 'zustand'

interface StoreState {
	selectedName: string | null
	isModalOpen: boolean
	setSelectedName: (name: string) => void
	setIsModalOpen: (isOpen: boolean) => void
	firstScreenRef: React.RefObject<HTMLDivElement> | null
	setFirstScreenRef: (ref: React.RefObject<HTMLDivElement>) => void
	scrollToFirstScreen: () => void
}

export const useStore = create<StoreState>((set, get) => ({
	selectedName: null,
	isModalOpen: false,
	setSelectedName: (name) => set({ selectedName: name }),
	setIsModalOpen: (isOpen) => set({ isModalOpen: isOpen }),
	firstScreenRef: null,
	setFirstScreenRef: (ref) => set({ firstScreenRef: ref }),
	scrollToFirstScreen: () => {
		const ref = get().firstScreenRef
		if (ref?.current) {
			ref.current.scrollIntoView({ behavior: 'smooth' })
		}
	},
}))

export default useStore
