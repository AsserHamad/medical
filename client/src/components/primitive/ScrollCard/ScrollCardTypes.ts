export interface ScrollCardProps {
    title: {
        en: string,
        ar: string
    },
    description: {
        en: string,
        ar: string
    },
    price: {
        en: string,
        ar: string
    },
    color: string,
    onClick: VoidFunction,
    selected: boolean
}