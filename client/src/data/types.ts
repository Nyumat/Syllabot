export type Course = {
    id: string
    courseTitle: string
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