const KEYS ={
    employees:'employees',
    employeeId:'employeeId'
}

export const getStudyDestination = ()=>([
    { id: '1', title: 'Australia' },
    { id: '2', title: 'Canada' },
    { id: '3', title: 'U.K.' },
    { id: '4', title: 'Cyprus' },
])

export const getPreviousQualification = ()=>([
    { id: '1', title: 'Undergraduate' },
    { id: '2', title: 'Postgraduate' },
    { id: '3', title: 'Diploma' },
    { id: '4', title: 'Other' },
])


export const getEnglishTest = ()=>([
    { id: '1', title: 'IELTS' },
    { id: '2', title: 'UKVI IELTS' },
    { id: '3', title: 'PEARSON' },
    { id: '4', title: 'TOEFL' },
    { id: '5', title: 'Other' },
    { id: '6', title: 'No' },
])



export function insertEmployee(data) {
    let employees=getAllEmployees();
    data['id'] = generateEmployeeId()
    employees.push(data)
    localStorage.setItem(KEYS.employees,JSON.stringify(employees))
}

export function generateEmployeeId() {
    if (localStorage.getItem(KEYS.employeeId) == null)
        localStorage.setItem(KEYS.employeeId, '0')
    var id = parseInt(localStorage.getItem(KEYS.employeeId))
    localStorage.setItem(KEYS.employeeId, (++id).toString())
    return id;
}

export function getAllEmployees() {
    if (localStorage.getItem(KEYS.employees) == null)
        localStorage.setItem(KEYS.employees, JSON.stringify([]))
    return JSON.parse(localStorage.getItem(KEYS.employees));
}  