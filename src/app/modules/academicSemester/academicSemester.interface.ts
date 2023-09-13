import { Model } from 'mongoose';

export type Month = 'January' | 'February' | 'March' | 'April' | 'May' | 'June' | 'July' | 'August' | 'September' | 'October' | 'November' | 'December';
export type academicSemesterTitle = 'Autumn' | 'Summer' | 'Fall';
export type academicSemesterCode = '01' | '02' | '03';
type IAcademicSemester = {
    title: academicSemesterTitle
    year: number;
    code: academicSemesterCode,
    startMonth: Month;
    endMonth: Month;
};

type AcademicSemesterModel = Model<IAcademicSemester>;

// Export the types
export { AcademicSemesterModel, IAcademicSemester };

