const KEYS ={
    employees:'employees',
    employeeId:'employeeId'
}

export const getDepartmentCollection = ()=>([
    { id: 'australia', title: 'Australia' },
    { id: 'u.k', title: 'U.K.' },
    { id: 'canada', title: 'Canada' },
    { id: 'cyprus', title: 'Cyprus' },
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