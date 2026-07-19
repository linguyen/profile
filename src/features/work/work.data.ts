import type { Work } from './work.types'
import worksJson from '@/assets/data/works.json'

const imageModules = import.meta.glob<string>('@/assets/*', {
    eager: true,
    import: 'default',
})

function resolveImageUrl(image: string) {
    if (/^(https?:)?\/\//.test(image) || image.startsWith('/')) {
        return image
    }

    const fileName = image.split('/').pop()
    const assetPath = fileName ? `/src/assets/${fileName}` : ''

    return imageModules[assetPath] ?? image
}

export const works: Work[] = worksJson.map((work) => ({
    ...work,
    image: resolveImageUrl(work.image),
}))