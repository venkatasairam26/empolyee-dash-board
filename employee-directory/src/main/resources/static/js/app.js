let currentPage = 1;
let pageSize = 10;
function renderEmployees() {
    const grid = document.getElementById('employeeGrid');
    const pagination = document.getElementById('pagination');
    const search = document.getElementById('search').value.toLowerCase();
    const dept = document.getElementById('filterDepartment').value;
    const role = document.getElementById('filterRole').value;
    const sort = document.getElementById('sort').value;

    let filtered = employees.filter(emp =>
        (emp.firstName.toLowerCase().includes(search) || emp.email.toLowerCase().includes(search)) &&
        (dept ? emp.department === dept : true) &&
        (role ? emp.role === role : true)
    );

    if (sort) {
        filtered.sort((a, b) => a[sort].localeCompare(b[sort]));
    }

    pageSize = parseInt(document.getElementById('pageSize').value);
    const totalPages = Math.ceil(filtered.length / pageSize);
    currentPage = Math.min(currentPage, totalPages) || 1;
    const start = (currentPage - 1) * pageSize;
    const paginated = filtered.slice(start, start + pageSize);

    grid.innerHTML = paginated.map(emp => `
        <div class="card">
          <h3>${emp.firstName} ${emp.lastName}</h3>
          <p>Email: ${emp.email}</p>
          <p>Department: ${emp.department}</p>
          <p>Role: ${emp.role}</p>
          <button onclick="editEmployee(${emp.id})">Edit</button>
          <button onclick="deleteEmployee(${emp.id})">Delete</button>
        </div>
      `).join('');

    pagination.innerHTML = Array.from({ length: totalPages }, (_, i) =>
        `<button onclick="gotoPage(${i + 1})">${i + 1}</button>`
    ).join('');
}

function showForm(id) {
    document.getElementById('employeeForm').style.display = 'block';
    if (id) {
        const emp = employees.find(e => e.id === id);
        document.getElementById('formTitle').textContent = 'Edit Employee';
        document.getElementById('employeeId').value = emp.id;
        document.getElementById('firstName').value = emp.firstName;
        document.getElementById('lastName').value = emp.lastName;
        document.getElementById('email').value = emp.email;
        document.getElementById('department').value = emp.department;
        document.getElementById('role').value = emp.role;
    } else {
        document.getElementById('formTitle').textContent = 'Add Employee';
        document.querySelector('form').reset();
    }
}

function hideForm() {
    document.getElementById('employeeForm').style.display = 'none';
}

function handleSubmit(event) {
    event.preventDefault();
    const id = document.getElementById('employeeId').value;
    const newEmployee = {
        id: id ? parseInt(id) : Date.now(),
        firstName: document.getElementById('firstName').value,
        lastName: document.getElementById('lastName').value,
        email: document.getElementById('email').value,
        department: document.getElementById('department').value,
        role: document.getElementById('role').value
    };

    if (id) {
        employees = employees.map(emp => emp.id === newEmployee.id ? newEmployee : emp);
    } else {
        employees.push(newEmployee);
    }

    hideForm();
    renderEmployees();
}

function editEmployee(id) {
    showForm(id);
}

function deleteEmployee(id) {
    if (confirm('Are you sure you want to delete this employee?')) {
        employees = employees.filter(emp => emp.id !== id);
        renderEmployees();
    }
}

function gotoPage(page) {
    currentPage = page;
    renderEmployees();
}

document.getElementById('search').addEventListener('input', renderEmployees);
document.getElementById('filterDepartment').addEventListener('change', renderEmployees);
document.getElementById('filterRole').addEventListener('change', renderEmployees);
document.getElementById('sort').addEventListener('change', renderEmployees);
document.getElementById('pageSize').addEventListener('change', renderEmployees);

renderEmployees();