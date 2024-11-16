export interface Announcement {
  _id: string;
  title: string;
  courseId: Course;
  creatorId: User;
  content: string;
}

export interface User {
  name: string;
  email: string;
  photo: string;
  role: string;
  courseId?: Course;
}

type Question = {
  question: string;
  options: string[];
  answer: string;
};

export interface Quiz {
  _id: string;
  type: string;
  title: string;
  courseId: Course;
  creatorId: User;
  topic: string;
  questions: Question[];
  dueDate: string;
}

export interface Course {
  title: string;
  description: string;
}
