import { Month, academicSemesterCode, academicSemesterTitle } from "./academicSemester.interface";

export const academicSemesterMonths: Month[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export const academicSemesterTitles: academicSemesterTitle[] = ['Autumn', 'Summer', 'Fall'];
export const academicSemesterCodes: academicSemesterCode[] = ['01', '02', '03']


export const academicSemesterTitleCodeMapper: {
    [key: string]: string;
} = {
    Autumn: '01',
    Summer: '02',
    Fall: '03',
};

export const academicSemesterFields = ['title', 'code', 'year'];
export const filterableFileds = ['searchTerm', 'title', 'code', 'year']