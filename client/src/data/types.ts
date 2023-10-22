export type Course = {
    id: string
    courseTitle: string
    documents: Document[]
    instructorName?: string
    schedule?: string
    importantNotes?: {
        title: string
        description: string
    }[]
}

export type Document = {
    id: string
    name: string
}