export type Course = {
   _id: string
   chat?: {
      text: string;
      bot: boolean;
      date?: string;
   }[];
   files?: {
      title: string;
      description: string;
   }[];
   courseDetails?: {
      courseTitle: string;
      instructorName?: string;
      classTimes?: string;
      importantNotes: {
         title: string;
         description: string;
      }[];
   }
};

export type PresetType = {
   name: String;
};

export type ChatType = {
   content: String;
   isUser: Boolean;
};
