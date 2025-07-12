# empolyee-dash-board
- Displays a list/grid of employees with:
  - Employee ID
  - First Name
  - Last Name
  - Email
  - Department
  - Role
- Each row includes:
  - ✏️ Edit button
  - 🗑️ Delete button
- Uses Freemarker’s `<#assign>` to pass mock JSON data to the frontend.

### 📝 Add/Edit Employee Form

- A styled, responsive form with the following fields:
  - First Name
  - Last Name
  - Email
  - Department
  - Role
- Client-side validation:
  - Required fields
  - Valid email format
- Form handled in-memory using JavaScript.

### 🔍 Filter, Search, Sort

- **Filter** by:
  - First Name
  - Department
  - Role
- **Search bar** for name/email
- **Sort** by:
  - First Name
  - Department

### 📄 Pagination / Infinite Scroll

- Supports client-side pagination:
  - 10, 25, 50, 100 per page
- Infinite scroll (optional enhancement)

### 📱 Responsive Design

- Optimized for desktop, tablet, and mobile
- Flexbox/Grid layout for adaptive UI

---

## 🧩 Technologies Used

- [x] HTML5
- [x] CSS3
- [x] JavaScript (Vanilla)
- [x] Freemarker Template Engine (for data rendering)

---

## 🚀 How to Run

1. Make sure Freemarker templates are rendered by your application or include sample mock rendering.
2. Open `index.ftl` through a server that can process Freemarker, or simulate the rendered HTML output for testing.
3. Ensure that:
   ```html
   <script src="data.js"></script>
   <script src="app.js"></script>
