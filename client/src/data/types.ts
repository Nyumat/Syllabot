export type Course = {
    id: string
    courseTitle: string
    documents: Document[]
    instructorName?: string
    classTimes?: string
    importantNotes?: {
        title: string
        description: string
    }[]
}

export type Document = {
    id: string
    name: string
}